import { PortfolioBackLink } from '../portfolio-back-link'

const activities = [
  ['研究', 'Research', '量化研究方法，探索日常經驗如何影響人的想法與行為。對數據背後的故事感興趣。'],
  ['創作與學習', 'Creative Work', '對策展與敘事有興趣，有攝影創作與展覽經驗，持續在創作中探索記憶與情緒。'],
  ['工作與生活', 'Work & Life', '有英文教學、文案與內容行銷經驗。對不同的生活方式保持好奇。'],
] as const

const experiences = [
  ['美語老師', '芝麻街美語', '班級管理、課程規劃與學生溝通。學會了如何用不同方式與不同的人對話。'],
  ['書店實習生', '獨立書店', '營運協助、文案撰寫、空間規劃。在書與人之間找到自己喜歡的節奏。'],
  ['文案寫手', '日商公司', '行銷內容製作與品牌溝通。學習如何用文字說一個好故事。'],
  ['社企實習生', '社會企業', '參與社會議題相關專案，理解如何在商業與社會價值之間找到平衡。'],
] as const

const projects = [
  ['Pure...', '攝影計畫', '靈感來自歐洲旅行的攝影作品。關於記憶、情緒與那些潛意識裡的畫面。', ['攝影', '展覽', '個人創作']],
  ['阿塱壹計畫', '環境與社會議題', '結合環境與社會議題的專案，包含田野觀察、訪談與內容製作。', ['田野調查', '訪談', '內容製作']],
] as const

const skills = [
  ['文案寫作', '用文字說故事，把想法變成有溫度的內容'],
  ['溝通與敘事', '傾聽、理解，然後找到對的方式表達'],
  ['跨文化經驗', '印度志工經驗，學會在不同文化中找到連結'],
  ['團隊合作', '專案執行與協作，在團隊中找到自己的位置'],
] as const

export default function ChenXiPortfolioPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf8] text-stone-950">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-stone-200/50 bg-[#fbfaf8]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <PortfolioBackLink className="border-stone-200 bg-white/75 text-stone-600 hover:text-stone-950" />
          <span className="text-sm font-medium tracking-wide">Tracy Chen</span>
        </div>
      </nav>

      <section id="hero" className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <h1 className="mb-4 font-serif text-5xl font-light tracking-tight md:text-7xl">Tracy Chen</h1>
          <p className="mb-6 text-2xl font-light text-stone-500 md:text-3xl">陳曦</p>
          <p className="mb-4 text-lg italic text-stone-800/80 md:text-xl">"I notice things. Then I keep them."</p>
          <p className="text-base text-stone-500">在生活與人之間，慢慢理解世界的人</p>
        </div>
      </section>

      <section id="about" className="px-6 py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 font-serif text-3xl font-light md:text-4xl">About Me</h2>
          <div className="space-y-6 text-lg leading-relaxed text-stone-700">
            <p>我是陳曦，畢業於輔仁大學社會學系。在這之前，我曾就讀外交與國際關係全英語學程，後來發現那不太是我的路，於是轉學、換了跑道。</p>
            <p>這些年來，我一直在摸索自己的節奏。有時候走得慢，有時候停下來，但始終沒有停止觀察。</p>
            <p>我喜歡觀察人，觀察情緒，觀察那些說不清楚但能感覺到的東西。社會學給了我一種看世界的方式，不是去評斷，而是去理解。</p>
            <p>現在的我，還在找自己的位置。但我想，這本身就是一種狀態，不是問題。</p>
          </div>
        </div>
      </section>

      <section className="bg-stone-100/60 px-6 py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 font-serif text-3xl font-light md:text-4xl">What I Do</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {activities.map(([title, titleEn, description]) => (
              <article key={title} className="rounded-2xl bg-white p-8 shadow-sm">
                <p className="mb-2 text-xs uppercase tracking-widest text-stone-500">{titleEn}</p>
                <h3 className="mb-4 font-serif text-xl">{title}</h3>
                <p className="leading-relaxed text-stone-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-16 font-serif text-3xl font-light md:text-4xl">Experience</h2>
          <div className="space-y-12">
            {experiences.map(([role, company, description]) => (
              <article key={role}>
                <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
                  <h3 className="text-lg font-medium">{role}</h3>
                  <span className="text-sm text-stone-500">{company}</span>
                </div>
                <p className="leading-relaxed text-stone-600">{description}</p>
                <div className="mt-6 h-px bg-stone-200" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100/60 px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-16 font-serif text-3xl font-light md:text-4xl">Projects</h2>
          <div className="space-y-12">
            {projects.map(([title, subtitle, description, tags]) => (
              <article key={title} className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
                <p className="mb-2 text-xs uppercase tracking-widest text-stone-500">{subtitle}</p>
                <h3 className="mb-4 font-serif text-2xl md:text-3xl">{title}</h3>
                <p className="mb-6 leading-relaxed text-stone-600">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-16 font-serif text-3xl font-light md:text-4xl">Skills</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {skills.map(([name, description]) => (
              <div key={name}>
                <h3 className="mb-2 text-lg font-medium">{name}</h3>
                <p className="text-sm leading-relaxed text-stone-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
