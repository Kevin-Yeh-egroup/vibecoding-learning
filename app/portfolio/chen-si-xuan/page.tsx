import { BookOpen, Calculator, Check, Eye, FileText, Link2, ListChecks, Shield, Users } from 'lucide-react'
import { PortfolioBackLink } from '../portfolio-back-link'

const benefits = [
  ['看懂自己的財務現況', '釐清收入、支出、債務與生活壓力來源。', Eye],
  ['整理出可執行的方向', '從混亂中找出優先順序，建立貼近現實的整理方式。', ListChecks],
  ['了解可以使用的資源', '認識法律諮詢、福利資格、補助與支持系統。', BookOpen],
  ['增加面對生活的穩定感', '透過具體整理與資源連結，讓未來安排更有掌握感。', Shield],
] as const

const outlines = [
  ['債務梳理', ['盤點現有債務類型與狀況', '區分急迫與可延後處理項目', '建立基本處理順序'], FileText],
  ['財務整理', ['整理收入、固定支出與必要生活開銷', '看見資金缺口與壓力來源', '建立可持續的日常安排'], Calculator],
  ['相關資源連結', ['法律諮詢資源', '福利資格與補助方向', '申請時常見準備事項'], Link2],
  ['子女撫養相關資源申請', ['子女照顧與生活支持', '補助、津貼與可運用協助', '減輕照顧與經濟壓力'], Users],
] as const

const audiences = [
  '家暴或性侵事件之受害婦女',
  '正面臨經濟壓力、債務問題或生活重整需求者',
  '需處理子女照顧、撫養安排或資源申請者',
  '由服務社工評估後，適合參與課程之服務對象',
]

export default function ChenSiXuanPortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f7fcf8] text-emerald-950">
      <header className="sticky top-0 z-40 border-b border-emerald-100 bg-[#f7fcf8]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <PortfolioBackLink className="border-emerald-100 bg-white/75 text-emerald-700 hover:text-emerald-800" />
          <span className="text-sm font-medium text-emerald-700">財務規劃課程</span>
        </nav>
      </header>

      <section className="relative flex min-h-[90vh] items-center justify-center px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100">
              <BookOpen className="size-8 text-emerald-700" />
            </div>
          </div>
          <h1 className="mb-6 text-4xl font-semibold leading-tight text-balance md:text-6xl">財務規劃課程</h1>
          <p className="mb-8 text-xl leading-relaxed text-emerald-800/80 text-balance md:text-2xl">
            陪伴受暴與受害婦女，從財務混亂中慢慢整理出生活的方向
          </p>
          <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-emerald-900/65 md:text-lg">
            面對生活變動、債務壓力、子女照顧與各項申請流程，財務問題往往不只是金錢問題，而是生活重建的一部分。
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#benefits" className="rounded-full bg-emerald-700 px-8 py-4 text-base font-medium text-white hover:bg-emerald-800">
              了解課程內容
            </a>
            <a href="#outline" className="rounded-full border border-emerald-200 px-8 py-4 text-base font-medium text-emerald-900 hover:bg-emerald-50">
              查看課程大綱
            </a>
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">上完這堂課，可以帶走什麼？</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-emerald-900/65">
              課程不是要求一次解決所有問題，而是協助參與者先看清現況、找到可行的下一步。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map(([title, description, Icon]) => (
              <article key={title} className="rounded-3xl bg-[#f7fcf8] p-8 shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-emerald-100">
                    <Icon className="size-7 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-medium">{title}</h3>
                    <p className="leading-relaxed text-emerald-900/65">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">適合哪些對象？</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-emerald-900/65">
              本課程以家暴或性侵受害婦女的生活重建需求為核心，適合由第一線服務社工評估後進行轉介。
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
            <ul className="space-y-5">
              {audiences.map((audience) => (
                <li key={audience} className="flex items-start gap-4">
                  <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-100">
                    <Check className="size-4 text-emerald-700" />
                  </div>
                  <span className="flex-1 text-lg leading-relaxed">{audience}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="outline" className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">課程大綱</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-emerald-900/65">
              課程內容聚焦在實際生活中最常遇到的財務整理與資源申請議題。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {outlines.map(([title, items, Icon]) => (
              <article key={title} className="rounded-3xl bg-[#f7fcf8] p-8 shadow-sm">
                <div className="mb-5 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100">
                    <Icon className="size-6 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-medium">{title}</h3>
                </div>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-emerald-900/65">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
