import Link from 'next/link'
import { ArrowLeft, CheckCircle, Mail, MessageCircle, Quote, Rainbow, Send, Sparkles, Target } from 'lucide-react'

const strengths = [
  {
    icon: Sparkles,
    title: '溫柔細膩',
    description: '能敏銳察覺他人的情緒變化',
  },
  {
    icon: MessageCircle,
    title: '表達清楚',
    description: '擅長把複雜內容整理成容易理解的方式',
  },
  {
    icon: Rainbow,
    title: '適應力強',
    description: '能快速融入不同團體與工作節奏',
  },
  {
    icon: CheckCircle,
    title: '有責任感',
    description: '願意把每件事做到完整並持續修正',
  },
]

const experiences = [
  {
    title: '台中社區工作隊｜隊輔（兒童組）',
    description: '協助活動流程進行與團體帶領，陪伴孩子參與課程與遊戲互動，練習傾聽、引導與觀察兒童需求。',
  },
  {
    title: '屏東王船夏令營｜隊輔',
    description: '負責學員照顧、秩序維持與團體互動引導，協助孩子融入團體並建立合作關係。',
  },
  {
    title: '燙傷兒童夏令營｜隊輔',
    description: '陪伴孩子參與活動並提供生活照顧與情緒支持，以尊重與理解建立安全感。',
  },
  {
    title: '台中社區工作隊｜隊輔（樂齡組）',
    description: '協助長者參與活動與團體互動，練習以耐心與尊重的態度溝通。',
  },
]

export default function WuTingYuPortfolioPage() {
  return (
    <main className="min-h-screen bg-[#fff8fb] text-[#3e2c34]">
      <header className="sticky top-0 z-40 border-b border-pink-100 bg-[#fff8fb]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 hover:text-pink-700">
            <ArrowLeft className="size-4" />
            返回學員作品集
          </Link>
          <div className="hidden items-center gap-6 text-sm text-[#7b6470] md:flex">
            <a href="#about" className="hover:text-pink-600">About</a>
            <a href="#strengths" className="hover:text-pink-600">Strengths</a>
            <a href="#experience" className="hover:text-pink-600">Experience</a>
            <a href="#contact" className="hover:text-pink-600">Contact</a>
          </div>
        </nav>
      </header>

      <section className="flex min-h-[85vh] items-center justify-center px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="relative mx-auto mb-8 h-40 w-40 md:h-48 md:w-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300/70 to-violet-300/70 blur-md" />
            <div className="relative grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-pink-400 to-violet-300 p-1.5">
              <div className="grid h-full w-full place-items-center rounded-full bg-white text-6xl font-bold text-pink-500">
                吳
              </div>
            </div>
          </div>

          <h1 className="mb-3 text-4xl font-bold md:text-6xl">吳婷宇</h1>
          <p className="mb-6 text-lg font-medium text-pink-500 md:text-xl">Wala</p>
          <p className="mb-10 text-lg leading-relaxed text-[#7b6470] md:text-xl">
            社會工作學系大三學生｜希望成為溫柔又堅定的助人工作者
          </p>

          <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm md:p-8">
            <blockquote className="space-y-3">
              <p className="text-lg font-semibold leading-tight md:text-xl">
                「我們都生活在陰溝裡，但當中仍有人仰望星空。」
              </p>
              <p className="text-sm text-violet-500/70 md:text-base">
                "We are all in the gutter but some of us are looking at the stars."
              </p>
              <p className="text-sm italic text-[#7b6470] md:text-base">Oscar Wilde</p>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="size-4 text-pink-500" />
            <h2 className="text-sm font-medium uppercase tracking-widest text-pink-500">About Me</h2>
          </div>
          <h3 className="mb-8 text-3xl font-bold md:text-4xl">關於我</h3>
          <div className="rounded-3xl border border-pink-100 bg-white p-6 md:p-8">
            <div className="space-y-5 text-lg leading-relaxed text-[#5f4350]">
              <p>我的平時的興趣是養寵物、運動、閱讀。</p>
              <p>我喜歡觀察人與環境的互動，也習慣在對話中慢慢理解對方的情緒與需求。</p>
              <p>
                我相信<span className="font-medium text-[#3e2c34]">「陪伴」不只是安慰</span>，而是讓一個人在低潮時，
                依然能感受到自己並不孤單。
              </p>
              <p>我希望未來能成為一位兼具專業與溫度的社工，陪伴人們重新找回自己的力量。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="strengths" className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-pink-500">Soft Skills</h2>
          <h3 className="mb-10 text-3xl font-bold md:text-4xl">我的特質</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => {
              const Icon = strength.icon
              return (
                <div key={strength.title} className="rounded-3xl border border-pink-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-2xl bg-pink-100 p-2.5">
                      <Icon className="size-5 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="mb-1.5 text-lg font-semibold">{strength.title}</h4>
                      <p className="leading-relaxed text-[#7b6470]">{strength.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-pink-500">Experience</h2>
          <h3 className="mb-10 text-3xl font-bold md:text-4xl">經歷</h3>
          <div className="rounded-3xl border border-pink-100 bg-[#fff8fb] p-6 md:p-8">
            {experiences.map((experience, index) => (
              <article key={experience.title} className={index === experiences.length - 1 ? 'pt-7' : 'border-b border-pink-100 py-7 first:pt-0'}>
                <h4 className="mb-3 text-lg font-semibold md:text-xl">{experience.title}</h4>
                <p className="leading-relaxed text-[#7b6470]">{experience.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-pink-500">My Values</h2>
          <h3 className="mb-8 text-3xl font-bold md:text-4xl">我相信的價值</h3>
          <div className="mb-8 space-y-6 text-lg leading-relaxed text-[#5f4350]">
            <p>我相信每個人都有自己的故事。</p>
            <p>而社工的角色，不是給答案，而是提供一個安全的空間，讓對方能夠重新看見自己、重新選擇方向。</p>
          </div>
          <div className="rounded-3xl border border-pink-200 bg-gradient-to-br from-pink-100 to-violet-100 p-6 md:p-8">
            <Quote className="mb-4 size-8 text-pink-500/50" />
            <p className="text-xl font-medium leading-relaxed md:text-2xl">陪伴是一種溫柔但堅定的力量。</p>
            <p className="mt-4 leading-relaxed text-[#7b6470]">
              我相信每個人都有屬於自己的故事，而助人工作的價值，是在對方最脆弱的時刻，成為他能安心停靠的地方。
            </p>
          </div>
        </div>
      </section>

      <section id="goal" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-pink-500">Goal</h2>
          <h3 className="mb-8 text-3xl font-bold md:text-4xl">未來目標</h3>
          <div className="rounded-3xl border border-pink-100 bg-[#fff8fb] p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-2xl bg-pink-100 p-3">
                <Target className="size-6 text-pink-500" />
              </div>
              <div className="space-y-4 text-lg leading-relaxed text-[#5f4350]">
                <p>
                  我希望未來能在 <span className="font-medium text-[#3e2c34]">兒少、家庭或心理支持領域</span> 深入學習與實務累積，
                </p>
                <p>成為能真正理解與支持他人的社工。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Send className="size-4 text-pink-500" />
            <h2 className="text-sm font-medium uppercase tracking-widest text-pink-500">Contact</h2>
          </div>
          <h3 className="mb-8 text-3xl font-bold md:text-4xl">聯絡我</h3>
          <div className="rounded-3xl border border-pink-200 bg-gradient-to-br from-pink-100 to-violet-100 p-8 md:p-12">
            <p className="mb-3 text-lg leading-relaxed text-[#5f4350] md:text-xl">如果你想和我聊聊社工、營隊活動、</p>
            <p className="mb-8 text-lg leading-relaxed text-[#5f4350] md:text-xl">或關於成長與療癒的故事，歡迎與我聯絡！</p>
            <a
              href="mailto:egroup.wala@gmail.com"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-pink-100 bg-white px-6 py-4 font-medium transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Mail className="size-5 text-pink-500" />
              egroup.wala@gmail.com
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-pink-100 px-6 py-8 text-center text-sm text-[#7b6470]">
        <p>© 2026 吳婷宇. All rights reserved.</p>
      </footer>
    </main>
  )
}
