'use client'

import {
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
  ArrowDown,
  ArrowUp,
  BookOpen,
  ChevronLeft,
  Monitor,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Mode = 'present' | 'teach'

type SlideDef = {
  title: string
  subtitle?: string
  narrative?: string[]
  bullets?: (string | ReactNode)[]
  highlights?: string[]
  keyTakeaway?: string
  sections?: {
    heading: string
    lines: (string | ReactNode)[]
    figure?: { src: string; alt: string; caption?: string }
  }[]
  exampleCards?: { label: string; type: 'bad' | 'good'; text: string | string[] }[]
  codeBlock?: { caption?: string; lines: string[] }
  instructorNote?: string
}

function scrollSlideToCenter(
  root: HTMLElement,
  slide: HTMLElement,
  behavior: ScrollBehavior = 'smooth',
) {
  const rootRect = root.getBoundingClientRect()
  const slideRect = slide.getBoundingClientRect()
  const slideCenter = slideRect.top + slideRect.height / 2
  const rootCenter = rootRect.top + root.clientHeight / 2
  const delta = slideCenter - rootCenter
  const max = Math.max(0, root.scrollHeight - root.clientHeight)
  const top = Math.min(Math.max(0, root.scrollTop + delta), max)
  root.scrollTo({ top, behavior })
}

const SLIDES: SlideDef[] = [
  // ── Hero ──────────────────────────────────────────────────────────
  {
    title: 'Week 2｜讓 AI 聽懂你',
    subtitle: '從描述 → 對話 → 穩定產出 → 職場應用',
    narrative: [
      '今天你會學會讓 AI 做出更穩定、更符合需求的畫面，並開始把成果用在實際工作中。',
    ],
    keyTakeaway: '下課時，你會帶走一頁比上週更清楚、更穩定，可以拿給別人看的成果。',
    instructorNote: '開場可請學員回顧上週作品，快速點評「哪裡還不夠清楚」，帶入本週主題。',
  },
  // ── Section 1: Cursor ─────────────────────────────────────────────
  {
    title: '進入進階世界：Cursor 安裝',
    narrative: [
      '如果你希望未來可以進一步修改畫面、甚至讓網站上線，你會需要一個工具叫做 Cursor。',
      '以下依序完成：下載 Cursor、安裝 Node.js 與 Git、確認環境，再把課程專案在本機跑起來。',
    ],
    sections: [
      {
        heading: 'Cursor 編輯器',
        lines: [
          <>
            前往官網下載並安裝（繁中）：
            <a
              href="https://cursor.com/zh-Hant"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 break-all text-sky-200 underline decoration-sky-400/60 underline-offset-2 transition-colors hover:text-sky-100"
            >
              https://cursor.com/zh-Hant
            </a>
          </>,
          '安裝過程中可依提示建立帳號（例如使用 GitHub 登入）。',
        ],
      },
      {
        heading: '安裝 Node.js（LTS）',
        lines: [
          <>
            前往 Node.js 官網下載 LTS：
            <a
              href="https://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 break-all text-sky-200 underline decoration-sky-400/60 underline-offset-2 transition-colors hover:text-sky-100"
            >
              https://nodejs.org
            </a>
          </>,
          'Windows：執行安裝程式（.msi），按下一步直至完成。',
          'Mac：自官網下載並安裝對應安裝包。',
          '安裝完成後開啟終端機（Windows: cmd／Mac: Terminal）確認版本。',
        ],
        figure: {
          src: '/slides/nodejs-download.png',
          alt: 'Node.js 官網首頁示意：點選綠色 Get Node.js® 按鈕下載 LTS 安裝檔',
          caption:
            '示意：開啟 nodejs.org 後點選首頁的「Get Node.js®」下載安裝檔，下載完成後執行安裝程式直至結束。',
        },
      },
      {
        heading: 'Git（使用 Cursor 時建議安裝）',
        lines: [
          <>
            Windows 安裝說明：
            <a
              href="https://git-scm.com/install/windows"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 break-all text-sky-200 underline decoration-sky-400/60 underline-offset-2 transition-colors hover:text-sky-100"
            >
              https://git-scm.com/install/windows
            </a>
          </>,
          '於官網 Install → Windows 分頁點選主要下載連結；下載後請執行安裝程式直至完成。',
        ],
        figure: {
          src: '/slides/git-windows-download.png',
          alt: 'Git for Windows 官網下載頁示意：在 Windows 分頁點選 Click here to download 取得安裝檔',
          caption: '示意：點選頁面上的主要下載連結取得安裝檔，下載後請完成安裝。',
        },
      },
      {
        heading: '其他',
        lines: ['請準備穩定的網路連線（下載與 npm 安裝需要）。'],
      },
      {
        heading: '快速檢查環境',
        lines: [
          '開啟終端機（Windows: cmd／Mac: Terminal），執行：',
          <span className="block font-mono text-slate-100/95">
            node --version <span className="text-slate-400"># 應顯示 v18.x.x 或更高</span>
          </span>,
          <span className="block font-mono text-slate-100/95">
            npm --version <span className="text-slate-400"># 應顯示 9.x.x 或更高</span>
          </span>,
        ],
      },
      {
        heading: '安裝後的操作｜步驟 1：解壓縮並打開專案',
        lines: [
          '解壓縮下載的 ZIP 到桌面或指定資料夾。',
          '開啟 Cursor，將整個專案資料夾拖進 Cursor 視窗（或以 File → Open Folder 開啟）。',
        ],
      },
      {
        heading: '安裝後的操作｜步驟 2：安裝依賴並啟動本機伺服器',
        lines: [
          '在 Cursor 開啟終端機：View → Terminal。',
          <span className="block font-mono text-slate-100/95">
            1. npm install --legacy-peer-deps
          </span>,
          <span className="block font-mono text-slate-100/95">
            2. npm run dev
          </span>,
          <>
            瀏覽器開啟{' '}
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-sky-200 underline decoration-sky-400/60 underline-offset-2 transition-colors hover:text-sky-100"
            >
              http://localhost:3000
            </a>
            ——看到網站在本機運行即成功。
          </>,
        ],
      },
    ],
    keyTakeaway:
      '依序安裝 Cursor、Node.js、Git，確認 node／npm 版本後，在專案目錄執行 npm install 與 npm run dev，即可在本機預覽。',
    instructorNote:
      '若課堂時間不足，可演示一次終端機指令與 localhost；細節請學員依投影片課後完成。Mac 學員請提醒改用自己平台的 Git 安裝方式。',
  },
  // ── Section 2: 為什麼 AI 有時候做不好 ────────────────────────────
  {
    title: 'AI 不是不聰明，而是你沒有講清楚',
    highlights: ['需要清楚的說明', '需要有結構的資訊', '不明確時會誤解'],
    narrative: [
      'AI 就像一位很聰明但不是母語使用者的人，它需要你給出清楚、有結構的說明，才能做出你想要的結果。',
      '不明確的描述會讓 AI 自行填空，而它填的內容不一定是你要的。',
    ],
    sections: [
      {
        heading: '核心觀念',
        lines: ['AI 不會幫你想', 'AI 只會照你說的做'],
      },
    ],
    keyTakeaway: '問題不在 AI 不夠聰明，而在你的描述不夠具體。',
    instructorNote: '可舉例：叫同事「做個好看的頁面」和「做一個深色背景、三欄卡片的活動頁」，結果會差很多。',
  },
  // ── Section 3: 有效提問 4 關鍵 ────────────────────────────────────
  {
    title: '讓 AI 做得好的 4 個關鍵',
    narrative: ['掌握這 4 個關鍵，你的 AI 產出會穩定很多。'],
    sections: [
      {
        heading: '1. 清楚定義任務',
        lines: ['你要 AI 做什麼（例如：設計一個活動頁）'],
      },
      {
        heading: '2. 提供背景',
        lines: ['這個頁面是做什麼用（例如：招生、提案）'],
      },
      {
        heading: '3. 指定輸出格式',
        lines: ['要用區塊、列表還是段落呈現'],
      },
      {
        heading: '4. 分步驟說明',
        lines: ['不要一次講全部，拆成步驟'],
      },
    ],
    exampleCards: [
      {
        label: '❌ 模糊',
        type: 'bad',
        text: '幫我做一個好看的頁面',
      },
      {
        label: '✅ 清楚',
        type: 'good',
        text: [
          '請設計一個活動介紹頁，包含：',
          '• 標題區',
          '• 活動資訊',
          '• 三個重點內容區',
          '• 報名方式',
        ],
      },
    ],
    keyTakeaway: '好的提問讓你少改三次；清楚描述就是在幫自己省時間。',
    instructorNote: '可讓學員兩兩討論：你上週的 Prompt 算哪一類？',
  },
  // ── Section 4: Prompt 注意事項 ────────────────────────────────────
  {
    title: '讓 AI 穩定的關鍵（避免常見錯誤）',
    sections: [
      {
        heading: '1. 表達要清楚',
        lines: ['避免使用「這個」「那個」等模糊詞'],
      },
      {
        heading: '2. 結構要明確',
        lines: ['使用條列、分段、編號'],
      },
      {
        heading: '3. 語氣與風格要一致',
        lines: ['不要同時要求「很專業又像小學生」'],
      },
      {
        heading: '4. 指示不要矛盾',
        lines: ['不要同時要求「只講優點又講缺點」'],
      },
      {
        heading: '5. 加上限制條件',
        lines: ['使用簡單語言', '不用專業術語', '不包含個人資料'],
      },
    ],
    keyTakeaway: '清楚、一致、不矛盾——寫 Prompt 就像寫需求規格，說得越具體，AI 做得越穩。',
    instructorNote: '可讓學員找出自己上週 Prompt 的問題並提出修正版本。',
  },
  // ── Section 5: 對話與優化 ─────────────────────────────────────────
  {
    title: '不要重做，學會調整',
    highlights: ['用對話調整'],
    narrative: [
      '初學者常見方式：不滿意 → 重做 → 再重做，每次都從零開始，浪費大量時間。',
      '進階方式是用對話調整：指出哪裡不對、希望變成什麼，讓 AI 只改那一塊。',
    ],
    sections: [
      {
        heading: '你可以用這些句型調整',
        lines: [
          '「把卡片改成橫向排列」',
          '「把顏色改為藍色系」',
          '「調整區塊順序，把聯絡方式移到最下面」',
        ],
      },
    ],
    keyTakeaway: '目標：3 次內讓畫面穩定。每次調整要說清楚「改哪裡」和「改成什麼」。',
    instructorNote: '可示範一次「重做」和一次「對話調整」，讓學員感受效率差異。',
  },
  // ── Section 6: 風格一致性 ─────────────────────────────────────────
  {
    title: '為什麼畫面會亂？',
    bullets: [
      '沒有設定風格',
      '每次描述不同',
      '沒有固定規則',
    ],
    narrative: [
      '風格不一致是最常見的問題：這次說「簡潔」，下次說「豐富」，AI 每次都從頭解讀。',
    ],
    sections: [
      {
        heading: '解決方法：在每次 Prompt 都加入風格規則',
        lines: [
          '顏色（例如：深色＋藍紫科技風）',
          '排版（卡片式 / 區塊式）',
          '元件一致性（按鈕樣式、標題大小）',
        ],
      },
    ],
    exampleCards: [
      {
        label: '固定風格 Prompt 範例',
        type: 'good',
        text: '請使用深色背景、藍紫科技風、卡片式設計',
      },
    ],
    keyTakeaway: '把風格設定複製貼上在每次 Prompt 開頭，就能讓畫面保持一致。',
    instructorNote: '可帶學員整理出一句固定的「風格宣言」，之後每次都加進 Prompt。',
  },
  // ── Section 7: 職場應用 ───────────────────────────────────────────
  {
    title: '這可以用在哪？',
    highlights: ['提案原型', 'MVP 展示頁', '活動頁', '與設計師溝通工具'],
    narrative: [
      '你現在做的不只是畫面，而是一種溝通工具：讓別人看懂你的想法，在討論還沒開始前就建立共識。',
    ],
    sections: [
      {
        heading: '核心價值',
        lines: [
          '你不只是產出 UI',
          '你是在讓別人「看懂你的想法」',
        ],
      },
    ],
    keyTakeaway: '從工作報告到客戶提案，一頁清楚的 UI 原型比十頁文字說明更有說服力。',
    instructorNote: '可請學員分享：你工作中有哪個情境可以用到這個？',
  },
  // ── Section 8: AI × 你 × 團隊 ────────────────────────────────────
  {
    title: 'AI × 你 × 專業團隊',
    sections: [
      {
        heading: '你可以做到',
        lines: ['快速產出初步畫面', '說清楚需求', '做出原型'],
      },
      {
        heading: '我們可以協助',
        lines: ['優化設計', '技術開發', '上線與維護'],
      },
    ],
    narrative: [
      '這不是取代，而是分工：你負責「想法與方向」，專業團隊協助「完成與落地」。',
    ],
    keyTakeaway: '你的角色是「需求翻譯官」：把想法說清楚，讓 AI 和團隊都能接著往前做。',
    instructorNote: '可強調：課程的目標不是讓學員自己做完整產品，而是讓溝通更有效率。',
  },
  // ── Section 9: 回家作業 ───────────────────────────────────────────
  {
    title: '一週優化任務',
    narrative: ['請在一週內完成以下五個步驟，讓上週的成果升級。'],
    sections: [
      {
        heading: '五個步驟',
        lines: [
          '1. 用 ChatGPT 重新整理你的頁面需求',
          '2. 用 v0 重新生成畫面',
          '3. 至少進行 3 次優化對話',
          '4. 加入風格規則（固定一句風格宣言）',
          '5. 完成一頁「可以展示」的成果',
        ],
      },
      {
        heading: '完成標準',
        lines: [
          '有清楚結構',
          '有一致風格',
          '有完整內容',
          '可以拿給別人看',
        ],
      },
    ],
    keyTakeaway: '不需要完美；重點是「比上週更清楚、更穩定」。',
    instructorNote: '鼓勵學員在群組分享截圖，互相回饋；也可設計一個下週開場的「成果展示」環節。',
  },
  // ── Final ─────────────────────────────────────────────────────────
  {
    title: '你已經升級了',
    highlights: ['讓 AI 產出你要的結果'],
    narrative: [
      '從：讓 AI 隨機產生',
      '到：讓 AI 產出你要的結果',
      '這不只是工具的進步，而是你思考方式的升級——你開始知道怎麼「說清楚需求」，這個能力在任何工作場景都有用。',
    ],
    keyTakeaway: '你不再只是 AI 的使用者，而是能夠駕馭 AI 的人。',
    instructorNote: '最後可請 1-2 位學員分享今天最大的收穫，作為課程的結語。',
  },
]

function SlideShell({
  index,
  total,
  mode,
  children,
}: {
  index: number
  total: number
  mode: Mode
  children: React.ReactNode
}) {
  return (
    <section
      data-slide-index={index}
      className={cn(
        'relative flex min-h-full snap-center snap-always flex-col justify-center px-5 py-14 sm:px-10 sm:py-16 lg:px-16',
        'border-b border-white/5',
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(56,189,248,0.14),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_40%,rgba(139,92,246,0.12),transparent)]" />
      </div>

      <div
        className={cn(
          'relative z-10 mx-auto w-full transition-all duration-500',
          mode === 'teach' ? 'max-w-3xl' : 'max-w-2xl',
        )}
      >
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/85">
          Week 2 課堂 · 投影片 第 {index + 1} / {total} 頁
        </p>
        {children}
      </div>
    </section>
  )
}

function Week2SlidesInner() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const initialMode: Mode = searchParams.get('mode') === 'teach' ? 'teach' : 'present'
  const [mode, setMode] = useState<Mode>(initialMode)
  const [active, setActive] = useState(0)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLElement | null)[]>([])
  const activeRef = useRef(0)
  activeRef.current = active
  const programmaticScrollLockRef = useRef<number | null>(null)

  useEffect(() => {
    const m = searchParams.get('mode') === 'teach' ? 'teach' : 'present'
    setMode(m)
  }, [searchParams])

  const setModeAndUrl = useCallback(
    (next: Mode) => {
      setMode(next)
      const q = new URLSearchParams(searchParams.toString())
      if (next === 'teach') q.set('mode', 'teach')
      else q.delete('mode')
      const qs = q.toString()
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
    },
    [pathname, router, searchParams],
  )

  const goTo = useCallback((i: number, behavior: ScrollBehavior = 'smooth') => {
    const root = scrollerRef.current
    const clamped = Math.max(0, Math.min(SLIDES.length - 1, i))
    setActive(clamped)

    if (!root) return

    const slides = SLIDES.map((_, idx) =>
      root.querySelector(`[data-slide-index="${idx}"]`),
    ) as (HTMLElement | null)[]
    slideRefs.current = slides

    const el = slides[clamped]
    if (!el) return

    const clearLock = () => {
      programmaticScrollLockRef.current = null
    }

    if (behavior === 'smooth') {
      programmaticScrollLockRef.current = clamped
      root.addEventListener('scrollend', clearLock, { once: true })
      window.setTimeout(clearLock, 700)
    } else {
      programmaticScrollLockRef.current = clamped
      requestAnimationFrame(() => {
        requestAnimationFrame(clearLock)
      })
    }

    scrollSlideToCenter(root, el, behavior)
  }, [])

  useEffect(() => {
    const root = scrollerRef.current
    if (!root) return

    const collectSlides = () =>
      SLIDES.map((_, idx) => root.querySelector(`[data-slide-index="${idx}"]`)).filter(
        Boolean,
      ) as HTMLElement[]

    slideRefs.current = collectSlides()

    let raf = 0
    let idleTimer: ReturnType<typeof setTimeout> | undefined

    const computeActive = () => {
      if (programmaticScrollLockRef.current != null) return

      const slides = collectSlides()
      if (!slides.length) return

      const centerY = root.getBoundingClientRect().top + root.clientHeight / 2
      let best = 0
      let bestDist = Number.POSITIVE_INFINITY

      slides.forEach((el, idx) => {
        const r = el.getBoundingClientRect()
        const midY = r.top + r.height / 2
        const d = Math.abs(midY - centerY)
        if (d < bestDist) {
          bestDist = d
          best = idx
        }
      })

      setActive((prev) => (prev !== best ? best : prev))
    }

    const updateActiveFromScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(computeActive)
    }

    const updateActiveWhenIdle = () => {
      clearTimeout(idleTimer)
      idleTimer = setTimeout(updateActiveFromScroll, 140)
    }

    const onScrollEnd = () => {
      clearTimeout(idleTimer)
      updateActiveFromScroll()
    }

    root.addEventListener('scroll', updateActiveWhenIdle, { passive: true })
    root.addEventListener('scrollend', onScrollEnd)
    updateActiveFromScroll()

    return () => {
      root.removeEventListener('scroll', updateActiveWhenIdle)
      root.removeEventListener('scrollend', onScrollEnd)
      clearTimeout(idleTimer)
      cancelAnimationFrame(raf)
    }
  }, [mode])

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      goTo(activeRef.current, 'instant')
    })
  }, [mode, goTo])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault()
        goTo(active + 1)
      }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        goTo(active - 1)
      }
      if (e.key === 'Home') {
        e.preventDefault()
        goTo(0)
      }
      if (e.key === 'End') {
        e.preventDefault()
        goTo(SLIDES.length - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, goTo])

  const modeLabel = useMemo(
    () => ({ present: '精簡', teach: '完整' } as const),
    [],
  )

  return (
    <div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-[#0B0F1F] text-slate-100">
      <header className="z-50 flex shrink-0 items-center justify-between gap-3 border-b border-white/10 bg-[#0B0F1F]/90 px-3 py-2 pt-[max(0.5rem,env(safe-area-inset-top))] backdrop-blur-md sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <Button variant="ghost" size="sm" asChild className="text-slate-300 hover:text-white">
            <Link href="/week2" className="gap-1">
              <ChevronLeft className="size-4 shrink-0 opacity-80" />
              <span className="hidden sm:inline">Week 2 課堂</span>
            </Link>
          </Button>
          <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden />
          <Link
            href="/week2/homework"
            className="hidden truncate text-xs text-violet-300/90 transition-colors hover:text-violet-200 sm:inline sm:max-w-[10rem]"
          >
            回家作業
          </Link>
          <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden />
          <Link
            href="/"
            className="hidden truncate text-xs text-slate-400 transition-colors hover:text-primary sm:inline sm:max-w-[10rem] md:max-w-none"
          >
            課程首頁
          </Link>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div
            className="flex rounded-lg border border-white/10 bg-white/[0.04] p-0.5"
            role="group"
            aria-label="閱讀密度"
          >
            <button
              type="button"
              onClick={() => setModeAndUrl('present')}
              className={cn(
                'flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors sm:px-3 sm:text-sm',
                mode === 'present'
                  ? 'bg-primary/20 text-primary shadow-[0_0_20px_-4px_rgba(56,189,248,0.5)]'
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-200',
              )}
              title="投影或快速瀏覽：字較大、段落較少"
            >
              <Monitor className="size-3.5 sm:size-4" aria-hidden />
              {modeLabel.present}
            </button>
            <button
              type="button"
              onClick={() => setModeAndUrl('teach')}
              className={cn(
                'flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors sm:px-3 sm:text-sm',
                mode === 'teach'
                  ? 'bg-accent/25 text-violet-200 shadow-[0_0_20px_-4px_rgba(139,92,246,0.45)]'
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-200',
              )}
              title="自讀與複習：顯示完整說明與範例"
            >
              <BookOpen className="size-3.5 sm:size-4" aria-hidden />
              {modeLabel.teach}
            </button>
          </div>

          <div className="flex items-center rounded-lg border border-white/10 bg-white/[0.04]">
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="rounded-r-none text-slate-300 hover:text-white"
              onClick={() => goTo(active - 1)}
              aria-label="上一頁"
            >
              <ArrowUp className="size-4" />
            </Button>
            <span className="min-w-[2.75rem] select-none text-center text-xs tabular-nums text-slate-400 sm:text-sm">
              {active + 1}/{SLIDES.length}
            </span>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="rounded-l-none text-slate-300 hover:text-white"
              onClick={() => goTo(active + 1)}
              aria-label="下一頁"
            >
              <ArrowDown className="size-4" />
            </Button>
          </div>
        </div>
      </header>

      <div
        ref={scrollerRef}
        className="min-h-0 flex-1 snap-y snap-mandatory overflow-y-auto overscroll-y-contain scroll-smooth [-webkit-overflow-scrolling:touch] touch-pan-y"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {SLIDES.map((slide, i) => (
          <SlideShell key={i} index={i} total={SLIDES.length} mode={mode}>
            <div className="space-y-6 sm:space-y-7">
              <div className="space-y-3 sm:space-y-4">
                <h1
                  className={cn(
                    'text-balance font-bold tracking-tight text-white',
                    mode === 'present'
                      ? 'text-3xl leading-[1.12] sm:text-4xl md:text-5xl'
                      : 'text-3xl leading-tight sm:text-4xl md:text-[2.65rem]',
                  )}
                >
                  <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(56,189,248,0.25)]">
                    {slide.title}
                  </span>
                </h1>
                {slide.subtitle && (
                  <p
                    className={cn(
                      'max-w-2xl text-balance text-slate-300/95',
                      mode === 'present' ? 'text-lg sm:text-xl' : 'text-base sm:text-lg',
                    )}
                  >
                    {slide.subtitle}
                  </p>
                )}
              </div>

              {slide.highlights && slide.highlights.length > 0 && (
                <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
                  {slide.highlights.map((h) => (
                    <div
                      key={h}
                      className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3.5 py-1.5 text-sm text-sky-100 shadow-[0_0_24px_-8px_rgba(56,189,248,0.45)] sm:px-4 sm:py-2 sm:text-base"
                    >
                      <Sparkles className="size-3.5 shrink-0 text-sky-300 sm:size-4" aria-hidden />
                      {h}
                    </div>
                  ))}
                </div>
              )}

              {slide.narrative && slide.narrative.length > 0 && (
                <div
                  className={cn(
                    'space-y-3.5 text-pretty text-slate-200/95',
                    mode === 'present'
                      ? 'text-base leading-relaxed sm:text-lg sm:leading-relaxed'
                      : 'text-sm leading-[1.75] sm:text-[0.9375rem] sm:leading-[1.8]',
                  )}
                >
                  {slide.narrative.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              )}

              {slide.bullets && slide.bullets.length > 0 && (
                <ul
                  className={cn(
                    'space-y-3 text-slate-100/95',
                    mode === 'present' ? 'text-base sm:text-lg' : 'text-sm sm:text-base',
                  )}
                >
                  {slide.bullets.map((b, bi) => (
                    <li key={`bullet-${bi}`} className="flex gap-3">
                      <span
                        className="mt-2 size-2 shrink-0 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 shadow-[0_0_12px_rgba(56,189,248,0.55)]"
                        aria-hidden
                      />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {slide.sections && slide.sections.length > 0 && (
                <div className="space-y-4 rounded-2xl border border-violet-400/20 bg-violet-500/[0.07] p-4 sm:p-5">
                  {slide.sections.map((block) => (
                    <div key={block.heading} className="space-y-2">
                      <p className="text-sm font-semibold text-violet-100">{block.heading}</p>
                      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-200/92 marker:text-violet-300/80">
                        {block.lines.map((line, li) => (
                          <li key={`${block.heading}-${li}`} className="[&_a]:break-all">
                            {line}
                          </li>
                        ))}
                      </ul>
                      {block.figure ? (
                        <figure className="mt-3 space-y-2">
                          <div className="overflow-hidden rounded-xl border border-white/10 bg-black/25 shadow-[0_0_24px_-8px_rgba(0,0,0,0.5)]">
                            <Image
                              src={block.figure.src}
                              alt={block.figure.alt}
                              width={1280}
                              height={720}
                              className="h-auto w-full object-contain"
                              sizes="(max-width: 640px) 100vw, 42rem"
                            />
                          </div>
                          {block.figure.caption ? (
                            <figcaption className="text-xs leading-relaxed text-slate-400/95 sm:text-sm">
                              {block.figure.caption}
                            </figcaption>
                          ) : null}
                        </figure>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}

              {slide.exampleCards && slide.exampleCards.length > 0 && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {slide.exampleCards.map((card) => (
                    <div
                      key={card.label}
                      className={cn(
                        'rounded-2xl border p-4',
                        card.type === 'bad'
                          ? 'border-rose-500/25 bg-rose-500/[0.07]'
                          : 'border-emerald-500/25 bg-emerald-500/[0.07]',
                      )}
                    >
                      <p
                        className={cn(
                          'mb-2 text-xs font-semibold',
                          card.type === 'bad' ? 'text-rose-300' : 'text-emerald-300',
                        )}
                      >
                        {card.label}
                      </p>
                      {Array.isArray(card.text) ? (
                        <div className="space-y-0.5 font-mono text-[11px] leading-relaxed text-slate-200/95 sm:text-xs">
                          {card.text.map((line, li) => (
                            <p key={li}>{line}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="font-mono text-[11px] leading-relaxed text-slate-200/95 sm:text-xs">
                          {card.text}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {slide.keyTakeaway && (
                <footer className="rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/[0.08] to-violet-600/[0.08] p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200/90">
                    本頁重點
                  </p>
                  <p
                    className={cn(
                      'mt-2 leading-relaxed text-slate-100/95',
                      mode === 'present' ? 'text-base sm:text-lg' : 'text-sm sm:text-base',
                    )}
                  >
                    {slide.keyTakeaway}
                  </p>
                </footer>
              )}

              {mode === 'teach' && slide.instructorNote && (
                <details className="group rounded-xl border border-white/10 bg-black/20 text-sm text-slate-400">
                  <summary className="cursor-pointer list-none px-4 py-3 font-medium text-slate-500 transition-colors hover:text-slate-300 [&::-webkit-details-marker]:hidden">
                    <span className="inline-flex items-center gap-2">
                      講師／助教備註
                      <span className="text-xs font-normal text-slate-600 group-open:hidden">（按此展開）</span>
                    </span>
                  </summary>
                  <div className="border-t border-white/10 px-4 py-3 leading-relaxed text-slate-400">
                    {slide.instructorNote}
                  </div>
                </details>
              )}
            </div>
          </SlideShell>
        ))}
      </div>

      <nav
        className="flex shrink-0 items-center justify-center gap-1.5 border-t border-white/10 bg-[#0B0F1F]/95 px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md"
        aria-label="Slide 快速列"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`前往第 ${i + 1} 頁`}
            aria-current={i === active ? 'true' : undefined}
            onClick={() => goTo(i)}
            className={cn(
              'flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-full transition-colors active:bg-white/10',
            )}
          >
            <span
              className={cn(
                'size-2 rounded-full transition-all',
                i === active
                  ? 'scale-125 bg-gradient-to-r from-sky-400 to-violet-400 shadow-[0_0_12px_rgba(56,189,248,0.7)]'
                  : 'bg-white/20',
              )}
              aria-hidden
            />
          </button>
        ))}
      </nav>

      <p className="sr-only">
        鍵盤快捷：上／下、Page Up／Down、空白鍵切換頁；Home 第一頁；End 最末頁。完整模式網址可加
        ?mode=teach
      </p>
    </div>
  )
}

export default function Week2SlidesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-dvh items-center justify-center bg-[#0B0F1F] text-slate-400">
          載入教材…
        </div>
      }
    >
      <Week2SlidesInner />
    </Suspense>
  )
}
