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
  LayoutDashboard,
  Lightbulb,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const SECTION_IDS = [
  'preface',
  'goals',
  'step-1',
  'step-2',
  'step-3',
  'step-4',
  'step-5',
  'tips',
  'reflection',
  'cta',
] as const

type SectionId = (typeof SECTION_IDS)[number]

const STEPS = [
  {
    id: 'step-1' as const,
    num: 1,
    title: '想清楚：介紹頁要呈現什麼',
    instruction:
      '本週全班一起做個人介紹頁。請先列出幾件你希望別人認識你的事，寫關鍵字即可。',
    bullets: [
      '名字或稱呼（暱稱也可以）',
      '你在做什麼、興趣或專長',
      '一句話或一小段讓人記住你的介紹；若有作品或社群連結也可列在這裡（選填）',
    ],
    example: null as string | null,
    highlight:
      '真實內容、暱稱或假資料都可以。重點是練習把「關於我」拆成清楚的區塊，而不是一次寫滿長文。',
    instructor:
      '主題統一為個人介紹頁，可降低選題負擔。請學員用一至兩分鐘寫關鍵字，必要時邀請一人簡短分享。',
  },
  {
    id: 'step-2' as const,
    num: 2,
    title: '用 ChatGPT 整理需求',
    instruction:
      '請 ChatGPT 把你的想法整理成「頁面上有哪些區塊」以及「每個區塊適合放什麼內容」。你可以這樣開頭：',
    bullets: [] as string[],
    example:
      '幫我規劃一個單頁的個人介紹網頁，要有抬頭與簡短自我介紹、我在做什麼或興趣、聯絡或社群方式。請用條列寫出每個區塊的標題與建議放的內容，文字要口語、好讀。',
    highlight:
      '這一步的目標是拿到結構清楚的大綱。等等會把這段文字貼進 v0，當成生成畫面的依據。',
    instructor:
      '請強調分工：ChatGPT 協助結構與文案草稿，v0 負責畫面與版型。可示範如何請 AI 再縮短，或多加一個技能區。',
  },
  {
    id: 'step-3' as const,
    num: 3,
    title: '把內容貼到 v0',
    instruction:
      '把 ChatGPT 整理好的大綱與文案貼到 v0，請它生成你的個人介紹頁畫面。',
    bullets: [] as string[],
    example: null,
    highlight: '第一次只要看得出「這是在介紹你」的一整頁，就算達標。',
    instructor:
      '示範貼上與重新生成一次。可提醒學員加一句簡單的風格描述，例如單欄、手機也好讀。',
  },
  {
    id: 'step-4' as const,
    num: 4,
    title: '觀察畫面',
    instruction: '不必追求完美，先確認三件事：',
    bullets: ['有區塊', '有結構', '有內容'],
    example: null,
    highlight: '對照剛才的大綱，看看關於你的資訊是否都出現在畫面上。',
    instructor:
      '帶大家用「區塊」來描述畫面，例如頭像區、自介、技能列表，幫助建立共同詞彙。',
  },
  {
    id: 'step-5' as const,
    num: 5,
    title: '做小調整',
    instruction: '試著只改一件事，例如：',
    bullets: ['調整配色或整體風格', '調整區塊順序', '修改自介標題或其中一段文字'],
    example: null,
    highlight: '練習用一句話說清楚：要改哪一塊、希望變成什麼感覺。',
    instructor:
      '請學員口述一個與自己介紹有關的小改動，由講師示範如何在 v0 裡用對話修正。',
  },
]

const GOALS = [
  '用 ChatGPT 整理「關於我」的內容結構，再用 v0 做出看得見的介紹頁',
  '理解 ChatGPT 負責內容與結構，v0 負責畫面與版型',
  '完成一頁屬於自己的個人介紹原型',
]

const TIPS = [
  '介紹頁不必一次到位，先求別人看得懂你是誰',
  'AI 可以反覆修改，隨時換一種說法再生成',
  '描述越具體，例如區塊、語氣或閱讀裝置，畫面通常越穩定',
]

const REFLECTION = [
  '你完成了一頁屬於自己的介紹畫面',
  '你知道如何先用對話整理內容，再交給工具產出畫面',
  '你開始用區塊與版型介紹自己，而不僅是一段文字',
]

const PREFACE_BLOCKS: { title: string; paragraphs: string[] }[] = [
  {
    title: '今天的任務與準備',
    paragraphs: [
      '今天的主題是個人介紹頁。請依講師指示準備可連上網路的裝置，並在引導下開啟 ChatGPT 與 v0。本週練習不要求撰寫程式，請跟著畫面上的步驟操作即可。',
      '若某一步與你的畫面不一致，先對照該步下方的重點說明，或舉手請講師協助，不必自行猜測。',
    ],
  },
  {
    title: '本週教材裡的用語：Vibe Coding',
    paragraphs: [
      'Vibe Coding（也寫成 vibecoding）在公開討論裡，多指用口語把需求說給 AI 聽，由工具產出畫面或程式，你再依「看得見的結果」回饋、修改，必要時多試幾次。本週我們只取課堂實作需要的部分：描述、生成、對照畫面、再調整。',
      '課堂上不必記名詞出處；若講師提到 Andrej Karpathy，僅作為這個說法在業界被廣泛討論的背景。無需背誦人名，重點是你能否依步驟完成練習。',
    ],
  },
  {
    title: 'ChatGPT 和 v0，今天各做什麼',
    paragraphs: [
      'ChatGPT：協助你把「關於我」整理成區塊清楚的大綱與文字草稿。',
      'v0：依你貼上的內容，產出網頁畫面與版型。稍後的 Step 2 到 Step 5 會依這個分工帶你做；請勿跳過 ChatGPT 直接空丟一句話給 v0，較容易版面散掉或內容不完整。',
    ],
  },
  {
    title: '練習時請遵守',
    paragraphs: [
      '本頁與工具中請勿輸入可辨識案主或第三人的敏感個資；示範與練習請用暱稱、代稱或假資料。各機構若有資訊安全或對外發布規範，以你服務單位的規定為準。',
      '工具能加快排版與草稿，無法替你承擔法遵或倫理責任；對外使用任何產出前，仍須由人確認內容是否合宜、正確。',
    ],
  },
  {
    title: '怎麼閱讀這份引導頁',
    paragraphs: [
      '讀完本節後，請往下捲到「學習目標」，確認今天結束時要對得起哪幾件事。接著依 Step 1 到 Step 5 順序操作；每一步的「重點」是對照檢查用，不是額外作業。',
    ],
  },
]

const PREFACE_PULLQUOTE =
  '今天操作上記住這個循環：先說清楚要什麼，生成一版，看畫面，再改。從介紹你自己開始練。'

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

function Week1Content() {
  const searchParams = useSearchParams()
  const instructorMode = searchParams.get('instructor') === '1'
  const [active, setActive] = useState<SectionId>('preface')

  const navItems = useMemo(
    () => [
      { id: 'preface' as const, label: '前言' },
      { id: 'goals' as const, label: '學習目標' },
      ...STEPS.map((s) => ({ id: s.id, label: `Step ${s.num}` })),
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

  const stepIndex = STEPS.findIndex((s) => s.id === active)
  const progress =
    active === 'preface' || active === 'goals'
      ? 0
      : stepIndex >= 0
        ? ((stepIndex + 1) / STEPS.length) * 100
        : active === 'tips' || active === 'reflection' || active === 'cta'
          ? 100
          : 0

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
              href="/week1/slides"
              className="text-xs font-medium text-primary/90 underline-offset-4 hover:text-primary hover:underline sm:text-sm"
            >
              網頁教材（10 頁）
            </Link>
            <span className="hidden text-xs text-muted-foreground sm:inline">
              課堂引導頁
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
                給學員的連結請勿加上講師參數，網址列結尾應為 week1，不要帶問號與 instructor 字樣。
              </p>
            )}
          </div>
        </aside>

        <main className="min-w-0 flex-1 space-y-16 lg:space-y-20">
          <section id="preface" className="scroll-mt-28 space-y-10">
            <header className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Sparkles className="size-3.5" aria-hidden />
                Week 1 · 課堂用
              </div>
              <div className="space-y-3">
                <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  <span className="bg-gradient-to-r from-primary via-muted to-accent bg-clip-text text-transparent">
                    Week 1｜從想法到畫面
                  </span>
                </h1>
                <p className="max-w-3xl text-lg leading-snug text-foreground/90 sm:text-xl sm:leading-snug">
                  用 ChatGPT × v0 體驗 Vibe Coding
                </p>
                <p className="max-w-2xl text-base leading-relaxed text-primary/90">
                  本週主題是每人製作一頁個人介紹。全程不需寫程式。
                </p>
              </div>
              <div className="flex max-w-2xl items-start gap-3 border-l-2 border-primary/40 pl-4">
                <BookOpen className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    前言
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    與今天實作有關的用語、分工與注意事項。請對照講師示範與下方步驟操作。
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
                  前言已改為教材語氣；若時間緊可只唸「今天的任務與準備」與「兩個工具各做什麼」，其餘請學員自讀。資安段請口頭重申：示範帳號與假資料即可。
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

          <section className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">步驟引導</h2>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                依序完成即可。每步都有重點提示，講師會帶你對照畫面說明。
              </p>
            </div>
            {STEPS.map((step) => (
              <Card
                key={step.id}
                id={step.id}
                className="scroll-mt-28 border-border/60 bg-white/[0.04] py-8 shadow-none backdrop-blur-md transition-all duration-300 hover:border-primary/30"
              >
                <CardHeader className="space-y-1 px-6 sm:px-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/25 to-accent/25 text-sm font-bold text-primary ring-1 ring-primary/30">
                      {step.num}
                    </span>
                    <CardTitle className="text-lg sm:text-xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5 px-6 sm:px-8">
                  <p className="leading-relaxed text-foreground/90">{step.instruction}</p>
                  {step.bullets.length > 0 && (
                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary/80">
                      {step.bullets.map((b) => (
                        <li key={b} className="pl-1">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {step.example && (
                    <figure className="rounded-lg border border-primary/25 bg-primary/[0.06] py-3 pl-4 pr-4">
                      <figcaption className="mb-2 text-xs font-medium text-primary/90">範例說法，可直接複製後再依你調整</figcaption>
                      <blockquote className="border-l-2 border-primary/35 pl-3 text-sm leading-relaxed text-foreground/90">
                        {step.example}
                      </blockquote>
                    </figure>
                  )}
                  <div className="rounded-lg border border-accent/20 bg-accent/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-accent">重點：</span>
                    {step.highlight}
                  </div>
                  <InstructorNote show={instructorMode}>{step.instructor}</InstructorNote>
                </CardContent>
              </Card>
            ))}
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
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">準備進入下一步</h2>
                <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
                  Week 2 會整合「精準描述與改版」與「風格一致」：讓 AI 聽懂、改得準，畫面也穩得住。
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                  disabled
                  title="尚未開放"
                >
                  Week 2｜描述、對話與風格
                  <ArrowRight className="size-4" />
                </Button>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  )
}

export default function Week1Page() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
          載入中…
        </div>
      }
    >
      <Week1Content />
    </Suspense>
  )
}
