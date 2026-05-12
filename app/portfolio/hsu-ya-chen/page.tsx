import { Briefcase, FileText, Mail, TableProperties } from 'lucide-react'
import { PortfolioBackLink } from '../portfolio-back-link'

const experiences = [
  {
    period: '2023/7 - 2023/8',
    title: '地政士助理實習生',
    duties: ['整理土地與建物登記資料', '準備申辦文件並追蹤案件節點', '支援行政檔案分類與資料建檔'],
  },
  {
    period: '2024/2 - 2024/6',
    title: '預售屋代銷業務行政實習生',
    duties: ['彙整銷售數據與客戶資料', '處理合約與行政文件檢核', '協助活動與接待流程安排'],
  },
  {
    period: '2024/7 - 至今',
    title: '不動產估價師助理',
    duties: ['協助估價案件資料蒐集與分析', '支援估價報告製作與內部覆核', '管理案件進度與跨單位溝通'],
  },
]

const skills = ['不動產估價作業協助', '資料整理與分析', '文件與報告製作', 'Excel / Word / PowerPoint']

export default function HsuYaChenPortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f8fbff] text-slate-800">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-[#f8fbff]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <PortfolioBackLink className="border-sky-100 bg-white/75 text-sky-700 hover:text-sky-800" />
          <div className="hidden gap-8 text-sm tracking-wide text-slate-500 md:flex">
            <a href="#about" className="hover:text-sky-700">關於我</a>
            <a href="#experience" className="hover:text-sky-700">工作經驗</a>
            <a href="#skills" className="hover:text-sky-700">專業能力</a>
          </div>
        </nav>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:100px_100px]" />
        <div className="mx-auto w-full max-w-6xl px-6 py-32 md:px-12">
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-20">
            <div className="grid h-36 w-36 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sky-200 to-slate-200 text-5xl font-light text-sky-700 ring-1 ring-slate-200 md:h-48 md:w-48">
              許
            </div>
            <div className="max-w-2xl">
              <h1 className="mb-4 text-5xl font-light tracking-tight md:text-7xl">Alicia Hsu</h1>
              <p className="mb-10 text-sm uppercase tracking-[0.2em] text-slate-500">不動產估價師助理</p>
              <p className="mb-8 text-xl font-light tracking-wide text-slate-700 md:text-2xl">專注於不動產估價實務與資料精準性</p>
              <div className="mb-10 h-px w-16 bg-slate-300" />
              <p className="max-w-xl text-sm leading-[1.9] text-slate-600 md:text-base">
                具備不動產估價及相關行政實務經驗，熟悉估價流程、地政作業與不動產市場運作。重視效率與品質，致力於提供穩定且值得信賴的專業支援。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/70 bg-white/70 p-8 shadow-sm backdrop-blur md:p-10">
          <h2 className="mb-5 text-3xl font-light tracking-wide md:text-4xl">關於我</h2>
          <p className="text-base leading-9 tracking-wide text-slate-600 md:text-lg">
            畢業於不動產相關科系，長期投入估價實務與行政協作。具備資料判讀、案件整理與跨部門溝通能力，能在時程壓力下維持文件品質與作業準確度。
          </p>
        </div>
      </section>

      <section id="experience" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/70 bg-white/70 p-8 shadow-sm backdrop-blur md:p-10">
          <h2 className="mb-6 text-3xl font-light tracking-wide md:text-4xl">工作經驗</h2>
          <div className="space-y-4">
            {experiences.map((experience) => (
              <article key={experience.title} className="rounded-2xl border border-slate-200 bg-[#f8fbff]/70 p-6">
                <p className="text-sm tracking-wide text-sky-700">{experience.period}</p>
                <h3 className="mt-1 text-xl tracking-wide md:text-2xl">{experience.title}</h3>
                <ul className="mt-4 space-y-2 text-slate-600">
                  {experience.duties.map((duty) => (
                    <li key={duty} className="flex gap-3">
                      <Briefcase className="mt-1 size-4 shrink-0 text-sky-600" />
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/70 bg-white/70 p-8 shadow-sm backdrop-blur md:p-10">
          <h2 className="mb-6 text-3xl font-light tracking-wide md:text-4xl">專業能力</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#f8fbff] p-5 text-slate-700">
                {skill.includes('/') ? <TableProperties className="size-5 text-sky-600" /> : <FileText className="size-5 text-sky-600" />}
                <span>{skill}</span>
              </div>
            ))}
          </div>
          <a href="mailto:axxxxxx@gmail.com" className="mt-8 inline-flex items-center gap-2 text-lg text-sky-700 hover:text-sky-800">
            <Mail className="size-5" />
            axxxxxx@gmail.com
          </a>
        </div>
      </section>
    </main>
  )
}
