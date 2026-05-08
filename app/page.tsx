'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Brain, MessageSquare, Zap, Briefcase, Rocket, Users } from 'lucide-react'
import Link from 'next/link'

type PortfolioPreview = {
  nickname: string
  role: string
  quote: string
  sections: string[]
  initial: string
  palette: 'pink' | 'blue' | 'green' | 'teal' | 'amber' | 'stone'
}

type StudentPortfolio = {
  name: string
  href?: string
  preview?: PortfolioPreview
}

const studentPortfolios = [
  {
    group: '辦公室人員',
    students: [
      { name: '怡君' },
      {
        name: '洪瑜君',
        href: '/portfolio/hung-yu-jun',
        preview: {
          nickname: '工作效率工具組',
          role: '每日工作記事／週計畫任務管理',
          quote: '把日常紀錄、任務安排與進度回報整理成可複製的工作流程。',
          sections: ['工作紀錄', '番茄鐘', '任務管理', '下週預覽'],
          initial: '洪',
          palette: 'teal',
        },
      },
      { name: '思宜' },
      { name: '雅婷' },
      {
        name: '劉奕吟',
        href: '/portfolio/liu-yi-yin',
        preview: {
          nickname: '馴錢師',
          role: '家庭財務檢測與陪伴',
          quote: '解開金錢的結，找回生活的掌控權。',
          sections: ['財務檢測', '狀況分析', '心理導航', '故事陪伴'],
          initial: '劉',
          palette: 'amber',
        },
      },
      { name: '佩欣' },
      {
        name: '陳思璇',
        href: '/portfolio/chen-si-xuan',
        preview: {
          nickname: '財務規劃課程',
          role: '受暴與受害婦女生活重建',
          quote: '從財務混亂中慢慢整理出生活的方向。',
          sections: ['財務現況', '可執行方向', '資源連結', '穩定感'],
          initial: '陳',
          palette: 'green',
        },
      },
    ],
  },
  {
    group: '工讀生',
    students: [
      { name: '于沁' },
      { name: '雅筑' },
      { name: '資旻' },
      { name: '妤臻' },
      { name: '弈妏' },
      { name: '宥辰' },
      {
        name: '吳婷宇',
        href: '/portfolio/wu-ting-yu',
        preview: {
          nickname: 'Wala',
          role: '社會工作學系大三學生',
          quote: '我們都生活在陰溝裡，但當中仍有人仰望星空。',
          sections: ['關於我', '我的特質', '經歷', '未來目標'],
          initial: '吳',
          palette: 'pink',
        },
      },
      {
        name: '陳曦',
        href: '/portfolio/chen-xi',
        preview: {
          nickname: 'Tracy Chen',
          role: '個人敘事與觀察者作品',
          quote: 'I notice things. Then I keep them.',
          sections: ['About', 'What I Do', 'Experience', 'Projects'],
          initial: '陳',
          palette: 'stone',
        },
      },
      { name: '庭瑋' },
      {
        name: '黃駿宇',
        href: '/portfolio/huang-jun-yu',
        preview: {
          nickname: 'SWIST-AI-TW',
          role: '社會工作 AI 會談訓練系統',
          quote: '打造可重複、可回饋、具情境真實性的會談訓練環境。',
          sections: ['情境模擬', '即時互動', '專業回饋', '重複練習'],
          initial: '黃',
          palette: 'teal',
        },
      },
      {
        name: '許雅媜',
        href: '/portfolio/hsu-ya-chen',
        preview: {
          nickname: 'Alicia Hsu',
          role: '不動產估價師助理',
          quote: '專注於不動產估價實務與資料精準性。',
          sections: ['關於我', '工作經驗', '專業能力', '聯絡方式'],
          initial: '許',
          palette: 'blue',
        },
      },
      { name: '忻妤' },
    ],
  },
] satisfies { group: string; students: StudentPortfolio[] }[]

function GenericPortfolioPreview() {
  return (
    <div className="absolute inset-4 rounded-lg border border-white/10 bg-background/75 shadow-2xl backdrop-blur-sm">
      <div className="flex items-center gap-1.5 border-b border-border/50 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/80" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
        <span className="h-2 w-2 rounded-full bg-green-400/80" />
        <span className="ml-2 h-2 flex-1 rounded-full bg-muted/40" />
      </div>
      <div className="space-y-3 p-4">
        <div className="h-3 w-2/3 rounded-full bg-gradient-to-r from-primary/80 to-accent/80" />
        <div className="h-2 w-full rounded-full bg-muted/50" />
        <div className="h-2 w-4/5 rounded-full bg-muted/40" />
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="h-10 rounded-md bg-primary/20" />
          <div className="h-10 rounded-md bg-accent/20" />
          <div className="h-10 rounded-md bg-primary/15" />
        </div>
      </div>
    </div>
  )
}

function StudentPortfolioPreview({ preview }: { preview: PortfolioPreview }) {
  const theme = {
    pink: {
      shell: 'border-pink-200/70 bg-[#fff8fb] text-[#5f4350]',
      soft: 'bg-pink-100 text-pink-600',
      accent: 'text-pink-500',
      gradient: 'from-pink-300 to-violet-200',
      text: 'text-[#3e2c34]',
    },
    blue: {
      shell: 'border-sky-200/70 bg-[#f8fbff] text-slate-600',
      soft: 'bg-sky-100 text-sky-700',
      accent: 'text-sky-600',
      gradient: 'from-sky-200 to-slate-200',
      text: 'text-slate-800',
    },
    green: {
      shell: 'border-emerald-200/70 bg-[#f7fcf8] text-emerald-900',
      soft: 'bg-emerald-100 text-emerald-700',
      accent: 'text-emerald-600',
      gradient: 'from-emerald-200 to-lime-100',
      text: 'text-emerald-950',
    },
    teal: {
      shell: 'border-teal-200/70 bg-[#f5fbfb] text-slate-700',
      soft: 'bg-teal-100 text-teal-700',
      accent: 'text-teal-700',
      gradient: 'from-teal-300 to-slate-200',
      text: 'text-slate-900',
    },
    amber: {
      shell: 'border-amber-200/70 bg-[#fffbf2] text-stone-700',
      soft: 'bg-amber-100 text-amber-700',
      accent: 'text-amber-700',
      gradient: 'from-amber-200 to-orange-100',
      text: 'text-stone-900',
    },
    stone: {
      shell: 'border-stone-200/70 bg-[#fbfaf8] text-stone-700',
      soft: 'bg-stone-100 text-stone-700',
      accent: 'text-stone-600',
      gradient: 'from-stone-200 to-zinc-100',
      text: 'text-stone-950',
    },
  }[preview.palette]

  return (
    <div className={`absolute inset-3 overflow-hidden rounded-lg border shadow-2xl ${theme.shell}`}>
      <div className="flex items-center justify-between border-b border-current/10 px-3 py-2">
        <span className={`text-[10px] font-semibold ${theme.accent}`}>{preview.nickname}</span>
        <div className={`flex gap-2 text-[8px] ${theme.accent}`}>
          <span>About</span>
          <span>Goal</span>
        </div>
      </div>
      <div className="space-y-2 p-3 text-center">
        <div className={`mx-auto h-12 w-12 rounded-full bg-gradient-to-br ${theme.gradient} p-1`}>
          <div className={`grid h-full w-full place-items-center rounded-full bg-white text-base font-bold ${theme.accent}`}>
            {preview.initial}
          </div>
        </div>
        <div>
          <p className={`text-sm font-bold leading-none ${theme.text}`}>{preview.nickname}</p>
          <p className={`mt-1 text-[9px] ${theme.accent}`}>{preview.role}</p>
        </div>
        <div className="rounded-lg border border-current/10 bg-white/80 px-2 py-1.5 text-[9px] leading-snug">
          「{preview.quote}」
        </div>
        <div className="grid grid-cols-2 gap-1 pt-1">
          {preview.sections.map((section) => (
            <span key={section} className={`rounded-full px-2 py-1 text-[8px] font-medium ${theme.soft}`}>
              {section}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CoursePage() {
  const handleScrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            V0 × Vibe Coding
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="/week1">Week 1 課堂</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/week2">Week 2 課堂</Link>
            </Button>
            <Button variant="ghost" onClick={() => handleScrollToSection('curriculum')}>
              課程架構
            </Button>
            <Button variant="ghost" onClick={() => handleScrollToSection('outcomes')}>
              學習成果
            </Button>
            <Button onClick={() => handleScrollToSection('portfolio')}>
              學員作品集
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 justify-center">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">全新工作方法論</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight text-balance">
            <span className="bg-gradient-to-r from-primary via-muted to-accent bg-clip-text text-transparent">
              V0 × Vibe Coding
            </span>
            <br />
            <span className="text-foreground">打造你的 AI 工作方法</span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            從想法到畫面，用自然語言生成 UI
            <br />
            <span className="text-primary font-semibold">2 次課程、每次 2 小時，共 4 小時完整養成，學會一套真正可帶走的工作流程</span>
          </p>

          <div className="flex justify-center mb-12">
            <Button
              size="lg"
              onClick={() => handleScrollToSection('curriculum')}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground"
            >
              立即查看課程內容 <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1: Philosophy */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-card/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            學會與 AI 協作
            <br />
            <span className="bg-gradient-to-r from-primary to-muted bg-clip-text text-transparent">而不是只會按按鈕</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4 p-6 rounded-lg border border-border/40 bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">不只是工具課</h3>
                  <p className="text-foreground/70">不教你背指令，而是教你把需求轉成可執行的工作步驟。</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border/40 bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">工作流程升級</h3>
                  <p className="text-foreground/70">建立可複製、可落地的 Vibe Coding 方法，讓成果更穩定產出。</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border/40 bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary/70 mt-2" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">馬上操作</h3>
                  <p className="text-foreground/70">課程一半的時間詳細說明，一半的時間實際操作，邊學邊做更快上手。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              '把模糊想法轉為清晰結構',
              '用自然語言生成 UI',
              '在對話中優化成果',
              '把文字變成可展示畫面'
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:border-primary/40 transition-colors">
                <p className="text-sm text-foreground/90 font-medium text-center">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">📆 課程架構</span>
              <br />
              <span className="text-foreground">4 小時完整養成 · 2 次課程 · 每次 2 小時</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                week: 'Week 1',
                href: '/week1',
                title: '思維轉換：從想法到畫面',
                icon: Brain,
                topics: [
                  '什麼是 Vibe Coding？',
                  'v0 介面理解',
                  '第一次實作：每人完成一頁個人介紹',
                  '回顧 ChatGPT 與 v0 分工與工作流程',
                ],
                outcome: '獨立完成一頁個人介紹 UI 原型',
              },
              {
                week: 'Week 2',
                href: '/week2',
                title: '描述對話、職場實戰與成熟使用 AI',
                icon: Briefcase,
                topics: [
                  '模糊 vs 結構化描述，UI 組成拆解與需求改寫',
                  '文字到頁面結構實作；第一次生成為什麼不完美',
                  '補充式優化、限制條件與少回合內穩定改版',
                  '風格漂移的原因、建立風格規則與品牌一致性',
                  '提案原型與 MVP 展示頁、小組實戰',
                  '與設計師／工程師溝通；V0 限制與使用策略',
                  '免費與升級判斷、何時該找工程師、AI 協作未來趨勢',
                ],
                outcome: '能寫出清楚可執行的描述，在少回合內穩定改版，完成可展示的工作成果，並掌握工具邊界與成長方向',
              },
            ].map((week, i) => {
              const Icon = week.icon
              return (
                <Link
                  key={i}
                  href={week.href}
                  className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div className="relative h-full p-6 sm:p-8 rounded-xl border border-primary/20 bg-gradient-to-br from-card/60 to-card/30 hover:from-card/80 hover:to-card/50 transition-all duration-300 hover:border-primary/40 glow-card">
                    <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Icon className="w-24 h-24 text-primary" />
                    </div>

                    <div className="relative z-10">
                      <div className="inline-flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
                          {week.week}
                        </span>
                        <span className="text-xs font-medium text-primary/80 group-hover:underline">
                          前往課堂引導 →
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-balance">{week.title}</h3>

                      <div className="space-y-3 mb-6">
                        <p className="text-sm font-semibold text-primary">重點能力：</p>
                        <ul className="space-y-2">
                          {week.topics.map((topic, j) => (
                            <li key={j} className="flex gap-2 text-sm text-foreground/80">
                              <span className="text-primary">•</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-border/40">
                        <p className="text-sm font-semibold text-muted mb-1">學習成果：</p>
                        <p className="text-sm text-foreground/90">{week.outcome}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-balance">
            你將帶走什麼能力？
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Sparkles, title: 'AI 協作能力', desc: '與 AI 高效協作' },
              { icon: Brain, title: '結構化思考', desc: '清晰表達需求' },
              { icon: MessageSquare, title: '對話優化', desc: '快速迭代改進' },
              { icon: Zap, title: '原型生成能力', desc: '快速生成 UI' },
              { icon: Rocket, title: '職場轉化能力', desc: '實戰應用技能' }
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="p-6 rounded-lg border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-colors text-center group cursor-pointer"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-5 justify-center">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">學員作品集</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              v0 首頁作品預覽
            </h2>
            <p className="max-w-2xl mx-auto text-foreground/70 leading-relaxed">
              以同學姓名為標題整理課堂作品，卡片中呈現每位同學製作首頁的預覽版型。
            </p>
          </div>

          <div className="space-y-12">
            {studentPortfolios.map((section) => (
              <div key={section.group} className="space-y-5">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">{section.group}</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {section.students.length} 件作品
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {section.students.map((student, index) => {
                    const card = (
                      <>
                        <div className="relative aspect-[4/3] overflow-hidden border-b border-border/40 bg-gradient-to-br from-primary/10 via-accent/10 to-card">
                          {student.preview ? <StudentPortfolioPreview preview={student.preview} /> : <GenericPortfolioPreview />}
                          <div className="absolute bottom-3 right-3 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur">
                            {student.href ? '點擊查看作品' : '待放入作品'}
                          </div>
                        </div>

                        <div className="p-5">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h4 className="text-lg font-bold text-foreground">{student.name}</h4>
                              <p className="mt-1 text-sm text-foreground/65">
                                {student.preview ? `${student.preview.role}｜${student.preview.nickname}` : 'v0 網頁作品'}
                              </p>
                            </div>
                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-sm font-semibold text-primary">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                      </>
                    )

                    const cardClassName = student.href
                      ? 'group overflow-hidden rounded-xl border border-primary/20 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-card/80 hover:shadow-[0_0_28px_-8px_rgba(56,189,248,0.45)]'
                      : 'group overflow-hidden rounded-xl border border-primary/20 bg-card/40 opacity-80'

                    return student.href ? (
                      <Link key={student.name} href={student.href} className={`${cardClassName} block`}>
                        {card}
                      </Link>
                    ) : (
                      <article key={student.name} className={cardClassName}>
                        {card}
                      </article>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 sm:p-12 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-primary via-transparent to-accent blur-2xl" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
                準備好升級你的工作方法了嗎？
              </h2>

              <p className="text-lg text-foreground/80">
                用 4 小時（2 次 × 每次 2 小時），學會一套 AI 協作能力
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/30 py-8 px-4 sm:px-6 lg:px-8 text-center text-foreground/60 text-sm">
        <p>© 2026 V0 × Vibe Coding. 保留所有權利。</p>
      </footer>
    </div>
  )
}
