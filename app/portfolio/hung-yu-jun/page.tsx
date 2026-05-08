import Link from 'next/link'
import { ArrowLeft, CalendarDays, CheckCircle2, ClipboardList, Clock, ExternalLink, ListTodo, Timer } from 'lucide-react'

const tools = [
  {
    title: '每日工作記事系統',
    href: 'https://v0-daily-work-log.vercel.app/',
    description: '輕鬆記錄與管理每日工作項目，搭配 25 分鐘專注、5 分鐘休息的番茄鐘節奏。',
    highlights: ['新增工作紀錄', '分類與工作屬性', '工作總時間', '複製到 Excel'],
    icon: ClipboardList,
  },
  {
    title: '週計畫與任務管理',
    href: 'https://v0-task-manager-app-bice.vercel.app/',
    description: '用來新增任務、管理所有待辦，會儲存在瀏覽器中，並自動整理未來 7 天的下週預覽文字。',
    highlights: ['新增任務', '所有任務清單', 'LocalStorage 儲存', '加入 Google 行事曆', '下週預覽', '複製文字回報'],
    icon: ListTodo,
  },
]

export default function HungYuJunPortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f5fbfb] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-teal-100 bg-[#f5fbfb]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-800">
            <ArrowLeft className="size-4" />
            返回學員作品集
          </Link>
          <span className="text-sm font-semibold tracking-wide text-teal-700">洪瑜君｜v0 工具作品</span>
        </nav>
      </header>

      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.16),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.12),transparent_36%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-3xl bg-teal-100 text-teal-700">
            <CheckCircle2 className="size-10" />
          </div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-teal-700">Productivity Tools</p>
          <h1 className="mb-6 text-balance text-4xl font-semibold leading-tight md:text-6xl">洪瑜君的 v0 工具作品</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            兩個聚焦工作流程的實用工具：一個協助每日紀錄與工時整理，一個協助週計畫與任務回報。
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <article key={tool.href} className="overflow-hidden rounded-3xl border border-teal-100 bg-white shadow-sm">
                <div className="border-b border-teal-100 bg-gradient-to-br from-teal-50 to-cyan-50 p-8">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-teal-100 text-teal-700">
                      <Icon className="size-7" />
                    </div>
                    <a
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800"
                    >
                      開啟工具
                      <ExternalLink className="size-4" />
                    </a>
                  </div>
                  <h2 className="mb-3 text-2xl font-semibold">{tool.title}</h2>
                  <p className="leading-relaxed text-slate-600">{tool.description}</p>
                </div>
                <div className="p-8">
                  <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">功能重點</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {tool.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3 rounded-2xl border border-teal-100 bg-[#f5fbfb] p-4">
                        <CheckCircle2 className="size-5 shrink-0 text-teal-700" />
                        <span className="text-sm font-medium text-slate-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-teal-100 bg-[#f5fbfb] p-6 text-center">
            <Timer className="mx-auto mb-4 size-8 text-teal-700" />
            <h3 className="mb-2 font-semibold">專注節奏</h3>
            <p className="text-sm leading-relaxed text-slate-600">用 25 分鐘專注時段輔助工作紀錄。</p>
          </div>
          <div className="rounded-3xl border border-teal-100 bg-[#f5fbfb] p-6 text-center">
            <CalendarDays className="mx-auto mb-4 size-8 text-teal-700" />
            <h3 className="mb-2 font-semibold">週計畫視角</h3>
            <p className="text-sm leading-relaxed text-slate-600">自動整理未來 7 天內的任務預覽。</p>
          </div>
          <div className="rounded-3xl border border-teal-100 bg-[#f5fbfb] p-6 text-center">
            <Clock className="mx-auto mb-4 size-8 text-teal-700" />
            <h3 className="mb-2 font-semibold">方便回報</h3>
            <p className="text-sm leading-relaxed text-slate-600">支援複製文字或 Excel 格式，方便貼到既有流程。</p>
          </div>
        </div>
      </section>
    </main>
  )
}
