import { BarChart3, Brain, Briefcase, Building2, GraduationCap, MessageSquare, Repeat, Users } from 'lucide-react'
import { PortfolioBackLink } from '../portfolio-back-link'

const features = [
  ['情境模擬', '模擬低收入戶、家庭暴力、兒少保護、心理困擾等多元案例情境', Brain],
  ['即時對話互動', 'AI 即時回應，呈現真實會談中的不確定性與情緒流動', MessageSquare],
  ['專業回饋', '針對回應內容提供同理性、專業性與技巧運用分析', BarChart3],
  ['重複練習', '不限次數練習，建立經驗累積與反思能力', Repeat],
] as const

const users = [
  ['社會工作系學生', '會談訓練／實習前準備', GraduationCap],
  ['現職社工', '技能精進／自我訓練', Briefcase],
  ['教師與督導', '教學輔助工具', Users],
  ['政府與機構', '專業訓練與人力培力', Building2],
] as const

const steps = ['選擇個案情境', '進入 AI 模擬會談', '即時互動與回應', '查看回饋與反思']

export default function HuangJunYuPortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f5fbfb] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-[#f5fbfb]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <PortfolioBackLink className="border-teal-100 bg-white/75 text-teal-700 hover:text-teal-800" />
          <div className="flex items-center gap-3">
            <div className="h-8 w-2 bg-teal-700" />
            <h1 className="text-lg font-light tracking-wider">SWIST-AI-TW</h1>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-teal-700/10 via-teal-700/20 to-teal-700/30 px-6 py-24 md:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-slate-600">Social Work Interview Simulation Training with AI</p>
          <h2 className="mb-6 text-3xl font-light leading-tight tracking-wide md:text-5xl">社會工作 AI 會談專業模擬訓練系統</h2>
          <p className="mb-8 font-medium tracking-wider text-teal-700">SWIST-AI-TW v1.0</p>
          <div className="mx-auto mb-10 h-px w-16 bg-teal-700" />
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-600">
            結合人工智慧與社會工作專業，打造可重複、可回饋、具情境真實性的會談訓練環境。
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a className="bg-teal-700 px-8 py-4 text-sm tracking-wider text-white hover:bg-teal-800" href="#features">
              查看核心功能
            </a>
            <a className="border border-slate-300 px-8 py-4 text-sm tracking-wider hover:bg-white/40" href="#process">
              了解使用流程
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <h3 className="mb-4 text-2xl font-light tracking-wide md:text-3xl">為什麼需要 AI 會談訓練？</h3>
          <div className="mb-8 h-px w-12 bg-teal-700" />
          <p className="mb-10 leading-relaxed text-slate-600">在現行社會工作教育與實務培訓中，會談能力的養成常面臨以下限制：</p>
          {['真實個案不可重來，學習成本高', '課堂演練情境有限，難以貼近實務複雜性', '督導資源有限，無法提供即時且持續的回饋', '新手社工在實務中承擔高壓與高風險決策'].map((item, index) => (
            <div key={item} className="flex items-start gap-4 border-b border-slate-200 py-4">
              <span className="mt-0.5 text-sm font-medium text-teal-700">{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-4 text-center text-2xl font-light tracking-wide md:text-3xl">系統核心功能</h3>
          <div className="mx-auto mb-16 h-px w-12 bg-teal-700" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([title, description, Icon]) => (
              <article key={title} className="text-center">
                <Icon className="mx-auto mb-6 size-8 text-teal-700" strokeWidth={1.5} />
                <h4 className="mb-3 font-medium tracking-wide">{title}</h4>
                <p className="text-sm leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-4 text-center text-2xl font-light tracking-wide md:text-3xl">誰適合使用？</h3>
          <div className="mx-auto mb-16 h-px w-12 bg-teal-700" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {users.map(([title, description, Icon]) => (
              <article key={title} className="border border-slate-200 bg-white p-8 text-center">
                <Icon className="mx-auto mb-6 size-8 text-teal-700" strokeWidth={1.5} />
                <h4 className="mb-2 font-medium tracking-wide">{title}</h4>
                <p className="text-sm text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-4 text-center text-2xl font-light tracking-wide md:text-3xl">使用流程</h3>
          <div className="mx-auto mb-16 h-px w-12 bg-teal-700" />
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="border border-slate-200 bg-white p-6 text-center">
                <p className="mb-4 text-sm font-medium text-teal-700">0{index + 1}</p>
                <p className="tracking-wide">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-slate-600">約 5-15 分鐘即可完成一次完整訓練</p>
        </div>
      </section>
    </main>
  )
}
