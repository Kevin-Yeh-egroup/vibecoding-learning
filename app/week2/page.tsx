'use client'

import { useCallback, useEffect, useMemo, useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  LayoutDashboard,
  Lightbulb,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const SECTION_IDS = [
  'preface',
  'goals',
  'highlights',
  'tips',
  'reflection',
  'cta',
] as const

type SectionId = (typeof SECTION_IDS)[number]

const GOALS = [
  '能分辨模糊與結構化描述，並把需求改寫成 AI 較能穩定執行的內容',
  '能用對話做補充式優化，在少回合內改版，並留意風格一致與限制條件',
  '能連結職場情境（提案、MVP、與設計／工程溝通），並說出工具邊界與後續成長方向',
]

const HIGHLIGHTS = [
  '描述與提問：為什麼 AI「做不好」常與我們沒講清楚有關，以及有效提問的關鍵',
  '穩定改版：用對話調整、避免整頁重做；常見 Prompt 錯誤與畫面變亂的原因',
  '風格與應用：建立簡單規則讓畫面一致，並思考在職場／團隊中的角色',
  '進階環境（選修）：Cursor、Node.js、Git 與本機預覽——細節見投影片「完整」模式',
]

const TIPS = [
  '延續上週作品練習改版，比從零開始更能對照「有沒有變更準」',
  '每次只改一兩件事，並用區塊名稱指出位置，改版會快很多',
  '需要複製指令或連結時，請切到投影片的「完整」檢視',
]

const REFLECTION = [
  '你更能說出「模糊」與「具體可執行」描述的差別',
  '你知道如何用對話做小步調整，而不是每次都重講一整份需求',
  '你開始能把成果放回職場情境，並意識到工具與協作的邊界',
]

const PREFACE_BLOCKS: { title: string; paragraphs: string[] }[] = [
  {
    title: '今天的任務與準備',
    paragraphs: [
      '本週延續 Week 1：在已有一頁畫面的基礎上，練習把話講清楚、把畫面改到更穩、更一致，並連結到實際工作場景。請依講師指示準備可連上網路的裝置；若講師帶到進階環境，請對照投影片中的 Cursor／Node.js／Git 說明。',
      '若某一段與你的畫面不一致，先對照本頁與投影片的「本頁重點」，或舉手請講師協助，不必自行猜測。',
    ],
  },
  {
    title: '與 Week 1 的銜接',
    paragraphs: [
      '上週你體驗了「結構先、畫面後」：用對話整理內容，再交給 v0 產出介面。本週要把重心放在「描述品質」與「改版方法」：同樣的工具，描述越可執行、回饋越具體，產出就越穩。',
      '你可以沿用個人介紹頁當練習素材，或在講師同意下換成與工作較接近的主題；重點是練習方法，而不是重做一張完全不同的圖。',
    ],
  },
  {
    title: '本週教材：課堂引導與投影片',
    paragraphs: [
      '本頁是「課堂引導」：用語、目標、節奏與注意事項。步驟中的示範與長篇範例在「網頁投影片」裡，講師會依課堂進度帶你切換精簡／完整模式。',
      '投影片中的 Cursor 安裝與本機專案啟動屬進階選修；課堂上聽懂方向即可，可課後再依截圖與連結完成。',
    ],
  },
  {
    title: '練習時請遵守',
    paragraphs: [
      '本頁與工具中請勿輸入可辨識案主或第三人的敏感個資；示範與練習請用暱稱、代稱或假資料。各機構若有資訊安全或對外發布規範，以你服務單位的規定為準。',
      '工具能加快草稿與討論，無法替你承擔法遵或倫理責任；對外使用任何產出前，仍須由人確認內容是否合宜、正確。',
    ],
  },
  {
    title: '怎麼閱讀這份引導頁',
    paragraphs: [
      '讀完前言後，請看「學習目標」與「本週重點與進行方式」，對齊今天下課時要帶走的能力。實作與示範請依講師指示開啟「Week 2 投影片」，並善用完整模式中的範例與檢核表。',
    ],
  },
]

const PREFACE_PULLQUOTE =
  '記住：本週練的是「怎麼講清楚」和「怎麼改得準」。畫面已經在那裡了，我們把它變得更可信、更好講、更好用。'

function InstructorNote({
  show,
  children,
}: {
  show: boolean
  children: React.ReactNode
}) {
  if (!show) return null
  return (
    <div className="mt-4 rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-foreground/90">
      <p className="font-semibold text-accent mb-1">講師提示</p>
      <p className="text-foreground/80 leading-relaxed">{children}</p>
    </div>
  )
}

function Week2Content() {
  const searchParams = useSearchParams()
  const instructorMode = searchParams.get('instructor') === '1'
  const [active, setActive] = useState<SectionId>('preface')

  const navItems = useMemo(
    () => [
      { id: 'preface' as const, label: '前言' },
      { id: 'goals' as const, label: '學習目標' },
      { id: 'highlights' as const, label: '本週重點' },
      { id: 'tips' as const, label: '使用提示' },
      { id: 'reflection' as const, label: '今日回顧' },
      { id: 'cta' as const, label: '下一步' },
    ],
    [],
  )

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[]
    if (els.length === 0) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          setActive(visible.target.id as SectionId)
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const scrollTo = useCallback((id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const progress = useMemo(() => {
    const order: SectionId[] = [...SECTION_IDS]
    const idx = order.indexOf(active)
    if (idx < 0) return 0
    return (idx / (order.length - 1)) * 100
  }, [active])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(139,92,246,0.12),transparent)]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            ← 返回課程首頁
          </Link>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Link
              href="/week2/homework"
              className="inline-flex items-center gap-1 text-xs font-medium text-accent/95 underline-offset-4 hover:text-accent hover:underline sm:text-sm"
            >
              <ClipboardList className="size-3.5 shrink-0 opacity-90" aria-hidden />
              回家作業
            </Link>
            <span className="hidden text-border/80 sm:inline" aria-hidden>
              |
            </span>
            <Link
              href="/week2/slides"
              className="text-xs font-medium text-primary/90 underline-offset-4 hover:text-primary hover:underline sm:text-sm"
            >
              網頁投影片（11 頁）
            </Link>
            <span className="hidden text-xs text-muted-foreground sm:inline">
              Week 2 課堂引導
              {instructorMode ? ' · 講師模式' : ''}
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl gap-8 px-4 pb-24 pt-8 sm:px-6 lg:pt-12">
        <aside className="hidden w-52 shrink-0 lg:block">
          <div className="sticky top-24 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              進度
            </p>
            <div className="h-1.5 overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <nav className="space-y-1 border-l border-border/80 pl-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    'flex w-full items-center gap-2 rounded-md py-1.5 pl-2 text-left text-sm transition-all',
                    active === item.id
                      ? 'bg-primary/15 font-medium text-primary shadow-[inset_2px_0_0_0_var(--color-primary)]'
                      : 'text-muted-foreground hover:bg-white/5 hover:text-foreground',
                  )}
                >
                  <ChevronRight
                    className={cn(
                      'size-3.5 shrink-0 opacity-0 transition-opacity',
                      active === item.id && 'opacity-100',
                    )}
                  />
                  {item.label}
                </button>
              ))}
            </nav>
            {instructorMode && (
              <p className="text-xs leading-relaxed text-muted-foreground">
                給學員的連結請勿加上講師參數，網址列結尾應為 week2，不要帶問號與 instructor 字樣。
              </p>
            )}
          </div>
        </aside>

        <main className="min-w-0 flex-1 space-y-16 lg:space-y-20">
          <section id="preface" className="scroll-mt-28 space-y-10">
            <header className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Sparkles className="size-3.5" aria-hidden />
                Week 2 · 課堂用
              </div>
              <div className="space-y-3">
                <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  <span className="bg-gradient-to-r from-primary via-muted to-accent bg-clip-text text-transparent">
                    Week 2｜讓 AI 聽懂你
                  </span>
                </h1>
                <p className="max-w-3xl text-lg leading-snug text-foreground/90 sm:text-xl sm:leading-snug">
                  從描述、對話到穩定產出，並連結職場應用
                </p>
                <p className="max-w-2xl text-base leading-relaxed text-primary/90">
                  本週在既有畫面上練習「講清楚、改得準、風格穩」；進階環境請依投影片選修完成。
                </p>
              </div>
              <div className="flex max-w-2xl items-start gap-3 border-l-2 border-primary/40 pl-4">
                <BookOpen className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    前言
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    與本週實作有關的用語、節奏與注意事項。請對照講師示範與投影片操作。
                  </p>
                </div>
              </div>
            </header>

            <Card className="border-border/60 bg-white/[0.04] py-2 shadow-none backdrop-blur-md">
              <CardContent className="space-y-10 px-6 py-8 sm:px-8 sm:py-10">
                {PREFACE_BLOCKS.map((block) => (
                  <article key={block.title} className="space-y-3">
                    <h2 className="text-base font-semibold tracking-tight text-primary sm:text-lg">
                      {block.title}
                    </h2>
                    <div className="space-y-3 text-sm leading-[1.75] text-foreground/88 sm:text-[0.9375rem] sm:leading-[1.8]">
                      {block.paragraphs.map((para, i) => (
                        <p key={`${block.title}-${i}`}>{para}</p>
                      ))}
                    </div>
                  </article>
                ))}
                <aside
                  className="rounded-xl border border-accent/20 bg-accent/[0.07] px-5 py-4 sm:px-6"
                  aria-label="本段重點摘要"
                >
                  <p className="text-xs font-semibold tracking-wide text-accent">本節對照用</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">{PREFACE_PULLQUOTE}</p>
                </aside>
                <InstructorNote show={instructorMode}>
                  前言可快速帶過「與 Week 1 銜接」與「教材雙軌」；Cursor／Node 段落若課堂不操作，請明講「課後依投影片」即可。
                </InstructorNote>
              </CardContent>
            </Card>
          </section>

          <section id="goals" className="scroll-mt-28 space-y-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
              <LayoutDashboard className="size-6 shrink-0 text-primary" aria-hidden />
              學習目標
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              今天結束時，你可以對照下面三點，看看自己做到了哪幾項。
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {GOALS.map((g) => (
                <Card
                  key={g}
                  className="border-border/60 bg-white/[0.04] shadow-none backdrop-blur-md transition-all duration-300 hover:border-primary/35 hover:shadow-[0_0_24px_-4px_rgba(56,189,248,0.35)]"
                >
                  <CardContent className="flex items-start gap-3 pt-6">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <p className="text-sm leading-relaxed text-foreground/90">{g}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="highlights" className="scroll-mt-28 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">本週重點與進行方式</h2>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                下列與課程架構中的 Week 2 主題對齊；細部講義、範例與檢核表請在投影片的「完整」模式中對照。
              </p>
            </div>
            <Card className="border-border/60 bg-white/[0.04] shadow-none backdrop-blur-md">
              <CardContent className="px-6 py-6 sm:px-8 sm:py-8">
                <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-foreground/88 marker:text-primary/80">
                  {HIGHLIGHTS.map((h) => (
                    <li key={h} className="pl-1">
                      {h}
                    </li>
                  ))}
                </ul>
                <InstructorNote show={instructorMode}>
                  可依時間刪減「職場應用」深度，但務必保留「描述／改版」兩條主線，並讓學員至少開啟一次投影片完整模式對照。
                </InstructorNote>
              </CardContent>
            </Card>
          </section>

          <section id="tips" className="scroll-mt-28">
            <Card className="border-amber-500/25 bg-amber-500/[0.06] py-8 shadow-none backdrop-blur-md">
              <CardHeader className="px-6 sm:px-8">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Lightbulb className="size-5 text-amber-400" />
                  使用提示
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 sm:px-8">
                <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-foreground/88 marker:text-primary/80">
                  {TIPS.map((t) => (
                    <li key={t} className="pl-1">
                      {t}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section id="reflection" className="scroll-mt-28 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">今天你完成了什麼</h2>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                下課前可以心裡對照一次，或和旁邊夥伴簡短分享。
              </p>
            </div>
            <Card className="border-border/60 bg-white/[0.04] py-6 shadow-none backdrop-blur-md">
              <CardContent className="space-y-4 px-6 sm:px-8">
                {REFLECTION.map((r) => (
                  <div key={r} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                    <span>{r}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          <section id="cta" className="scroll-mt-28 pb-8">
            <Card className="overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 py-10 shadow-none backdrop-blur-md">
              <CardContent className="space-y-6 px-6 text-center sm:px-8">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">進行本週教材</h2>
                <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
                  開啟網頁投影片，依講師節奏切換精簡／完整模式；課後可自學 Cursor 與本機環境小節。
                </p>
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                    asChild
                  >
                    <Link href="/week2/slides">
                      開啟 Week 2 投影片
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-accent/40 text-foreground/90" asChild>
                    <Link href="/week2/homework">
                      <ClipboardList className="size-4" aria-hidden />
                      回家作業說明
                    </Link>
                  </Button>
                </div>
                <p className="mx-auto max-w-md text-xs leading-relaxed text-muted-foreground">
                  作業：請於 2026/4/30 前將優化後的專案資料夾壓縮檔交給 Kevin，詳見「回家作業」頁。
                </p>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  )
}

export default function Week2Page() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
          載入中…
        </div>
      }
    >
      <Week2Content />
    </Suspense>
  )
}
