"use client"

import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { BookOpen, Gamepad2, Heart, History, Home, MessageSquare, PiggyBank, Sparkles, User, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { PortfolioBackLink } from '../portfolio-back-link'

type Scenario = 'book' | 'game' | 'finance' | 'emotion'
type AgeGroup = '3-5' | '6-8' | '9-12'
type Goal = 'dialogue' | 'habit' | 'money' | 'emotion'
type ParentStyle = 'gentle' | 'playful' | 'thoughtful'

const scenarios = [
  { id: 'book', label: '繪本共讀', description: '從故事開啟親子對話', icon: BookOpen, emoji: '📖' },
  { id: 'game', label: '生活遊戲', description: '把日常變成互動練習', icon: Gamepad2, emoji: '🎲' },
  { id: 'finance', label: '財務主題', description: '用生活情境建立金錢觀', icon: PiggyBank, emoji: '💰' },
  { id: 'emotion', label: '情緒與關係', description: '陪孩子辨識並表達感受', icon: Heart, emoji: '❤️' },
] satisfies { id: Scenario; label: string; description: string; icon: typeof BookOpen; emoji: string }[]

const ageGroups = [
  { id: '3-5', label: '3–5 歲', emoji: '👶' },
  { id: '6-8', label: '6–8 歲', emoji: '🧒' },
  { id: '9-12', label: '9–12 歲', emoji: '👦' },
] satisfies { id: AgeGroup; label: string; emoji: string }[]

const goals = [
  { id: 'dialogue', label: '增加親子對話', emoji: '💬' },
  { id: 'habit', label: '建立生活習慣', emoji: '🌟' },
  { id: 'money', label: '學習金錢觀念', emoji: '💰' },
  { id: 'emotion', label: '表達情緒', emoji: '🎭' },
] satisfies { id: Goal; label: string; emoji: string }[]

const styles = [
  { id: 'gentle', label: '溫柔陪伴型', description: '用溫暖的語氣陪伴孩子', emoji: '🤗' },
  { id: 'playful', label: '活潑互動型', description: '充滿活力的互動方式', emoji: '🎉' },
  { id: 'thoughtful', label: '引導思考型', description: '引導孩子獨立思考', emoji: '💡' },
] satisfies { id: ParentStyle; label: string; description: string; emoji: string }[]

const scenarioCopy = {
  book: {
    opening: '寶貝，我們一起來看這本書好嗎？我想聽聽你的想法。',
    activity: '角色扮演：和孩子一起扮演故事中的角色，用不同聲音說出角色的台詞。',
  },
  game: {
    opening: '我們來玩一個好玩的遊戲，邊玩邊聊天！',
    activity: '發明遊戲：一起設計一個新規則，讓孩子當小老師教你玩。',
  },
  finance: {
    opening: '我們來聊聊關於錢的事，學習做聰明的選擇。',
    activity: '夢想存錢罐：一起設定存錢目標，分成「存、花、分享」三格。',
  },
  emotion: {
    opening: '我們來聊聊心情的事，我想聽聽你的感覺。',
    activity: '心情彩虹：用不同顏色代表不同心情，畫出今天的心情。',
  },
} satisfies Record<Scenario, { opening: string; activity: string }>

const goalQuestions = {
  dialogue: ['你覺得主角現在是什麼感覺？', '如果是你，你會怎麼做？', '這讓你想到生活中的哪件事？'],
  habit: ['這個習慣為什麼重要？', '如果今天先做一小步，可以做什麼？', '你想用什麼方式提醒自己？'],
  money: ['這是「想要」還是「需要」？', '如果只有 100 元，你會怎麼分配？', '等待想買的東西時，可以怎麼鼓勵自己？'],
  emotion: ['你今天的心情像什麼顏色？', '這個感覺出現在身體哪裡？', '心情不舒服時，什麼方式會讓你好一點？'],
} satisfies Record<Goal, string[]>

const professionalTips = [
  '孩子是否有主動表達想法或感受？',
  '家長是否有適時回應孩子的話，而非急著糾正？',
  '互動是否呈現雙向對話，而非單向指導？',
  '孩子的表情、語氣與肢體反應透露了什麼？',
]

export default function HsiehYiChunPortfolioPage() {
  const [scenario, setScenario] = useState<Scenario>('book')
  const [ageGroup, setAgeGroup] = useState<AgeGroup>('3-5')
  const [goal, setGoal] = useState<Goal>('dialogue')
  const [parentStyle, setParentStyle] = useState<ParentStyle>('gentle')
  const [professionalMode, setProfessionalMode] = useState(false)
  const [generated, setGenerated] = useState(false)

  const guide = useMemo(() => {
    const styleLabel = styles.find((style) => style.id === parentStyle)?.label
    const ageLabel = ageGroups.find((age) => age.id === ageGroup)?.label
    return {
      opening: scenarioCopy[scenario].opening,
      questions: goalQuestions[goal],
      activity: scenarioCopy[scenario].activity,
      closing: `用${styleLabel}的方式收尾：謝謝你願意分享，今天我們一起完成了很棒的互動。`,
      summary: `${ageLabel}｜${scenarios.find((item) => item.id === scenario)?.label}｜${goals.find((item) => item.id === goal)?.label}`,
    }
  }, [ageGroup, goal, parentStyle, scenario])

  return (
    <main className="min-h-screen bg-[#fff8fb] text-[#3e2c34]">
      <div className="fixed left-4 top-4 z-[70]">
        <PortfolioBackLink className="border-pink-100 bg-white/85 text-pink-600 hover:text-pink-800" />
      </div>

      <header className="sticky top-0 z-40 border-b border-pink-100 bg-[#fff8fb]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-4 px-6 py-4">
          <div className="hidden items-center gap-2 text-sm text-[#7b6470] sm:flex">
            <History className="h-4 w-4" />
            歷史紀錄示意
          </div>
          <div className="flex items-center gap-2">
            <Switch checked={professionalMode} onCheckedChange={setProfessionalMode} id="professional-mode" />
            <label htmlFor="professional-mode" className="cursor-pointer text-sm text-[#7b6470]">
              專業人員模式
            </label>
          </div>
        </div>
      </header>

      <section className="px-6 py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-8 grid h-24 w-24 place-items-center rounded-[2rem] bg-gradient-to-br from-pink-300 to-violet-200 text-white shadow-lg">
            <Users className="h-12 w-12" />
          </div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">Parent-Child Interactive Tool</p>
          <h1 className="text-balance text-4xl font-bold md:text-6xl">親子共讀 × 互動遊戲引導工具</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#7b6470] md:text-xl">
            不只是念故事，而是一起對話、一起玩。依照情境、孩子年齡與互動目標，快速生成適合家長或專業人員使用的引導內容。
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-pink-100 bg-white/80 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-pink-500" />
                選擇互動條件
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <OptionGroup title="1. 選擇情境">
                {scenarios.map((item) => (
                  <OptionButton key={item.id} selected={scenario === item.id} onClick={() => setScenario(item.id)}>
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </OptionButton>
                ))}
              </OptionGroup>

              <OptionGroup title="2. 孩子年齡">
                {ageGroups.map((item) => (
                  <OptionButton key={item.id} selected={ageGroup === item.id} onClick={() => setAgeGroup(item.id)}>
                    <span>{item.emoji}</span>
                    <span>{item.label}</span>
                  </OptionButton>
                ))}
              </OptionGroup>

              <OptionGroup title="3. 互動目標">
                {goals.map((item) => (
                  <OptionButton key={item.id} selected={goal === item.id} onClick={() => setGoal(item.id)}>
                    <span>{item.emoji}</span>
                    <span>{item.label}</span>
                  </OptionButton>
                ))}
              </OptionGroup>

              <OptionGroup title="4. 引導風格">
                {styles.map((item) => (
                  <OptionButton key={item.id} selected={parentStyle === item.id} onClick={() => setParentStyle(item.id)}>
                    <span>{item.emoji}</span>
                    <span>{item.label}</span>
                  </OptionButton>
                ))}
              </OptionGroup>

              <Button className="w-full rounded-full bg-pink-500 py-6 text-base font-semibold text-white hover:bg-pink-600" onClick={() => setGenerated(true)}>
                生成互動引導
              </Button>
            </CardContent>
          </Card>

          <Card className="border-pink-100 bg-white/80 shadow-sm">
            <CardHeader>
              <CardTitle>{generated ? '互動引導結果' : '工具預覽'}</CardTitle>
              <p className="text-sm text-[#7b6470]">{guide.summary}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <GuideBlock label="開場白" content={generated ? guide.opening : '選好條件後，點擊「生成互動引導」即可產生開場白、互動問題與延伸活動。'} />

              <div>
                <p className="mb-3 text-sm font-semibold text-pink-500">互動問題</p>
                <div className="space-y-3">
                  {(generated ? guide.questions : ['問題會依照你的情境與目標出現', '可用來延伸親子對話', '也能作為專業人員觀察參考']).map((question, index) => (
                    <div key={question} className="rounded-2xl bg-pink-50 p-4 text-sm leading-relaxed text-[#604b57]">
                      <span className="mr-2 font-bold text-pink-500">{index + 1}.</span>
                      {question}
                    </div>
                  ))}
                </div>
              </div>

              <GuideBlock label="延伸活動" content={generated ? guide.activity : '生成後會提供一個可在家中或團體中操作的延伸活動。'} />
              <GuideBlock label="收尾語" content={generated ? guide.closing : '協助家長用溫和的方式結束互動。'} />

              {professionalMode ? (
                <div className="rounded-3xl border border-violet-100 bg-violet-50 p-5">
                  <p className="mb-3 text-sm font-semibold text-violet-600">專業人員觀察提醒</p>
                  <ul className="space-y-2 text-sm leading-relaxed text-[#604b57]">
                    {professionalTips.map((tip) => (
                      <li key={tip} className="flex gap-2">
                        <span className="text-violet-500">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </CardContent>
          </Card>
        </div>
      </section>

      <FamilyFinanceToolSection />
    </main>
  )
}

function FamilyFinanceToolSection() {
  const [role, setRole] = useState<'home' | 'child' | 'parent'>('home')
  const [amount, setAmount] = useState('120')
  const [item, setItem] = useState('文具組')
  const [emotion, setEmotion] = useState('開心')
  const [category, setCategory] = useState('學習用品')
  const [records, setRecords] = useState<
    {
      id: number
      item: string
      amount: string
      emotion: string
      category: string
      summary: string
    }[]
  >([])

  const saveRecord = () => {
    const summary = `孩子花了 ${amount} 元購買「${item}」，分類為${category}，當下感受是${emotion}。`
    setRecords((previous) => [{ id: Date.now(), item, amount, emotion, category, summary }, ...previous])
    setRole('parent')
  }

  return (
    <section className="bg-[#f3fbf7] px-6 py-20 text-[#263b34] md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-[2rem] bg-emerald-100 text-emerald-700 shadow-sm">
            <PiggyBank className="h-10 w-10" />
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">作品二</p>
          <h2 className="text-balance text-3xl font-bold md:text-5xl">家庭金錢對話工具</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-900/70">
            讓孩子記錄消費、表達情緒，家長再透過對話紀錄理解孩子的金錢選擇與需求。
          </p>
        </div>

        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          {[
            ['home', '首頁', Home],
            ['child', '孩子紀錄', User],
            ['parent', '家長頁', Users],
          ].map(([value, label, Icon]) => (
            <button
              key={value as string}
              type="button"
              onClick={() => setRole(value as 'home' | 'child' | 'parent')}
              className={`flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors ${
                role === value ? 'border-emerald-300 bg-emerald-100 text-emerald-800' : 'border-emerald-100 bg-white text-emerald-900/70 hover:bg-emerald-50'
              }`}
            >
              <Icon className="h-5 w-5" />
              {label as string}
            </button>
          ))}
        </div>

        <Card className="border-emerald-100 bg-white/90 shadow-sm">
          {role === 'home' ? (
            <CardContent className="grid gap-8 p-8 md:grid-cols-[0.9fr_1.1fr] md:p-10">
              <div>
                <h3 className="mb-4 text-2xl font-bold">選擇角色開始使用</h3>
                <p className="mb-6 leading-8 text-emerald-900/70">
                  孩子可以記錄買了什麼、花了多少錢與當下感受；家長可以從紀錄中看見孩子的消費脈絡，延伸成不說教的金錢對話。
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="rounded-full bg-emerald-600 text-white hover:bg-emerald-700" onClick={() => setRole('child')}>
                    我是孩子
                  </Button>
                  <Button variant="outline" className="rounded-full border-emerald-200 text-emerald-700 hover:bg-emerald-50" onClick={() => setRole('parent')}>
                    我是家長
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ['記錄消費', '金額、品項與分類'],
                  ['感受表達', '把花錢當下的心情說出來'],
                  ['親子對話', '產生可回顧的討論紀錄'],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-2xl bg-emerald-50 p-5">
                    <h4 className="mb-2 font-semibold text-emerald-800">{title}</h4>
                    <p className="text-sm leading-6 text-emerald-900/65">{description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          ) : null}

          {role === 'child' ? (
            <CardContent className="p-8 md:p-10">
              <h3 className="mb-2 text-2xl font-bold">孩子消費紀錄</h3>
              <p className="mb-8 text-emerald-900/70">試著記下這次花錢的情境，讓家長可以陪你一起討論。</p>
              <div className="grid gap-5 md:grid-cols-2">
                <FinanceInput label="花了多少錢" value={amount} onChange={setAmount} suffix="元" />
                <FinanceInput label="買了什麼" value={item} onChange={setItem} />
                <FinanceInput label="當下感覺" value={emotion} onChange={setEmotion} />
                <FinanceInput label="分類" value={category} onChange={setCategory} />
              </div>
              <Button className="mt-8 rounded-full bg-emerald-600 px-8 text-white hover:bg-emerald-700" onClick={saveRecord}>
                <MessageSquare className="mr-2 h-5 w-5" />
                儲存並產生對話
              </Button>
            </CardContent>
          ) : null}

          {role === 'parent' ? (
            <CardContent className="p-8 md:p-10">
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="mb-2 text-2xl font-bold">家長對話紀錄</h3>
                  <p className="text-emerald-900/70">從孩子的紀錄開始，練習用好奇取代責備。</p>
                </div>
                <Button variant="outline" className="rounded-full border-emerald-200 text-emerald-700 hover:bg-emerald-50" onClick={() => setRole('child')}>
                  新增孩子紀錄
                </Button>
              </div>
              <div className="space-y-4">
                {(records.length ? records : [{ id: 0, item: '文具組', amount: '120', emotion: '開心', category: '學習用品', summary: '孩子花了 120 元購買「文具組」，分類為學習用品，當下感受是開心。' }]).map((record) => (
                  <article key={record.id} className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
                    <div className="mb-3 flex flex-wrap gap-2 text-xs font-semibold text-emerald-700">
                      <span className="rounded-full bg-white px-3 py-1">{record.category}</span>
                      <span className="rounded-full bg-white px-3 py-1">{record.emotion}</span>
                      <span className="rounded-full bg-white px-3 py-1">{record.amount} 元</span>
                    </div>
                    <h4 className="mb-2 font-semibold text-emerald-950">{record.item}</h4>
                    <p className="mb-4 text-sm leading-7 text-emerald-900/70">{record.summary}</p>
                    <div className="rounded-xl bg-white p-4 text-sm leading-7 text-emerald-900/75">
                      建議開場：「我看到你買這個的時候很{record.emotion}，可以跟我說說它對你來說重要的地方嗎？」
                    </div>
                  </article>
                ))}
              </div>
            </CardContent>
          ) : null}
        </Card>
      </div>
    </section>
  )
}

function FinanceInput({ label, value, onChange, suffix }: { label: string; value: string; onChange: (value: string) => void; suffix?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-emerald-800">{label}</span>
      <div className="flex items-center rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3">
        <input value={value} onChange={(event) => onChange(event.target.value)} className="min-w-0 flex-1 bg-transparent text-emerald-950 outline-none" />
        {suffix ? <span className="text-sm text-emerald-700">{suffix}</span> : null}
      </div>
    </label>
  )
}

function OptionGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold text-[#7b6470]">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-2">{children}</div>
    </div>
  )
}

function OptionButton({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium transition-all ${
        selected ? 'border-pink-300 bg-pink-100 text-pink-700 shadow-sm' : 'border-pink-100 bg-white text-[#604b57] hover:border-pink-200 hover:bg-pink-50'
      }`}
    >
      {children}
    </button>
  )
}

function GuideBlock({ label, content }: { label: string; content: string }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-pink-500">{label}</p>
      <div className="rounded-2xl bg-pink-50 p-4 text-sm leading-relaxed text-[#604b57]">{content}</div>
    </div>
  )
}
