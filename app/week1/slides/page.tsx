'use client'

import {
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
  ArrowDown,
  ArrowUp,
  BookOpen,
  ChevronLeft,
  MessageSquare,
  Monitor,
  Sparkles,
  Wand2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Mode = 'present' | 'teach'

type SlideDef = {
  title: string
  subtitle?: string
  /** 給學員讀的主敘述（精簡／完整皆顯示；完整模式另附小節與範例） */
  narrative?: string[]
  bullets?: string[]
  highlights?: string[]
  /** 本頁重點（精簡與完整皆顯示，精簡時字可略大） */
  keyTakeaway?: string
  /** 結構化小節（例：流程說明、觀摩檢核）—完整模式才顯示 */
  sections?: { heading: string; lines: string[] }[]
  /** 範例 Prompt（實作頁等） */
  promptExamples?: { label: string; text: string }[]
  /** 給講師／助教，預設摺疊 */
  instructorNote?: string
}

/** 將指定 slide 垂直置中於可捲動容器（不依賴 offsetParent，手機／巢狀定位也穩） */
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
  {
    title: '從想法到畫面',
    subtitle: '你不需要會寫程式，也能做出 UI',
    narrative: [
      '很多人不是沒想法，而是卡在「想法」和「看得見的畫面」中間：要畫 UI、要開軟體、要想版型，門檻一高就停住。',
      '今天我們換一條路：先用 ChatGPT 幫你把腦中的內容整理成「頁面上該有哪些區塊、每區放什麼」，再把這份結構交給 v0，讓它產出一頁可以滑、可以點的網頁畫面。',
      '你可以把它想成：你用自然語言當「設計說明」，AI 當「快速草稿」；你先求完成，再學會用對話把畫面調到更贴近你要的樣子。',
    ],
    keyTakeaway: '下課時，你會帶走一頁屬於你主題的 UI 草稿，並知道下一步怎麼改。',
    instructorNote:
      '開場可請學員確認網路與兩個工具分頁；強調今天產出是「可討論的原型」，不是正式上線產品。',
  },
  {
    title: '你是不是也這樣？',
    bullets: [
      '有想法但做不出來',
      '不會畫 UI',
      'AI 很強但不知道怎麼用',
    ],
    narrative: [
      '這三種感受通常來自同一件事：你把「想清楚」跟「畫出來」混在一起一次做完。結果是腦袋同時要處理內容、結構、版型與美感，負擔太大就容易放棄。',
      'AI 並不是要你「變得更會工具」，而是幫你把工作拆段：先讓文字與結構穩定下來，再讓另一個工具專心處理畫面。這樣你每一步都有可檢查的產出，比較不會迷路。',
    ],
    keyTakeaway: '今天的目標不是變成設計師，而是學會一條你可重複使用的路：結構先、畫面後。',
    instructorNote: '可請學員比手勢或聊天室回覆「中幾項」，建立共鳴後再接下一頁承諾。',
  },
  {
    title: '這堂課在做什麼？',
    highlights: ['用 AI，把想法變成畫面'],
    narrative: [
      '今天的學習成果很具體：你會完成一個單頁主題（個人／活動／課程三選一），畫面裡有清楚的區塊與內容，能拿去跟同事、朋友或使用者討論「像不像你要的」。',
      '我們刻意先不談工程部署、也不談完整設計系統；那些會在後續週次慢慢補上。Week 1 先把「從零到一」打通：讓你相信自己做得出來，而且知道卡關時要回到哪個步驟。',
    ],
    sections: [
      {
        heading: '你今天會練到的能力',
        lines: [
          '把主題拆成「區塊標題＋每區要講什麼」',
          '把文字結構丟給 v0，得到第一版版型',
          '用「指出區塊＋說清楚要怎麼改」的方式微調畫面',
        ],
      },
    ],
    keyTakeaway: '先求「看得懂、找得到區塊」，再求漂亮；完成比完美更重要。',
    instructorNote: '對齊期待：先降低「要一次到位」的壓力，鼓勵實作與試錯。',
  },
  {
    title: '什麼是 Vibe Coding？',
    highlights: ['用語言描述', 'AI 幫你生成'],
    narrative: [
      'Vibe Coding 在這堂課裡，我們用最好記的版本：你把「想要的使用者體驗」用話講出來，AI 先幫你生出可看的結果；你再根據畫面回饋，逐步把細節補齊。',
      '它和傳統「先畫完整規格文件」不同：你先用低成本做出一個可討論的原型，讓回饋變得具體（「這一段太擠」「這個按鈕不夠明顯」），而不是停在抽象形容。',
      '請記住一個循環：描述 → 生成 → 對照畫面 → 調整。你不是在賭一次就中，而是在縮短每一次試錯的成本。',
    ],
    sections: [
      {
        heading: '你可以這樣理解它在幫你做什麼',
        lines: [
          '把「形容詞」變成「區塊與內容」',
          '把「感覺」變成「畫面上看得見的排列」',
          '把「我不知道怎麼改」變成「我至少能描述哪裡不對」',
        ],
      },
    ],
    keyTakeaway: '你不是在背指令，而是在練習把需求講到別人（含 AI）能執行的程度。',
    instructorNote: '可用「活動報名頁」當例子口述一輪循環，幫學員建立心智模型。',
  },
  {
    title: '今天只用兩個工具',
    bullets: ['ChatGPT 👉 想清楚', 'v0 👉 畫出來'],
    narrative: [
      'ChatGPT 適合處理文字與邏輯：把你的想法整理成段落、條列、區塊建議，並幫你補上你可能沒想到的欄位（例如活動頁常見的時間地點、報名方式）。',
      'v0 適合處理介面：把「區塊與內容」轉成排版、字級、留白、配色與元件配置。你要做的是把 ChatGPT 的輸出貼過去，並用一句話補上你希望的閱讀情境（例如單欄、手機優先）。',
      '請避免一開始就用一句很短的話直接丟給 v0：少了結構，畫面容易散掉或漏資訊。先用 ChatGPT 把「頁面地圖」畫出來，再交給 v0 做視覺化，會穩很多。',
    ],
    sections: [
      {
        heading: '分工怎麼記最快？',
        lines: [
          '卡住「不知道頁面要放什麼」→ 先回 ChatGPT',
          '卡住「有內容但長得很亂／不像網頁」→ 找 v0',
        ],
      },
    ],
    keyTakeaway: '先想清楚「有哪些區塊」，再談「長什麼樣子」。',
    instructorNote: '可請學員先開兩個瀏覽器分頁，左／右或前後切換，對照本頁分工。',
  },
  {
    title: '今天的流程',
    bullets: ['1. 想法', '2. ChatGPT', '3. v0', '4. 畫面'],
    narrative: [
      '第一步先把主題選定（個人／活動／課程），寫下關鍵字即可，不用寫作文。',
      '第二步請 ChatGPT 把關鍵字變成「區塊清單＋每區建議內容」，這一步的產出應該像一份小企畫，而不是一整篇散文。',
      '第三步把這份企畫貼到 v0，請它生成單頁 UI。你會先得到「能看」的版本，可能不完美，但足以讓你指出問題。',
      '第四步進入調整：你開始學會用對話修正，而不是每次重想一個全新需求。',
    ],
    sections: [
      {
        heading: '卡住時請回到這一頁問自己',
        lines: [
          '我現在缺的是「內容結構」還是「畫面呈現」？',
          '我能不能用「區塊名稱」指出我想改哪裡？',
        ],
      },
    ],
    keyTakeaway: '流程是你的導航：不知道下一步，就先確認自己在第幾步。',
    instructorNote: '可帶學員用手指跟著四步點一次，建立共同語言（之後講「回到第二步」大家都懂）。',
  },
  {
    title: '來看一次完整流程',
    narrative: [
      '講師會從一個很小的想法開始，示範如何請 ChatGPT 產出區塊與內容，再把結果貼到 v0 生成畫面，最後用一兩句對話做微調。',
      '請你把示範當成「聽懂方法」：你可以對照上一頁的四步驟，觀察示範者在哪一步停留、問了什麼、如何把需求講到可執行。',
    ],
    sections: [
      {
        heading: '觀摩時建議你對照這張檢核表',
        lines: [
          '示範者給 ChatGPT 的提示，有沒有包含「頁面類型」與「希望的區塊」？',
          'ChatGPT 的回覆是不是「條列、可貼」而不是空泛建議？',
          '貼到 v0 後，畫面能不能一眼看出主題與區塊？',
          '最後的調整句，有沒有指出「改哪裡」與「改成什麼感覺」？',
        ],
      },
    ],
    keyTakeaway: '你等等要做的，就是重播同一套流程：只是主題換成你的。',
    instructorNote: '示範時建議口述步驟名稱（對照 Slide 6），並刻意做一次「小調整」銜接到下一頁。',
  },
  {
    title: '現在換你做',
    bullets: ['三選一：個人／活動／課程'],
    narrative: [
      '你不需要選「最酷」的主題，選「你最容易講清楚」的最好。因為今天的學習目標是流程，不是比賽創意。',
      '建議順序：先用 3～8 個關鍵字描述你的主題 → 請 ChatGPT 整理成區塊與建議文案 → 全選貼到 v0 → 生成後先檢查「區塊有没有出來」，再開始調整外觀。',
      '若你暫時沒靈感：個人頁就寫「名字／做什麼／興趣／聯絡方式」；活動頁就寫「活動名／時間地點／對象／報名」；課程頁就寫「課名／適合誰／大綱／報名」。',
    ],
    sections: [
      {
        heading: '實作時請遵守（很重要）',
        lines: [
          '示範與練習請避免輸入可辨識他人或案主的敏感個資；暱稱、代稱或假資料即可。',
          '工具產出不等於可直接對外發布；若你要分享截圖，請先確認內容合宜。',
        ],
      },
    ],
    promptExamples: [
      {
        label: '個人介紹頁（貼到 ChatGPT）',
        text:
          '幫我規劃一個單頁的個人介紹網頁：要有抬頭與簡短自介、我在做什麼或興趣、聯絡或社群方式。請用條列寫出每個區塊的標題與建議放的內容，文字口語好讀。',
      },
      {
        label: '活動頁（貼到 ChatGPT）',
        text:
          '我要做一個單頁的活動宣傳：活動名稱、時間地點、適合誰、活動亮點三點、報名或聯絡方式。請用條列寫出區塊標題與每區要放的內容，並建議一個清楚的行動呼籲文案。',
      },
      {
        label: '課程頁（貼到 ChatGPT）',
        text:
          '幫我規劃一個單頁課程介紹：課程名稱、上完能帶走什麼、適合對象、大綱用 4 個要點、常見問題兩則、報名方式。請條列區塊標題與建議內容，語氣專業但好讀。',
      },
    ],
    keyTakeaway: '先完成一版「看得懂」的頁面，再開始微調；不要一開始就追求完美。',
    instructorNote: '巡堂提醒：先選題與列關鍵字，不要卡在配色；卡住就回到 ChatGPT 補結構。',
  },
  {
    title: '不用重做，要學會調整',
    highlights: ['AI 是用來對話的'],
    narrative: [
      '很多人遇到不滿意的畫面會想「整頁重做」。在學習階段這通常最耗時間，也最容易讓你失去方向，因為你把「結構」也一起丢掉了。',
      '比較有效率的做法是「保留大方向，只改局部」：先指出區塊名稱，再說你希望它變得更清楚、更短、更搶眼、或更适合手機閱讀。',
      '你可以把 AI 想成同事：你越能具體描述「哪裡、為什麼、希望變成什麼」，對方越能一次幫你改到點上。',
    ],
    sections: [
      {
        heading: '你可以先記兩個好用的句型',
        lines: [
          '「請保留整體版型，只把『自介』區塊改短，語氣更輕鬆。」',
          '「請把第二個區塊改成三欄卡片，手機上也要好滑、好讀。」',
        ],
      },
    ],
    keyTakeaway: '學會調整，比學會一次生成更重要；你是在練溝通，不是在賭運氣。',
    instructorNote: '可對比「重做」與「微調」何時才需要整頁重來（例如主題整個改掉）。',
  },
  {
    title: '你已經做到一件事',
    highlights: ['用 AI 做出畫面'],
    narrative: [
      '回頭看你今天做的事：你把抽象主題變成結構化內容，再把內容變成介面，最後還學會用對話推進畫面。這其實就是很多團隊在做的原型迭代，只是你用更短時間體驗到。',
      '下一階段（Week 2）會更聚焦在「怎麼描述得更精準」「怎麼用更少回合改到你要的樣子」，以及「怎麼讓畫面風格一致」。你今天的產出，正好可以當成後續練習的素材。',
    ],
    sections: [
      {
        heading: '下課前你可以自我檢查',
        lines: [
          '別人是否看得出這頁的主題？',
          '你是否找得到主要區塊（例如標題區、內容區、行動按鈕）？',
          '你是否至少完成一次「指出區塊」的調整嘗試？',
        ],
      },
    ],
    keyTakeaway: '你今天證明了一件事：你可以用 AI，把想法變成畫面。',
    instructorNote: '可請自願者分享截圖一角；預告 Week 2 會涵蓋精準改版與風格一致。',
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
          Week 1 教材 · 第 {index + 1} / {total} 頁
        </p>
        {children}
      </div>
    </section>
  )
}

function Week1SlidesInner() {
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
  /** 按鈕／鍵盤觸發的平滑捲動期間，避免捲動監聽把目前頁改回上一頁 */
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

  /** 依捲動位置更新目前頁（置中對齊時，以視窗中心最接近的 slide 為準） */
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

    /** 平滑捲動過程中降低圓點跳動；手指離開或 scrollend 再對齊 */
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

  /** 精簡／完整切換後版面高度改變，重新把目前頁置中 */
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
            <Link href="/week1" className="gap-1">
              <ChevronLeft className="size-4 shrink-0 opacity-80" />
              <span className="hidden sm:inline">步驟引導</span>
            </Link>
          </Button>
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
                  {slide.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span
                        className="mt-2 size-2 shrink-0 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 shadow-[0_0_12px_rgba(56,189,248,0.55)]"
                        aria-hidden
                      />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {mode === 'teach' && slide.sections && slide.sections.length > 0 && (
                <div className="space-y-4 rounded-2xl border border-violet-400/20 bg-violet-500/[0.07] p-4 sm:p-5">
                  {slide.sections.map((block) => (
                    <div key={block.heading} className="space-y-2">
                      <p className="text-sm font-semibold text-violet-100">{block.heading}</p>
                      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-200/92 marker:text-violet-300/80">
                        {block.lines.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* 範例 Prompt：完整必顯示；精簡在第 8 頁顯示精簡提示＋建議切完整 */}
              {slide.promptExamples && slide.promptExamples.length > 0 && (
                <div className="space-y-3">
                  {mode === 'teach' ? (
                    <>
                      <p className="flex items-center gap-2 text-sm font-semibold text-sky-200">
                        <MessageSquare className="size-4" aria-hidden />
                        你可以複製的提示範例（貼到 ChatGPT）
                      </p>
                      <div className="max-h-[min(40dvh,20rem)] space-y-3 overflow-y-auto rounded-2xl border border-white/10 bg-black/30 p-3 sm:p-4">
                        {slide.promptExamples.map((ex) => (
                          <div key={ex.label} className="space-y-2">
                            <p className="text-xs font-medium text-slate-400">{ex.label}</p>
                            <div className="rounded-xl border border-sky-500/20 bg-sky-500/[0.06] px-3 py-2 font-mono text-[11px] leading-relaxed text-slate-200/95 sm:text-xs">
                              {ex.text}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.03] px-4 py-3">
                        <p className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-400">
                          <Wand2 className="size-3.5" aria-hidden />
                          貼到 v0 時可再加一句（幫它定方向）
                        </p>
                        <p className="font-mono text-[11px] leading-relaxed text-slate-300 sm:text-xs">
                          請依上一段大綱做一個單頁、手機也好讀的版型；風格簡潔、對比清楚。
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="rounded-2xl border border-sky-500/25 bg-sky-500/[0.07] px-4 py-3 text-sm text-sky-100/95">
                      <p className="font-medium">實作頁的提示範例較長，請切到「完整」檢視，即可複製 ChatGPT 範例與 v0 加句。</p>
                    </div>
                  )}
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

              {slide.instructorNote && (
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

export default function Week1SlidesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-dvh items-center justify-center bg-[#0B0F1F] text-slate-400">
          載入教材…
        </div>
      }
    >
      <Week1SlidesInner />
    </Suspense>
  )
}
