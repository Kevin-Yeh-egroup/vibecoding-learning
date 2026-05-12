import { AlertTriangle, Award, Compass, Eye, Footprints, PiggyBank, Play, Receipt, ShieldCheck, Target, Users } from 'lucide-react'
import { PortfolioBackLink } from '../portfolio-back-link'

const situations = [
  ['想存錢，但總是存不起來', '每個月都很緊，但也不知道問題在哪', '剛開始工作、收入不穩', PiggyBank],
  ['開銷越來越多，開始有壓力', '家庭、生活支出慢慢累積', '有家庭或固定支出', Receipt],
  ['已經有壓力，不知道怎麼辦', '負債或支出影響到生活與情緒', '目前壓力較大的人', AlertTriangle],
] as const

const results = [
  ['看見現在的位置', '知道自己目前是穩定、吃力或有風險', Eye],
  ['找出問題在哪', '收入、支出或債務的影響', Target],
  ['知道可以怎麼開始', '不用一次改很多，先做一小步', Footprints],
] as const

const features = [
  ['不賣產品', '不推銷保險或投資，只提供中立建議', ShieldCheck],
  ['心理導航', '解決「知道卻做不到」的問題', Compass],
  ['專業深耕', '長期投入社福與家庭財務議題', Award],
] as const

const episodes = [
  ['EP1', '當另一半是月光族，我們怎麼溝通？', '18 分鐘'],
  ['EP2', '三寶媽的財務逆轉：從負債到穩定', '22 分鐘'],
] as const

export default function LiuYiYinPortfolioPage() {
  return (
    <main className="min-h-screen bg-[#fffbf2] text-stone-900">
      <header className="sticky top-0 z-40 border-b border-amber-100 bg-[#fffbf2]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <PortfolioBackLink className="border-amber-100 bg-white/75 text-amber-700 hover:text-amber-800" />
          <span className="text-sm font-semibold tracking-wide text-amber-700">馴錢師</span>
        </nav>
      </header>

      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.18),transparent_48%),linear-gradient(to_bottom,rgba(255,251,242,0.55),rgba(255,251,242,1))]" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="mx-auto max-w-3xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
            解開金錢的結，
            <br className="hidden md:block" />
            找回生活的掌控權
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-stone-600 md:text-xl">
            我們不賣產品，只陪你一起看懂現在的狀況，從壓力、關係到金錢，慢慢理出一條路。
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <a href="#situations" className="rounded-full bg-amber-600 px-8 py-4 text-lg font-medium text-white shadow-lg hover:bg-amber-700">
              免費家庭財務檢測
            </a>
            <p className="text-sm text-stone-500">只需 1 分鐘｜不用準備資料｜可以先自己看看</p>
          </div>
        </div>
      </section>

      <section id="situations" className="bg-[#fffbf2] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-semibold md:text-3xl">你現在的狀況，可能是這樣</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {situations.map(([title, description, note, Icon]) => (
              <article key={title} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-amber-100">
                  <Icon className="size-6 text-amber-700" />
                </div>
                <h3 className="mb-3 text-lg font-medium">{title}</h3>
                <p className="leading-relaxed text-stone-600">{description}</p>
                <p className="mt-3 text-sm text-stone-500">常見於：{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-semibold md:text-3xl">做完檢測，你會看到什麼？</h2>
          <div className="mx-auto mb-12 max-w-md overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-lg">
            <div className="border-b border-amber-100 bg-amber-100/70 px-6 py-4">
              <h3 className="text-lg font-medium">你的目前狀況</h3>
            </div>
            <div className="space-y-4 p-6">
              <p><span className="text-stone-500">狀態：</span><span className="font-medium text-amber-700">偏吃力</span></p>
              <p><span className="text-stone-500">主要壓力：</span><span className="font-medium">支出與現金流</span></p>
              <p className="border-t border-amber-100 py-3 leading-relaxed text-stone-600">你的生活還撐得住，但壓力正在慢慢累積</p>
              <div className="flex flex-wrap gap-2">
                {['支出', '現金流', '下一步建議'].map((tag) => (
                  <span key={tag} className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-700">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {results.map(([title, description, Icon]) => (
              <div key={title} className="text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-amber-100">
                  <Icon className="size-7 text-amber-700" />
                </div>
                <h3 className="mb-2 text-lg font-medium">{title}</h3>
                <p className="leading-relaxed text-stone-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-semibold md:text-3xl">為什麼選擇馴錢師？</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map(([title, description, Icon]) => (
              <article key={title} className="rounded-2xl border border-amber-100 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-amber-100">
                  <Icon className="size-8 text-amber-700" />
                </div>
                <h3 className="mb-3 text-xl font-medium">{title}</h3>
                <p className="leading-relaxed text-stone-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-2xl font-semibold md:text-3xl">聽聽別人的故事，你並不孤單</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {episodes.map(([number, title, duration]) => (
              <article key={number} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-amber-600 text-white">
                    <Play className="ml-1 size-6" fill="currentColor" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-amber-700">{number}</span>
                    <h3 className="mt-1 text-lg font-medium leading-snug">{title}</h3>
                    <p className="mt-2 text-sm text-stone-500">{duration}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 text-center md:py-24">
        <Users className="mx-auto mb-4 size-8 text-amber-700" />
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">我們陪伴過許多家庭走過這段路</h2>
        <p className="text-stone-600">5000+ 家庭｜800+ 場講座｜1200+ 專業人員培訓</p>
      </section>
    </main>
  )
}
