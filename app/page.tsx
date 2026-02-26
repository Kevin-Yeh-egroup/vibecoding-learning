'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Brain, MessageSquare, Zap, Briefcase, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function CoursePage() {
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
              <Link href="#curriculum">課程架構</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#outcomes">學習成果</Link>
            </Button>
            <Button asChild>
              <Link href="#cta">立即報名</Link>
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
            <span className="text-primary font-semibold">12 小時完整養成，學會一套真正可帶走的工作流程</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground">
              立即查看課程內容 <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              課程完整架構
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
            <span className="bg-gradient-to-r from-primary to-muted bg-clip-text text-transparent">而不是學會按按鈕</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4 p-6 rounded-lg border border-border/40 bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">這不是工具課</h3>
                  <p className="text-foreground/70">不教寫程式、不教技術指令，我們教的是一種新的工作方式</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border/40 bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">是工作流程升級</h3>
                  <p className="text-foreground/70">一套可複製、可應用的 Vibe Coding 工作方法</p>
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
              <span className="text-foreground">12 小時完整養成</span>
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">卡片式排列，科技風玻璃卡片設計</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                week: 'Week 1',
                title: '思維轉換：從想法到畫面',
                icon: Brain,
                topics: ['什麼是 Vibe Coding？', 'V0 介面理解', '第一次實作：活動頁面生成', '回顧工作流程改變'],
                outcome: '獨立生成第一個完整 UI 頁面'
              },
              {
                week: 'Week 2',
                title: '描述力訓練：讓 AI 聽懂你',
                icon: MessageSquare,
                topics: ['模糊 vs 結構化描述', 'UI 組成拆解', '需求改寫練習', '文字到頁面結構實作'],
                outcome: '能寫出清楚可執行的 UI 描述'
              },
              {
                week: 'Week 3',
                title: '對話優化：用最少回合調整畫面',
                icon: Zap,
                topics: ['第一次生成為什麼不完美', '補充式優化策略', '限制條件的運用', '優化自己的頁面'],
                outcome: '3 次對話內穩定改版'
              },
              {
                week: 'Week 4',
                title: '穩定輸出：建立風格與一致性',
                icon: Sparkles,
                topics: ['風格漂移的原因', '建立風格規則', '品牌一致性思考', '穩定生成實作'],
                outcome: '產出風格一致的頁面'
              },
              {
                week: 'Week 5',
                title: '工作實戰：把生成變成職場武器',
                icon: Briefcase,
                topics: ['提案原型生成', 'MVP 展示頁設計', '與設計師/工程師溝通', '小組實戰'],
                outcome: '完成一份可展示的工作成果'
              },
              {
                week: 'Week 6',
                title: '升級與邊界：成熟使用 AI',
                icon: Rocket,
                topics: ['V0 限制與使用策略', '免費與升級判斷', '什麼時候該找工程師', 'AI 協作未來趨勢'],
                outcome: '知道工具邊界與成長方向'
              }
            ].map((week, i) => {
              const Icon = week.icon
              return (
                <div
                  key={i}
                  className="group relative p-6 sm:p-8 rounded-xl border border-primary/20 bg-gradient-to-br from-card/60 to-card/30 hover:from-card/80 hover:to-card/50 transition-all duration-300 hover:border-primary/40 glow-card"
                >
                  <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Icon className="w-24 h-24 text-primary" />
                  </div>

                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-3">
                      {week.week}
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

              <p className="text-lg text-foreground/80 mb-8">
                用 12 小時，學會一套 AI 協作能力
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground">
                  立即報名
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  下載課程大綱
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/30 py-8 px-4 sm:px-6 lg:px-8 text-center text-foreground/60 text-sm">
        <p>© 2024 V0 × Vibe Coding. 保留所有權利。</p>
      </footer>
    </div>
  )
}
