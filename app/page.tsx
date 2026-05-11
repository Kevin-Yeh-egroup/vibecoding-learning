'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Brain, MessageSquare, Zap, Briefcase, Rocket, Users, Star, Trophy } from 'lucide-react'
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

type AwardWinner = {
  rank: 1 | 2 | 3
  name: string
  title: string
  href: string
  summary: string
  reasons: string[]
  palette: 'gold' | 'silver' | 'bronze'
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
      {
        name: '曾于沁',
        href: '/portfolio/submitted/tseng-yu-chin',
        preview: {
          nickname: '看見與陪伴',
          role: '男性育嬰假議題倡議',
          quote: '願每一位想陪孩子長大的人，都不必先為自己的照顧角色辯解。',
          sections: ['微歧視', '數據故事', '真實聲音', '支持資源'],
          initial: '曾',
          palette: 'green',
        },
      },
      {
        name: '張雅筑',
        href: '/portfolio/submitted/chang-ya-chu',
        preview: {
          nickname: 'Judy Chang',
          role: '執業社工師 / 青少年自立生活顧問',
          quote: '賦能青少年從自立到自強，也與特殊教育、身心障礙服務同行。',
          sections: ['自立生活', '財務諮詢', '特殊教育', '輔具創新'],
          initial: '張',
          palette: 'amber',
        },
      },
      {
        name: '陳資旻',
        href: '/portfolio/submitted/chen-tzu-min',
        preview: {
          nickname: '台中市福利小幫手',
          role: '育兒補助與家庭資源整理',
          quote: '不用找資料，這裡幫你整理好。',
          sections: ['生育津貼', '托育補助', '育兒津貼', '早療服務'],
          initial: '陳',
          palette: 'pink',
        },
      },
      {
        name: '施妤臻',
        href: 'https://v0-self-intro-page-ten.vercel.app/',
        preview: {
          nickname: 'Yuyu',
          role: '社工師 / 身心障礙支持服務工作者',
          quote: '好的支持，是陪伴每個人用自己的步調成長。',
          sections: ['ISP 規劃', '活動設計', '個案支持', '社區融合'],
          initial: '施',
          palette: 'blue',
        },
      },
      {
        name: '林弈妏',
        href: 'https://v0-personal-introduction-page-drab.vercel.app/',
        preview: {
          nickname: 'Yi-Wen Lin',
          role: '行政助理 / 內容編輯 / 細節愛好者',
          quote: '好的設計不只是視覺上的美感，更是一種讓人感到舒適與平衡的存在。',
          sections: ['行政協調', '流程管理', '內容編輯', '生活美學'],
          initial: '林',
          palette: 'stone',
        },
      },
      {
        name: '葉宥辰',
        href: 'https://v0-personal-editorial-website.vercel.app/',
        preview: {
          nickname: 'Ethan',
          role: '展店開發業務 / 投資研究',
          quote: '成長不是突然變得厲害，而是慢慢建立更穩定的自己。',
          sections: ['投資研究', '工作成長', '自我累積', '日常節奏'],
          initial: '葉',
          palette: 'teal',
        },
      },
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
      {
        name: '劉庭瑋',
        href: '/portfolio/submitted/liu-ting-wei',
        preview: {
          nickname: 'HOOK',
          role: '歷史系 YouTuber 介紹頁',
          quote: '把歷史、生活與實驗變成讓人停不下來的故事。',
          sections: ['歷史科普', '料理挑戰', '旅行探索', '生活紀錄'],
          initial: '劉',
          palette: 'stone',
        },
      },
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
    ],
  },
] satisfies { group: string; students: StudentPortfolio[] }[]

const awardWinners = [
  {
    rank: 1,
    name: '黃駿宇',
    title: 'SWIST-AI-TW｜社會工作 AI 會談訓練系統',
    href: '/portfolio/huang-jun-yu',
    summary: '最能把社工教育現場的痛點轉成可討論、可練習、可回饋的產品原型。',
    reasons: [
      '清楚指出真實個案不可重來、督導資源有限、新手承擔高壓決策等訓練困境。',
      '把困境具體轉換成情境模擬、即時互動、專業回饋與重複練習四個功能。',
      '目標使用者涵蓋學生、現職社工、教師督導與機構，具備實務推廣想像。',
    ],
    palette: 'gold',
  },
  {
    rank: 2,
    name: '張雅筑',
    title: 'Judy Chang｜青少年自立與財務賦能',
    href: '/portfolio/submitted/chang-ya-chu',
    summary: '專業定位鮮明，能把實務經驗、服務對象與合作形式整合成完整服務頁。',
    reasons: [
      '服務對象具體鎖定安置與轉銜青年、特殊教育需求者及第一線合作夥伴。',
      '將財務賦能、自立生活、特殊教育與 AI 輔具合作串成清楚的專業品牌。',
      '專案經驗與聯絡行動明確，適合實際用於機構合作、課程洽談與資源連結。',
    ],
    palette: 'silver',
  },
  {
    rank: 3,
    name: '陳資旻',
    title: '台中市福利小幫手｜育兒補助與家庭資源整理',
    href: '/portfolio/submitted/chen-tzu-min',
    summary: '把家長找補助的資訊焦慮，轉成好入口、好瀏覽、好理解的福利導覽。',
    reasons: [
      '從家長需求出發，整理生育津貼、托育補助、育兒津貼與早療服務等常見資源。',
      '入口分類與熱門補助卡片降低搜尋門檻，符合社工協助家庭理解資源的工作邏輯。',
      '加入縣市區域搜尋概念，展現後續擴充成地方福利查詢工具的潛力。',
    ],
    palette: 'bronze',
  },
] satisfies AwardWinner[]

const portfolioSuggestions = [
  '先寫清楚服務對象是誰，例如家長、學生、第一線社工、特定社區居民或機構夥伴。',
  '把對方最常遇到的困擾具體化，不只說「需要幫忙」，而是描述卡在哪個流程、資訊或情緒壓力。',
  '每個作品至少設計三個可被看見的功能，讓使用者知道進入頁面後能做什麼。',
  '補上一句使用後的改變，例如更快找到資源、更容易回報進度、或更能理解自己的下一步。',
]

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

          <div className="mb-16 overflow-hidden rounded-3xl border border-primary/20 bg-card/40">
            <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
              <div className="flex flex-col justify-between gap-8">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    <Trophy className="h-4 w-4" />
                    本次前三名正式公布
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                    Vibe Coding 需求具體化獎
                  </h3>
                  <p className="max-w-xl leading-relaxed text-foreground/70">
                    我們以「能否把真實需求說清楚，並轉成可使用、可討論、可延伸的作品」作為主要標準，選出最具代表性的三件作品。
                  </p>
                </div>

                <div className="award-podium-stage relative mx-auto flex min-h-[350px] w-full max-w-xl items-end justify-center gap-3 overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-b from-background/80 via-card/70 to-primary/10 px-5 pb-7 pt-20">
                  <div className="absolute left-8 top-8 h-16 w-16 rounded-full bg-primary/10 blur-2xl" />
                  <div className="absolute right-10 top-16 h-20 w-20 rounded-full bg-accent/10 blur-2xl" />
                  <div className="confetti-float absolute left-10 top-14 h-3 w-8 rotate-12 rounded-full bg-primary/60" />
                  <div className="confetti-float absolute right-16 top-10 h-3 w-7 -rotate-12 rounded-full bg-accent/60 [animation-delay:0.5s]" />
                  <div className="confetti-float absolute left-[45%] top-8 h-2 w-10 rotate-6 rounded-full bg-muted/60 [animation-delay:1s]" />
                  <div className="award-bounce absolute top-11 grid h-16 w-16 place-items-center rounded-full border border-amber-300/50 bg-amber-400/15 text-amber-300">
                    <Trophy className="h-8 w-8" />
                  </div>
                  <div className="absolute bottom-5 left-8 right-8 h-6 rounded-full bg-primary/10 blur-xl" />
                  {[
                    {
                      winner: awardWinners[1],
                      height: 'h-36 sm:h-40',
                      orderLabel: '2',
                      medalClassName: 'border-slate-200/70 bg-slate-200/15 text-slate-200',
                      podiumClassName: 'from-slate-200/80 via-slate-400/50 to-slate-700/50',
                      delay: '0.15s',
                    },
                    {
                      winner: awardWinners[0],
                      height: 'h-52 sm:h-60',
                      orderLabel: '1',
                      medalClassName: 'border-amber-200/80 bg-amber-300/20 text-amber-200',
                      podiumClassName: 'from-amber-200/95 via-amber-400/60 to-amber-700/55',
                      delay: '0s',
                    },
                    {
                      winner: awardWinners[2],
                      height: 'h-28 sm:h-32',
                      orderLabel: '3',
                      medalClassName: 'border-orange-200/80 bg-orange-300/20 text-orange-200',
                      podiumClassName: 'from-orange-200/85 via-orange-500/50 to-orange-800/50',
                      delay: '0.3s',
                    },
                  ].map((podium) => (
                    <Link
                      key={podium.winner.rank}
                      href={podium.winner.href}
                      className="podium-rise group relative z-10 flex flex-1 flex-col items-center"
                      style={{ animationDelay: podium.delay }}
                    >
                      {podium.winner.rank === 1 ? (
                        <div className="absolute -top-10 flex items-end gap-1 text-amber-200">
                          <Star className="h-4 w-4 rotate-[-18deg] fill-current" />
                          <Trophy className="h-7 w-7" />
                          <Star className="h-4 w-4 rotate-[18deg] fill-current" />
                        </div>
                      ) : null}
                      <div className={`medal-shine mb-3 grid h-16 w-16 place-items-center rounded-full border text-xl font-black shadow-lg transition-transform group-hover:-translate-y-1 ${podium.medalClassName}`}>
                        {podium.orderLabel}
                      </div>
                      <div className={`${podium.height} flex w-full max-w-[142px] flex-col items-center justify-end rounded-t-[2rem] border border-white/25 bg-gradient-to-b ${podium.podiumClassName} p-4 text-center transition-transform group-hover:-translate-y-2`}>
                        <p className="text-xs font-semibold text-background/80">第 {podium.winner.rank} 名</p>
                        <p className="mt-1 text-lg font-black text-background">{podium.winner.name}</p>
                        <p className="mt-2 line-clamp-2 rounded-xl bg-background/20 px-2 py-1 text-xs font-medium leading-relaxed text-background/85">
                          {podium.winner.title.split('｜')[0]}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                {awardWinners.map((winner) => {
                  const toneClassName = {
                    gold: 'border-amber-300/40 bg-amber-500/10 text-amber-600',
                    silver: 'border-slate-300/40 bg-slate-500/10 text-slate-500',
                    bronze: 'border-orange-300/40 bg-orange-500/10 text-orange-600',
                  }[winner.palette]

                  return (
                    <article key={winner.rank} className="winner-card-enter rounded-2xl border border-border/60 bg-background/65 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-background/80">
                      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold ${toneClassName}`}>
                            <Star className="h-3.5 w-3.5 fill-current" />
                            第 {winner.rank} 名
                          </div>
                          <h4 className="text-xl font-bold text-foreground">{winner.name}</h4>
                          <p className="mt-1 text-sm font-medium text-primary">{winner.title}</p>
                        </div>
                        <Link href={winner.href} className="text-sm font-medium text-accent hover:text-accent/80">
                          查看作品
                        </Link>
                      </div>
                      <p className="mb-3 text-sm font-semibold text-foreground/85">入選具體理由</p>
                      <ul className="space-y-2">
                        {winner.reasons.map((reason, index) => (
                          <li key={reason} className="flex gap-3 text-sm leading-relaxed text-foreground/70">
                            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-primary/25 bg-primary/10 text-xs font-bold text-primary">
                              {index + 1}
                            </span>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mb-16 rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-card/40 to-primary/10 p-6 sm:p-8">
            <div className="mb-6 max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <Sparkles className="h-4 w-4" />
                給後續作品的優化建議
              </div>
              <h3 className="text-2xl font-bold text-foreground">讓作品更像可溝通的需求原型</h3>
              <p className="mt-3 leading-relaxed text-foreground/70">
                其他作品可以不用急著追求更多裝飾，先把「誰需要、遇到什麼困難、頁面如何幫忙」說得更具體，vibecoding 的成果就會更容易被理解與延伸。
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {portfolioSuggestions.map((suggestion, index) => (
                <div key={suggestion} className="flex gap-3 rounded-2xl border border-border/50 bg-background/55 p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/75">{suggestion}</p>
                </div>
              ))}
            </div>
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
                    const isExternalLink = student.href?.startsWith('http') || student.href?.startsWith('file:')
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
                      isExternalLink ? (
                        <a
                          key={student.name}
                          href={student.href}
                          target="_blank"
                          rel="noreferrer"
                          className={`${cardClassName} block`}
                        >
                          {card}
                        </a>
                      ) : (
                        <Link key={student.name} href={student.href} className={`${cardClassName} block`}>
                          {card}
                        </Link>
                      )
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
