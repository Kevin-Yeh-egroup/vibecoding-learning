'use client'

import { useEffect, useMemo, useState, type ComponentProps, type CSSProperties, type FormEvent } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Award,
  Baby,
  BookOpen,
  Briefcase,
  Check,
  CheckCircle2,
  Coins,
  Cpu,
  CreditCard,
  DollarSign,
  ExternalLink,
  Facebook,
  FolderOpen,
  GraduationCap,
  HandHeart,
  Heart,
  Home,
  Instagram,
  Mail,
  Map,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquareText,
  NotebookPen,
  Pencil,
  PiggyBank,
  Plane,
  Presentation,
  Quote,
  Send,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  User,
  Users,
  Utensils,
  Wallet,
  X,
  Youtube,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

type SubmittedSlug = 'tseng-yu-chin' | 'chang-ya-chu' | 'chen-tzu-min' | 'liu-ting-wei'

type MotionCompatProps<T extends 'div' | 'h1' | 'h2' | 'p'> = ComponentProps<T> & {
  initial?: unknown
  animate?: unknown
  whileInView?: unknown
  viewport?: unknown
  variants?: unknown
}

function MotionDiv({ initial: _initial, animate: _animate, whileInView: _whileInView, viewport: _viewport, variants: _variants, ...props }: MotionCompatProps<'div'>) {
  return <div {...props} />
}

function MotionH1({ initial: _initial, animate: _animate, whileInView: _whileInView, viewport: _viewport, variants: _variants, ...props }: MotionCompatProps<'h1'>) {
  return <h1 {...props} />
}

function MotionH2({ initial: _initial, animate: _animate, whileInView: _whileInView, viewport: _viewport, variants: _variants, ...props }: MotionCompatProps<'h2'>) {
  return <h2 {...props} />
}

function MotionP({ initial: _initial, animate: _animate, whileInView: _whileInView, viewport: _viewport, variants: _variants, ...props }: MotionCompatProps<'p'>) {
  return <p {...props} />
}

const motion = {
  div: MotionDiv,
  h1: MotionH1,
  h2: MotionH2,
  p: MotionP,
}

export function OriginalSubmittedPortfolio({ slug }: { slug: SubmittedSlug }) {
  if (slug === 'tseng-yu-chin') return <TsengYuChinOriginal />
  if (slug === 'chang-ya-chu') return <ChangYaChuOriginal />
  if (slug === 'chen-tzu-min') return <ChenTzuMinOriginal />
  return <LiuTingWeiOriginal />
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

function TsengYuChinOriginal() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative flex min-h-[90vh] items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-background to-background" />
        <motion.div
          className="relative z-10 mx-auto max-w-3xl text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Heart className="size-4" />
              看見與陪伴
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="mb-6 text-balance text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
            當爸爸想請育嬰假，
            <br />
            <span className="text-primary">為什麼還要先說服全世界？</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            這裡想陪你理解，當男性申請育嬰假時，為什麼常常不只是在請假，
            而是在承受來自職場與社會的隱形壓力。
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-medium"
              onClick={() => document.getElementById('microaggressions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              了解常見微歧視
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base font-medium"
              onClick={() => document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })}
            >
              看見支持資源
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-card px-6 py-24">
        <motion.div className="mx-auto max-w-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="mb-8 flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
              <MessageCircle className="size-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">也許你曾經這樣想過</h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            {[
              '擔心主管會覺得我不夠投入工作',
              '害怕同事認為我把工作丟給他們',
              '明明想陪孩子成長，卻覺得自己好像做錯了什麼',
              '不確定這樣的選擇會不會影響升遷',
              '覺得開口請假需要很大的勇氣',
            ].map((text) => (
              <div key={text} className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5">
                <div className="mt-2.5 size-2 shrink-0 rounded-full bg-primary" />
                <p className="text-lg leading-relaxed text-foreground">{text}</p>
              </div>
            ))}
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-10 text-center text-xl italic leading-relaxed text-muted-foreground">
            這些感受都是真實的，你不需要為此感到抱歉。
          </motion.p>
        </motion.div>
      </section>

      <section id="microaggressions" className="bg-background px-6 py-24">
        <motion.div className="mx-auto max-w-5xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-semibold text-foreground md:text-4xl">什麼是微歧視？</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              有些話看似平常，卻可能讓想陪伴孩子的父親感到愧疚、退縮，
              甚至懷疑自己是否做錯了。
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-2">
            {[
              ['太太不是也可以請嗎？', '這句話預設了照顧孩子是母親的責任，忽略了父親同樣渴望參與育兒的心情，也強化了性別分工的刻板印象。'],
              ['你現在請假，部門很難安排耶', '看似在說工作困難，實際上傳達了「你的家庭需求不該影響工作」的訊息，讓人感到請假是一種虧欠。'],
              ['男生帶小孩，有需要請這麼久嗎？', '質疑男性照顧孩子的必要性，暗示父親的角色不如母親重要，也否定了男性想要深度參與育兒的意願。'],
              ['你是不是想趁機偷懶啊？', '將育嬰假汙名化為逃避工作的藉口，完全忽視照顧新生兒的辛勞，讓申請者感到被誤解與不被尊重。'],
            ].map(([quote, explanation]) => (
              <motion.div key={quote} variants={fadeInUp} className="rounded-3xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-5 flex items-start gap-3">
                  <Quote className="size-8 shrink-0 text-accent" />
                  <p className="text-xl font-medium leading-snug text-foreground">「{quote}」</p>
                </div>
                <p className="pl-11 leading-relaxed text-muted-foreground">{explanation}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-card px-6 py-24">
        <motion.div className="mx-auto max-w-5xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-semibold text-foreground md:text-4xl">數據背後的故事</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">這些數字反映的不只是個人意願，也包含制度與文化的壓力。</p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Baby, value: '27.7%', label: '台灣男性育嬰假申請率', note: '儘管制度上男女平等，實際申請仍以女性為主' },
              { icon: Briefcase, value: '40.5%', label: '日本男性育嬰假申請率', note: '透過企業責任制度與彈性請假提升參與' },
              { icon: Home, value: '29.2%', label: '韓國男性育嬰假申請率', note: '高額薪資補助與爸爸月制度鼓勵父親參與' },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeInUp} className="rounded-3xl border border-border bg-background p-8 text-center">
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="size-8 text-primary" />
                </div>
                <p className="mb-2 text-4xl font-semibold text-primary">{item.value}</p>
                <p className="mb-3 font-medium text-foreground">{item.label}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-background px-6 py-24">
        <motion.div className="mx-auto max-w-4xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-semibold text-foreground md:text-4xl">真實的聲音</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">這些是許多父親共同的經歷，你並不孤單。</p>
          </motion.div>
          <motion.div variants={staggerContainer} className="space-y-8">
            {[
              ['提出育嬰假申請後，主管雖然簽核了，但之後在會議上總是跳過他，重要專案也不再交給他負責。', '感覺自己被邊緣化了，好像請假是一種背叛。', '職場的隱性懲罰讓許多父親在家庭與事業間陷入兩難。'],
              ['同事們在茶水間聊天時開玩笑說：「現在男生也流行當奶爸喔？」語氣裡帶著一絲揶揄。', '雖然是玩笑，但那一刻真的很不舒服，不知道該怎麼回應。', '日常的玩笑話累積起來，會形成一種無形的壓力。'],
              ['家人雖然支持他請育嬰假，但長輩私下還是會問太太：「他工作怎麼辦？你確定他帶得好嗎？」', '覺得自己的能力被質疑，連最親近的人都不完全信任自己。', '傳統觀念不只存在職場，也深植於家庭之中。'],
            ].map(([situation, feeling, insight]) => (
              <motion.div key={situation} variants={fadeInUp} className="rounded-3xl border border-border bg-card p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-accent/50">
                    <Users className="size-5 text-accent-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">匿名經驗分享</span>
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="mb-2 text-sm text-muted-foreground">情境</p>
                    <p className="leading-relaxed text-foreground">{situation}</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4">
                    <p className="mb-2 text-sm text-muted-foreground">當事人的感受</p>
                    <p className="italic leading-relaxed text-foreground">「{feeling}」</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                      <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
                      {insight}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="support" className="bg-card px-6 py-24">
        <motion.div className="mx-auto max-w-5xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-semibold text-foreground md:text-4xl">我們可以一起做些什麼</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">改變從理解開始，每個人都可以成為支持的力量。</p>
          </motion.div>
          <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Briefcase, title: '給主管', items: ['主動告知育嬰假權益，而非等員工開口', '建立友善的請假文化，避免隱性懲罰', '以身作則，分享自己的家庭經驗', '確保請假者回歸後能順利接軌工作'] },
              { icon: Users, title: '給同事', items: ['避免帶有性別刻板印象的玩笑', '理解照顧孩子不是「幫忙」而是責任', '在同事請假時給予正面支持', '分擔工作時保持善意，而非抱怨'] },
              { icon: Home, title: '給家人', items: ['肯定伴侶參與育兒的決定', '不用傳統標準評價照顧能力', '理解育兒是共同承擔，不分主副', '給予情感支持，而非質疑選擇'] },
            ].map((card) => (
              <motion.div key={card.title} variants={fadeInUp} className="rounded-3xl border border-border bg-background p-8">
                <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10">
                  <card.icon className="size-7 text-primary" />
                </div>
                <h3 className="mb-5 text-xl font-semibold text-foreground">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <div className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-gradient-to-b from-background to-accent/20 px-6 py-32">
        <motion.div className="mx-auto max-w-3xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="mx-auto mb-8 flex size-20 items-center justify-center rounded-full bg-primary/10">
            <HandHeart className="size-10 text-primary" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="mb-6 text-balance text-3xl font-semibold text-foreground md:text-4xl">
            願每一位想陪孩子長大的人，
            <br />
            都不必先為自己的照顧角色辯解。
          </motion.h2>
          <motion.p variants={fadeInUp} className="mb-10 text-lg leading-relaxed text-muted-foreground">
            改變需要時間，但每一次的理解與支持，
            <br className="hidden sm:block" />
            都在為下一代創造更友善的環境。
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="rounded-full px-8 py-6 text-base font-medium">
              了解更多
              <TrendingUp className="ml-2 size-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-medium">
              分享這個議題
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <footer className="border-t border-border bg-card px-6 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm text-muted-foreground">本網站內容基於學術研究，旨在提升社會對男性育嬰假議題的理解與關注。</p>
        </div>
      </footer>
    </main>
  )
}

function ChangYaChuOriginal() {
  return (
    <main className="min-h-screen bg-background">
      <ChangFloatingNav />
      <ChangHero />
      <ChangAbout />
      <ChangServices />
      <ChangSkills />
      <ChangProjects />
      <ChangContact />
    </main>
  )
}

function ChangFloatingNav() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const navItems = [
    { icon: Home, label: '首頁', href: '#hero' },
    { icon: User, label: '關於我', href: '#about' },
    { icon: Briefcase, label: '服務', href: '#services' },
    { icon: Sparkles, label: '專業', href: '#skills' },
    { icon: FolderOpen, label: '專案', href: '#projects' },
    { icon: Mail, label: '聯絡', href: '#contact' },
  ]

  useEffect(() => {
    let scrollTimer: number | undefined
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
      setIsScrolling(true)
      if (scrollTimer) window.clearTimeout(scrollTimer)
      scrollTimer = window.setTimeout(() => setIsScrolling(false), 180)
      for (const section of navItems.map((item) => item.href.slice(1)).reverse()) {
        const element = document.getElementById(section)
        if (element?.getBoundingClientRect().top && element.getBoundingClientRect().top <= 150) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimer) window.clearTimeout(scrollTimer)
    }
  }, [])

  return (
    <nav className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${isVisible && !isScrolling ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="flex items-center gap-1 rounded-full border border-border bg-card/90 px-2 py-2 shadow-lg backdrop-blur-md">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.href.slice(1)
          return (
            <button
              key={item.href}
              onClick={() => document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })}
              className={`group relative rounded-full p-3 transition-all duration-300 ${isActive ? 'scale-110 bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
            >
              <Icon className="size-5" />
              <span className={`absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground px-2 py-1 text-xs text-background transition-all duration-300 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100'}`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

function ChangHero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const floatingIcons = [
    { Icon: Coins, delay: '0s', position: 'top-10 left-[6%]' },
    { Icon: NotebookPen, delay: '0.5s', position: 'top-16 left-[26%]' },
    { Icon: Pencil, delay: '1s', position: 'top-12 right-[28%]' },
    { Icon: MessageSquareText, delay: '1.5s', position: 'top-20 right-[10%]' },
    { Icon: CreditCard, delay: '2s', position: 'top-28 left-[52%]' },
  ]

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {floatingIcons.map((item, index) => {
        const Icon = item.Icon
        return (
          <div key={index} className={`absolute ${item.position} animate-pulse text-primary/20`} style={{ animationDelay: item.delay }}>
            <Icon className="size-10 md:size-16" />
          </div>
        )
      })}
      <div className="absolute -left-20 top-1/4 size-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-20 bottom-1/4 size-80 rounded-full bg-secondary/30 blur-3xl" />
      <div className={`relative z-10 text-center transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="relative mb-6 inline-block">
          <div className="flex size-32 animate-bounce items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-4xl font-bold text-primary-foreground shadow-xl md:size-40 md:text-5xl">
            雅筑
          </div>
          <div className="absolute -bottom-2 -right-2 rounded-full border-2 border-primary bg-card p-2 shadow-lg">
            <Sparkles className="size-5 text-primary" />
          </div>
        </div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card/90 px-4 py-2 shadow-sm backdrop-blur-sm">
          <span className="size-2 animate-pulse rounded-full bg-primary" />
          <span className="text-xs font-semibold tracking-wide text-primary md:text-sm">目前特別開放：特殊教育 × AI／輔具合作洽談</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-6xl">
          張雅筑 <span className="ml-3 text-2xl font-normal text-muted-foreground md:text-3xl">Judy Chang</span>
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
          賦能青少年從自立到自強
          <br />
          <span className="font-semibold text-primary">也與特殊教育、身心障礙服務／輔具創新同行</span>
        </p>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {['執業社工師', '青少年自立生活顧問', '財務諮詢講師', '特殊教育×身心障礙關注'].map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-md">
              {tag}
            </span>
          ))}
        </div>
        <Button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="group rounded-full px-8 py-6 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          認識我
          <ArrowDown className="ml-2 size-5 transition-transform group-hover:translate-y-1" />
        </Button>
      </div>
    </section>
  )
}

function ChangAbout() {
  return (
    <section id="about" className="relative overflow-hidden bg-secondary/30 px-4 py-24">
      <div className="pointer-events-none absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <Heart className="size-4" />
            <span className="text-sm font-medium">關於我</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">自我介紹</h2>
          <p className="mx-auto mt-3 max-w-xl text-base font-medium text-muted-foreground md:text-lg">給青少年工作者、特殊教育與第一線行動夥伴的快速瀏覽</p>
        </div>
        <div className="relative rounded-3xl border-2 border-primary/15 bg-card/95 p-8 shadow-xl backdrop-blur-md md:p-12">
          <div className="absolute -top-6 left-8 rounded-2xl bg-primary p-4 shadow-lg">
            <Quote className="size-6 text-primary-foreground" />
          </div>
          <div className="mb-8 mt-4 grid gap-3 sm:grid-cols-3">
            {[
              ['對象', '安置／轉銜青年、特殊教育需求'],
              ['年資', '相關實務 2+ 年'],
              ['合作類型', '諮詢、課程、研究協作'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-primary">{k}</div>
                <div className="mt-1 text-base font-bold leading-snug text-foreground md:text-lg">{v}</div>
              </div>
            ))}
          </div>
          <div className="space-y-7 text-foreground">
            <p className="text-2xl font-bold leading-[1.55] tracking-wide md:text-3xl">
              我是<span className="text-3xl text-primary md:text-4xl">雅筑</span>，社工師；專注在「<span className="underline decoration-primary decoration-2 underline-offset-4">賦能</span>」—讓自立與特殊教育需求者都能被接住、往前一步。
            </p>
            <p className="text-xl font-semibold leading-relaxed tracking-wide md:text-2xl">在安置兒少與特殊教育脈絡裡，我看見「<span className="text-primary">財務知能</span>」與「<span className="text-primary">生活規劃</span>」是跨向成年與社區生活最關鍵的鑰匙。</p>
            <p className="text-lg font-medium leading-relaxed tracking-wide md:text-xl">我致力透過系統化諮詢與教學，協助青年建立 <span className="rounded-lg bg-accent/40 px-2 py-1 font-semibold">財務防禦力</span>，並銜接可行、有尊嚴的自立與支持藍圖；同時關心特殊教育及身心障礙服務中的實際需求與資源串接。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChangServices() {
  const services = [
    [Home, '安置兒少自立生活規劃', '針對轉銜期的青少年，提供居住、職涯及社會資源連結的系統化諮詢。'],
    [DollarSign, '青少年財務衛教與諮詢', '專門設計適合青少年的理財識讀教案，涵蓋風險管理、儲蓄規劃與數位財務工具應用。'],
    [GraduationCap, '專業教育訓練', '為社福機構或校園提供第一線實務工作者的財務輔導技巧培訓。'],
  ] as const
  return (
    <section id="services" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">核心服務</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">專注於青少年自立與財務賦能，提供專業且有溫度的服務</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map(([Icon, title, description]) => (
            <Card key={title} className="group relative overflow-hidden border-0 shadow-lg transition-all duration-500 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 opacity-50" />
              <CardContent className="relative p-8">
                <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="size-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary">{title}</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">{description}</p>
                <div className="flex items-center gap-2 font-medium text-primary">
                  <span>了解更多</span>
                  <ArrowRight className="size-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ChangSkills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const categories = [
    { icon: Users, title: '實務核心', skills: ['個案管理', '危機處理', '安置體系資源串接', '青少年心理諮商輔導', '特殊教育', '身心障礙服務'] },
    { icon: PiggyBank, title: '財務賦能', skills: ['青少年財務識讀', '理財行為模式分析', '財務風險規避教育', '儲蓄規劃指導'] },
    { icon: Cpu, title: '科技加成', skills: ['AI 工具優化個案紀錄', '計畫書撰寫效率化', '數位資源整合應用', '線上教學平台操作'] },
  ]
  return (
    <section id="skills" className="bg-secondary/30 px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">專業優勢</h2>
          <p className="text-lg text-muted-foreground">結合實務經驗、財務知識與數位工具的跨領域專長</p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <button key={category.title} onClick={() => setActiveCategory(index)} className={`flex items-center gap-3 rounded-full px-6 py-3 font-medium transition-all duration-300 ${activeCategory === index ? 'scale-105 bg-primary text-primary-foreground shadow-lg' : 'border border-border bg-card text-muted-foreground hover:bg-card/80'}`}>
                <Icon className="size-5" />
                <span>{category.title}</span>
              </button>
            )
          })}
        </div>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-xl md:p-12">
          <div className="grid gap-4 md:grid-cols-2">
            {categories[activeCategory].skills.map((skill) => (
              <div key={skill} className="group flex items-center gap-4 rounded-2xl bg-muted/50 p-4 transition-all duration-300 hover:bg-muted">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                  <Check className="size-5" />
                </div>
                <span className="text-lg font-medium text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">點擊上方標籤切換不同專業領域</p>
      </div>
    </section>
  )
}

function ChangProjects() {
  const projects = [
    [Wallet, '財務賦能計畫', '為多位安置青年量身打造「自立儲蓄與消費契約」，成功協助其穩定經濟生活。', ['理財規劃', '一對一諮詢', '行為契約']],
    [Presentation, '校園/機構巡迴講座', '講授主題包含「從零開始的理財第一課：青少年篇」、「社會工作中的財務輔導實務」。', ['教育訓練', '講座活動', '專業分享']],
    [Map, '數位資源導覽', '整合政府與民間資源，建立數位化的自立生活資源地圖，方便青年查詢運用。', ['資源整合', '數位工具', '服務創新']],
    [Cpu, 'AI 輔具開發／使用者研究', '參與 AI 輔具相關開發之使用者研究，聚焦 ADHD 與 ASD 族群的實際使用情境、門檻與支持需求。', ['使用者研究', 'ADHD', 'ASD', '輔具創新']],
  ] as const
  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">專案經歷</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">從實務中累積的專案成果與服務創新</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map(([Icon, title, description, tags]) => (
            <Card key={title} className="group relative overflow-hidden border-0 bg-card shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-2 bg-gradient-to-r from-primary to-primary/70" />
              <CardContent className="p-6">
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="size-7 text-primary-foreground" />
                </div>
                <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-foreground">
                  {title}
                  <ExternalLink className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full transition-colors hover:bg-primary hover:text-primary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ChangContact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert('感謝您的訊息！我會盡快回覆您。')
  }
  return (
    <section id="contact" className="bg-secondary/30 px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">開啟合作洽談</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">歡迎社福機構、學校特教團隊、青少年工作單位或有需求的青年與我聯繫</p>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-xl">
              <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-foreground">
                <Sparkles className="size-5 text-primary" />
                聯絡資訊
              </h3>
              <div className="space-y-6">
                {[
                  [Mail, 'Email', 'judy304096@gmail.com', 'mailto:judy304096@gmail.com'],
                  [Instagram, 'Instagram', '@judy304096', 'https://www.instagram.com/judy304096/'],
                  [Facebook, 'Facebook', 'judy304096', 'https://www.facebook.com/judy304096'],
                ].map(([Icon, label, handle, href]) => (
                  <div key={label as string} className="group flex items-start gap-4">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                      <Icon className="size-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-muted-foreground">{label as string}</p>
                      <a href={href as string} target={(href as string).startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-lg font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline">
                        {handle as string}
                      </a>
                    </div>
                  </div>
                ))}
                <div className="group flex items-start gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                    <MapPin className="size-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-muted-foreground">所在地</p>
                    <p className="font-medium text-foreground">台灣，台中</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['社工師', '青少年自立', '財務諮詢', '自由接案', '社會工作', '輔具開發'].map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-full px-4 py-2 text-sm transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-border bg-card p-8 shadow-xl">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">姓名</label>
              <Input placeholder="您的姓名" className="rounded-xl border-border focus:border-primary" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input type="email" placeholder="your@email.com" className="rounded-xl border-border focus:border-primary" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">訊息內容</label>
              <Textarea placeholder="請描述您的需求或合作想法..." className="min-h-[120px] resize-none rounded-xl border-border focus:border-primary" required />
            </div>
            <Button type="submit" size="lg" className="group w-full rounded-xl font-semibold" disabled={isSubmitting}>
              {isSubmitting ? '發送中...' : '預約專業諮詢'}
              {!isSubmitting ? <Send className="ml-2 size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /> : null}
            </Button>
          </form>
        </div>
        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 張雅筑 Judy Chang. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

const benefits = [
  { slug: 'maternity-grant', icon: '🍼', title: '生育津貼', description: '新生兒家庭一次性補助', target: '設籍各縣市且符合當地規定的新生兒家庭', benefit: '依縣市規定發放（多為一次性）' },
  { slug: 'childcare-subsidy', icon: '👩‍👧', title: '托育補助', description: '送托嬰中心或保母可申請', target: '未滿 2 歲嬰幼兒家庭（依縣市/中央方案）', benefit: '依方案與送托型態而定（多為每月補助）' },
  { slug: 'parenting-allowance', icon: '🎈', title: '育兒津貼', description: '自己帶小孩也有補助', target: '未滿 5 歲幼兒家長（依縣市/中央方案）', benefit: '依方案而定（多為每月補助）' },
  { slug: 'kindergarten-subsidy', icon: '🏫', title: '幼兒園補助', description: '公私立幼兒園學費減免', target: '就讀幼兒園的 2–6 歲幼兒（依縣市/中央方案）', benefit: '依方案與就讀型態而定（學期/每月）' },
  { slug: 'early-intervention', icon: '🧑‍⚕️', title: '早療服務', description: '發展評估、療育與轉介資源', target: '疑似或確診發展遲緩之嬰幼兒與家庭', benefit: '依需求提供評估與療育資源諮詢／轉介' },
]

const chenLightThemeVars = {
  '--background': 'oklch(1 0 0)',
  '--foreground': 'oklch(0.145 0 0)',
  '--card': 'oklch(1 0 0)',
  '--card-foreground': 'oklch(0.145 0 0)',
  '--popover': 'oklch(1 0 0)',
  '--popover-foreground': 'oklch(0.145 0 0)',
  '--primary': 'oklch(0.62 0.19 350)',
  '--primary-foreground': 'oklch(1 0 0)',
  '--secondary': 'oklch(0.97 0.02 350)',
  '--secondary-foreground': 'oklch(0.25 0.05 350)',
  '--muted': 'oklch(0.96 0.01 350)',
  '--muted-foreground': 'oklch(0.5 0.03 350)',
  '--accent': 'oklch(0.88 0.07 55)',
  '--accent-foreground': 'oklch(0.32 0.08 55)',
  '--border': 'oklch(0.9 0.04 350)',
  '--input': 'oklch(0.9 0.04 350)',
  '--ring': 'oklch(0.7 0.15 350)',
} as CSSProperties

function ChenTzuMinOriginal() {
  const entryOptions = [
    { icon: '👶', label: '我有 0–2 歲寶寶', color: 'pink' as const },
    { icon: '🧸', label: '我有幼兒（2–6 歲）', color: 'blue' as const },
    { icon: '💰', label: '我需要經濟協助', color: 'yellow' as const },
    { icon: '🏥', label: '我想了解醫療／發展資源', color: 'purple' as const },
    { icon: '🤱', label: '月嫂及泌乳師相關友善資源', color: 'pink' as const },
    { icon: '🥣', label: '寶寶副食品及食譜', color: 'blue' as const },
  ]
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-pink-50 via-white to-sky-50 text-foreground" style={chenLightThemeVars}>
      <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl" role="img" aria-label="家庭">🏠</span>
            <span className="font-bold text-foreground">台中市福利小幫手</span>
          </div>
          <button className="rounded-full p-2 transition-colors hover:bg-pink-50">
            <Menu className="size-6 text-foreground" />
            <span className="sr-only">選單</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <section className="mb-10 overflow-hidden rounded-[2rem] border border-pink-100 bg-white/80 p-6 shadow-sm sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
                <span>🎀</span>
                育兒福利資訊整理
              </div>
              <h1 className="text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                給爸媽的一份
                <span className="text-pink-600">福利小幫手</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                把育兒家庭常見的補助、托育、醫療與發展資源整理成容易掃讀的入口，讓爸媽不用在複雜資訊裡來回搜尋。
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {['情境式入口', '熱門補助卡片', '縣市資源查詢'].map((item) => (
                  <div key={item} className="rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3 text-sm font-semibold text-pink-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-pink-100 bg-gradient-to-br from-pink-50 to-sky-50 p-6">
              <div className="mb-5 flex justify-center gap-3 text-4xl">
                <span className="animate-bounce">🎀</span>
                <span className="animate-bounce [animation-delay:100ms]">🧸</span>
                <span className="animate-bounce [animation-delay:200ms]">🎈</span>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <p className="text-center text-sm font-semibold text-pink-700">快速找到適合你的資源</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {entryOptions.slice(0, 4).map((option) => (
                    <EntryButtonOriginal key={option.label} {...option} layout="vertical" compact />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 rounded-[2rem] border border-pink-100 bg-white/80 p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-pink-700">Quick Entry</p>
              <h2 className="text-2xl font-bold text-foreground">依需求快速找到資源</h2>
            </div>
            <p className="text-sm text-muted-foreground">先選情境，再看可能適用的補助或服務。</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {entryOptions.map((option) => (
              <EntryButtonOriginal key={option.label} {...option} layout="vertical" />
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <RegionSidebarOriginal />

          <div className="min-w-0 rounded-[2rem] border border-pink-100 bg-white/80 p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-pink-700">Popular Benefits</p>
                <h2 className="text-2xl font-bold text-foreground">熱門補助</h2>
              </div>
              <p className="text-sm text-muted-foreground">以卡片整理對象、內容與下一步。</p>
            </div>
            <div className="grid gap-4 xl:grid-cols-2">
              {benefits.map((benefit) => (
                <BenefitCardOriginal key={benefit.slug} {...benefit} />
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-10 rounded-3xl border border-pink-100 bg-white/70 px-6 py-5 text-center">
          <p className="text-xs leading-relaxed text-muted-foreground">
            資料來源：台中市政府社會局。實際申請資格、金額與時程仍以主管機關公告為準；如有疑問請撥打 1999 市民專線。
          </p>
        </footer>
      </main>
    </div>
  )
}

function EntryButtonOriginal({ icon, label, color, layout = 'horizontal', compact = false }: { icon: string; label: string; color: 'pink' | 'blue' | 'yellow' | 'purple'; layout?: 'horizontal' | 'vertical'; compact?: boolean }) {
  const colorMap = {
    pink: 'border-pink-200 bg-pink-100 text-pink-700 hover:bg-pink-200',
    blue: 'border-sky-200 bg-sky-100 text-sky-700 hover:bg-sky-200',
    yellow: 'border-amber-200 bg-amber-100 text-amber-700 hover:bg-amber-200',
    purple: 'border-violet-200 bg-violet-100 text-violet-700 hover:bg-violet-200',
  }
  return (
    <button className={cn('flex w-full rounded-2xl border-2 font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]', compact ? 'p-3 text-sm' : 'p-4 text-base', layout === 'vertical' ? 'min-h-[92px] flex-col items-center justify-center gap-2 text-center' : 'flex-row items-center gap-3 text-left', colorMap[color])}>
      <span className={cn('text-2xl', layout === 'vertical' && !compact && 'text-3xl')} role="img" aria-hidden="true">{icon}</span>
      <span className={cn('leading-snug', layout === 'vertical' && 'text-sm')}>{label}</span>
    </button>
  )
}

function BenefitCardOriginal({ icon, title, description, target, benefit }: (typeof benefits)[number]) {
  return (
    <Card className="h-full overflow-hidden rounded-2xl border-2 border-pink-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="flex flex-col gap-3 p-5">
        <div className="flex items-start gap-3">
          <span className="text-3xl" role="img" aria-hidden="true">{icon}</span>
          <div className="flex-1">
            <h3 className="text-lg font-bold leading-tight text-foreground">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="mt-1 space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-sm text-pink-400">❤</span>
            <div>
              <span className="text-xs text-muted-foreground">適合對象</span>
              <p className="text-sm text-foreground">{target}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-sm text-amber-400">★</span>
            <div>
              <span className="text-xs text-muted-foreground">可以拿什麼</span>
              <p className="text-sm text-foreground">{benefit}</p>
            </div>
          </div>
        </div>
        <Button variant="outline" className="mt-2 w-full rounded-xl border-2 border-pink-200 font-medium text-pink-600 hover:bg-pink-50 hover:text-pink-700">
          了解更多
        </Button>
      </CardContent>
    </Card>
  )
}

function RegionSidebarOriginal() {
  const [q, setQ] = useState('')
  const regions = useMemo(
    () =>
      ['臺北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市', '基隆市', '新竹市', '嘉義市', '彰化縣', '南投縣', '雲林縣'].flatMap((city) =>
        ['中區', '東區', '西區', '南區', '北區'].map((district) => ({ label: `${city}-${district}` }))
      ),
    []
  )
  const filtered = useMemo(() => {
    const query = q.trim()
    if (!query) return regions
    return regions.filter((region) => region.label.includes(query))
  }, [q, regions])
  return (
    <aside className="rounded-[2rem] border border-pink-100 bg-white/80 p-5 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-pink-700">Region</p>
          <h2 className="font-bold text-foreground">縣市 / 區域</h2>
        </div>
        <div className="text-xs text-muted-foreground">12 縣市</div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        先以縣市區域建立查詢入口，後續可接上各地方政府正式補助資料。
      </p>
      <div className="mt-4">
        <input value={q} onChange={(event) => setQ(event.target.value)} placeholder="搜尋：台中市-北區" className="w-full rounded-xl border-2 border-pink-100 bg-white px-3 py-2 text-sm outline-none focus:border-pink-200" />
      </div>
      <div className="mt-4 max-h-80 overflow-y-auto pr-1">
        <div className="grid grid-cols-1 gap-2">
          {filtered.slice(0, 18).map((region) => (
            <button key={region.label} className="w-full rounded-2xl border-2 border-pink-100 bg-pink-50/40 px-3 py-2 text-left transition-colors hover:bg-pink-50">
              <div className="text-sm font-medium text-foreground">{region.label}</div>
            </button>
          ))}
        </div>
      </div>
      {filtered.length > 18 ? (
        <p className="mt-3 text-xs text-muted-foreground">還有 {filtered.length - 18} 個區域，請輸入關鍵字縮小範圍。</p>
      ) : null}
    </aside>
  )
}

function LiuTingWeiOriginal() {
  return (
    <>
      <LiuHeader />
      <main>
        <LiuHero />
        <LiuAbout />
        <LiuContent />
        <section id="awards">
          <LiuAwards />
        </section>
        <LiuSurvey />
      </main>
      <LiuFooter />
    </>
  )
}

function LiuHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { label: '關於我', href: '#about' },
    { label: '頻道內容', href: '#content' },
    { label: '獎項成就', href: '#awards' },
    { label: '問卷調查', href: '#survey' },
  ]
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-foreground transition-colors hover:text-primary">HOOK</a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item.label}</a>
          ))}
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="text-foreground md:hidden" aria-label={isOpen ? '關閉選單' : '開啟選單'}>
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {isOpen ? (
        <nav className="border-t border-border bg-background md:hidden">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="block px-6 py-4 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">{item.label}</a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}

function LiuHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-20">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a55c' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-widest text-primary">歷史系 YouTuber</p>
            <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl">HOOK</h1>
            <p className="text-xl text-muted-foreground">邱暄惠</p>
          </div>
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">「把歷史、生活與實驗變成讓人停不下來的故事。」</p>
          <div className="flex flex-wrap gap-3">
            {['#歷史系YouTuber', '#知識型創作者', '#實驗挑戰', '#料理歷史'].map((tag) => (
              <span key={tag} className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-secondary-foreground transition-colors hover:border-primary">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="#content" className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90">探索內容</a>
            <a href="#about" className="rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-colors hover:bg-secondary">關於我</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
          <div className="relative mx-auto grid aspect-square max-w-md place-items-center rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-secondary to-card">
            <div className="text-center">
              <div className="mx-auto mb-4 grid size-28 place-items-center rounded-full bg-primary/10 text-4xl font-bold text-primary">HOOK</div>
              <p className="text-sm text-muted-foreground">HOOK 個人照片</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground">
          <div className="mt-2 h-3 w-1 rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>
  )
}

function LiuAbout() {
  const features = [
    [BookOpen, '歷史科普', '世界史、料理史王、食代歷量，把知識內容變得有趣易懂'],
    [Utensils, '料理挑戰', '24 小時料理挑戰、一週挑戰、無限上綱系列'],
    [Plane, '旅行探索', '行萬里路、燒錢來吃航空體驗'],
    [Heart, '生活紀錄', '戀愛實驗室、長照系列，真實自然的家庭互動'],
  ] as const
  return (
    <section id="about" className="bg-card px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-primary">關於我</p>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">創作者介紹</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            台灣女性 YouTuber、內容創作者。頻道特色：實驗挑戰、歷史科普、料理與生活紀錄。
            創作風格幽默、真實、有故事感，擅長把知識內容變得有趣易懂。
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(([Icon, title, description]) => (
            <div key={title} className="group rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/50">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Icon className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-2xl border border-border bg-background p-8">
          <h3 className="mb-3 text-xl font-semibold text-foreground">藝名由來</h3>
          <p className="leading-relaxed text-muted-foreground">「HOOK」來自音樂術語 hook，意思是一段讓人一聽就記住的旋律。她希望自己的影片也能像 hook 一樣，讓觀眾一看就喜歡上。</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ['1996', '出生年份'],
            ['7/28', '生日'],
            ['2', '貓咪（五號、溥儀）'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl border border-border bg-background p-6 text-center">
              <p className="mb-2 text-3xl font-bold text-primary">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LiuContent() {
  const contentSeries = [
    ['挑戰系列', ['24 小時料理挑戰', '一週挑戰', '無限上綱']],
    ['歷史與知識系列', ['世界史', '料理史王', '行萬里路', '食代歷量']],
    ['生活與企劃系列', ['燒錢來吃', '戀愛實驗室', '長照系列']],
  ] as const
  const products = [
    ['2023', '手撕日曆', '每天都想史'],
    ['2024', '歷史食譜文化曆', '每天都想史'],
    ['2025', '互國神山征天魔法包', '特別企劃'],
  ] as const
  return (
    <section id="content" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-primary">頻道內容</p>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">精彩系列</h2>
        </div>
        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {contentSeries.map(([category, items], index) => (
            <div key={category} className="group relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
              <div className="relative h-full rounded-xl border border-border bg-card p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-5xl font-bold text-primary/20">0{index + 1}</span>
                  <h3 className="text-xl font-semibold text-foreground">{category}</h3>
                </div>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-primary">商品企劃</p>
          <h3 className="text-2xl font-bold text-foreground md:text-3xl">「每天都想史」系列</h3>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">把歷史知識與日常生活結合，兼具趣味與設計感</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map(([year, name, series], index) => (
            <div key={name} className={`rounded-xl border bg-card p-6 ${index === 2 ? 'border-primary' : 'border-border'}`}>
              <span className="text-sm font-medium text-primary">{year}</span>
              <h4 className="mt-2 text-lg font-semibold text-foreground">{name}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{series}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LiuAwards() {
  return (
    <section className="bg-card px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-primary">榮譽紀錄</p>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">獎項成就</h2>
        </div>
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {[
            [Trophy, '年度個人創作者獎', '2023 第5屆走鐘獎'],
            [Award, '說走就走獎', '2023 第5屆走鐘獎'],
          ].map(([Icon, title, event]) => (
            <div key={title as string} className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-background p-8 transition-colors hover:border-primary">
              <div className="absolute right-0 top-0 size-32 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative flex items-start gap-6">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="size-8 text-primary" />
                </div>
                <div>
                  <span className="mb-3 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">🏆 得獎</span>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{title as string}</h3>
                  <p className="text-muted-foreground">{event as string}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-border bg-background p-8">
          <div className="mb-6 flex items-center gap-3">
            <Star className="size-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">其他提名</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {['年度女創作者獎', '最佳烙賽獎', '最佳吉祥物獎', '最佳顏值獎'].map((nomination) => (
              <span key={nomination} className="rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">{nomination}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LiuSurvey() {
  const [selectedSeries, setSelectedSeries] = useState<string[]>([])
  const [favoriteContent, setFavoriteContent] = useState('')
  const [suggestions, setSuggestions] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const videoSeries = [
    ['challenge', '挑戰系列', '各種新奇有趣的實驗與挑戰', '古代妝容、古法料理、歷史挑戰'],
    ['history', '歷史與知識系列', '深入淺出的歷史科普內容', '冷知識、歷史故事、文化解析'],
    ['life', '生活與企劃系列', '日常生活、旅遊與特別企劃', 'Vlog、旅遊紀錄、特別合作'],
  ]
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }
  if (submitted) {
    return (
      <section id="survey" className="px-4 py-20">
        <div className="mx-auto max-w-2xl">
          <Card className="border-border bg-card">
            <CardContent className="pb-12 pt-12 text-center">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-primary/20">
                <CheckCircle2 className="size-8 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-foreground">感謝您的回饋！</h3>
              <p className="text-muted-foreground">您的意見對我們非常重要，我們會根據大家的回饋來規劃更多精彩的內容。</p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }
  return (
    <section id="survey" className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <span className="mb-4 block text-sm uppercase tracking-widest text-primary">Survey</span>
          <h2 className="mb-4 text-balance text-3xl font-semibold text-foreground md:text-4xl">觀眾問卷調查</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">想了解大家最喜歡哪種類型的影片！您的回饋將幫助我們製作更多您感興趣的內容。</p>
        </div>
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">影片系列偏好調查</CardTitle>
            <CardDescription>請花 1-2 分鐘填寫以下問卷，讓我們更了解您的喜好</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <Label className="text-base font-medium text-foreground">1. 您對以下哪些系列影片感興趣？（可多選）</Label>
                <div className="grid gap-4">
                  {videoSeries.map(([id, name, description, examples]) => (
                    <div key={id} className={`flex items-start space-x-4 rounded-lg border p-4 transition-colors ${selectedSeries.includes(id) ? 'border-primary bg-primary/5' : 'border-border bg-secondary/30 hover:border-primary/50'}`}>
                      <Checkbox
                        id={id}
                        checked={selectedSeries.includes(id)}
                        onCheckedChange={(checked) => setSelectedSeries(checked ? [...selectedSeries, id] : selectedSeries.filter((seriesId) => seriesId !== id))}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <Label htmlFor={id} className="cursor-pointer font-medium text-foreground">{name}</Label>
                        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                        <p className="mt-1 text-xs text-primary/80">例如：{examples}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <Label className="text-base font-medium text-foreground">2. 您最喜歡的影片內容類型是？</Label>
                <RadioGroup value={favoriteContent} onValueChange={setFavoriteContent} className="grid gap-3">
                  {[
                    ['experiment', '實驗與挑戰（親身體驗各種有趣的事物）'],
                    ['knowledge', '知識科普（學習歷史、文化相關知識）'],
                    ['cooking', '料理相關（古法料理、美食探索）'],
                    ['vlog', '生活 Vlog（日常生活、旅遊紀錄）'],
                    ['collab', '合作企劃（與其他創作者的合作影片）'],
                  ].map(([value, label]) => (
                    <div key={value} className="flex items-center space-x-3 rounded-lg border border-border bg-secondary/30 p-3 transition-colors hover:border-primary/50">
                      <RadioGroupItem value={value} id={value} />
                      <Label htmlFor={value} className="cursor-pointer text-foreground">{label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div className="space-y-4">
                <Label htmlFor="suggestions" className="text-base font-medium text-foreground">4. 您希望看到什麼樣的新內容？（選填）</Label>
                <Textarea id="suggestions" placeholder="例如：希望看到更多關於台灣歷史的內容、想看古代服飾挑戰..." value={suggestions} onChange={(event) => setSuggestions(event.target.value)} className="min-h-[100px] border-border bg-secondary/30 focus:border-primary" />
              </div>
              <div className="pt-4">
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={isSubmitting}>
                  {isSubmitting ? '提交中...' : '提交問卷'}
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">您的回覆將被匿名處理，僅用於改善頻道內容</p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function LiuFooter() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-2xl font-bold text-foreground">HOOK</h3>
            <p className="text-muted-foreground">把歷史、生活與實驗變成讓人停不下來的故事。</p>
          </div>
          <a href="https://www.youtube.com/@helloiamhook" target="_blank" rel="noopener noreferrer" className="flex size-10 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="YouTube">
            <Youtube className="size-5" />
          </a>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} HOOK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
