"use client"

import { useState } from 'react'
import { ArrowRight, CheckCircle2, CircleDollarSign, Clock, Compass, Eye, FileText, Heart, Home, MessageSquare, Play, Presentation, RotateCcw, Shield, Sprout, Timer, Trophy, UserCheck, Users, XCircle, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PortfolioBackLink } from '../portfolio-back-link'

const benefits = [
  ['更清楚的財務視角', '用 AI 快速整理資訊，看見平常忽略的關鍵。', Eye],
  ['更有效的判斷能力', '在有限時間內，做出更穩定的決策。', Compass],
  ['更安心的生活節奏', '降低對數字的焦慮，回到可掌握的步調。', Heart],
] as const

const modules = [
  {
    icon: Shield,
    title: '助人工作者版',
    subtitle: '提升實務評估力',
    audience: '適合社福、勞政單位之社工與行政專業人員',
    description: '運用 AI 輔助家庭經濟評估，在有限時間內更精準理解個案處境與風險，讓 AI 成為實務工作中的第二雙眼。',
  },
  {
    icon: Home,
    title: '學校・社區民眾版',
    subtitle: '掌握金流，規劃未來',
    audience: '適合學校、社區、一般民眾與團體',
    description: '透過科技工具整理收支，找出潛在財務壓力，學習防詐騙觀念、金流盤點與未來規劃。',
  },
  {
    icon: Sprout,
    title: '個案實務版',
    subtitle: '陪伴重整生活方向',
    audience: '適合由社福單位申請之高經濟壓力或負債個案',
    description: '由講師帶領，透過 AI 梳理複雜財務與債務狀況，降低數字焦慮，協助重新建立生活穩定感。',
  },
]

const infoItems = [
  ['課程時間', '2 小時', Clock],
  ['授課形式', '講師到場授課（單位申請）', Presentation],
  ['參與人數', '一般場次 20 人以上 / 社工場次 6 人以上', Users],
  ['課程費用', '免費（推廣性質）', CircleDollarSign],
] as const

const steps = [
  ['1', '填寫申請表單', FileText],
  ['2', '提供需求資訊', MessageSquare],
  ['3', '安排講師與課程', UserCheck],
] as const

const quizData = [
  {
    question: '當生活中發生突發狀況時，最健康的「緊急預備金」水位通常建議要存多少？',
    options: ['活存裡只要有 1,314 元。', '存夠一張去東京的來回機票錢。', '網銀帳戶餘額大於年齡即可。', '3 到 6 個月的日常基本生活費。'],
    correctAnswer: 3,
  },
  {
    question: '明明每個月都有記帳，卻還是不知道錢花到哪裡去，通常是因為什麼盲點？',
    options: ['因為水逆。', '沒買到精美記帳 APP。', '只有流水帳式記錄，卻沒有定期回顧與調整。', '每天呼吸的空氣太貴。'],
    correctAnswer: 2,
  },
  {
    question: '想要擺脫「精緻窮」並提升家庭財務健康度，最建議採取哪個公式？',
    options: ['收入 = 支出。', '收入 - 儲蓄 / 理財 = 支出。', '收入 + 信用卡額度 = 本月可動用資產。', '收入 - 購物車結帳 - 宵夜 = 留給命運的餘額。'],
    correctAnswer: 1,
  },
]

export default function YangYaTingPortfolioPage() {
  return (
    <main className="min-h-screen bg-[#fffaf1] text-stone-900">
      <div className="fixed left-4 top-4 z-[70]">
        <PortfolioBackLink className="border-amber-100 bg-white/85 text-amber-700 hover:text-amber-900" />
      </div>

      <section className="relative overflow-hidden px-4 pb-20 pt-28 text-center sm:px-6 md:pb-28 md:pt-36 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-orange-200/30 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">AI 實務工具分享會</p>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">好理家在・財務健檢網</h1>
          <p className="mt-6 text-pretty text-xl font-semibold text-amber-700 sm:text-2xl">讓 AI 成為你的財務助手</p>
          <p className="mt-3 text-pretty text-lg text-stone-600">看懂風險、整理方向、找回生活節奏</p>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-stone-600">
            在數位轉型的時代，財務不只是數字，而是生活的基礎。透過 AI 工具與專業引導，協助你更清晰理解財務現況，做出安心決策。
          </p>
          <div className="mt-10">
            <Button size="lg" className="rounded-full bg-amber-600 px-8 py-6 text-lg font-semibold text-white shadow-lg hover:bg-amber-700" asChild>
              <a href="#apply">
                了解申請方式
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">關於這堂課</h2>
          <div className="mt-8 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>「好理家在・財務健檢網」致力於將 AI 導入日常生活與實務工作中，讓每個人都能擁有一位看得懂數字、也理解生活的數位財務管家。</p>
            <p>本課程為 2 小時免費實務課程，由具備社工專業背景與第一線經驗的財務諮詢師親自授課，以簡單易懂的方式帶你實際操作與應用 AI 工具。</p>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">你將獲得什麼？</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {benefits.map(([title, description, Icon]) => (
              <article key={title} className="rounded-2xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                  <Icon className="h-7 w-7 text-amber-700" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">三大客製化教學模組</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {modules.map((module) => (
              <Card key={module.title} className="border-amber-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                    <module.icon className="h-6 w-6 text-amber-700" />
                  </div>
                  <CardTitle>{module.title}</CardTitle>
                  <p className="text-sm font-medium text-amber-700">{module.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-xs font-medium text-amber-700/80">{module.audience}</p>
                  <p className="text-sm leading-relaxed text-stone-600">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">課程資訊</h2>
          <div className="mt-10 space-y-4">
            {infoItems.map(([label, value, Icon]) => (
              <div key={label} className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100">
                  <Icon className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-500">{label}</p>
                  <p className="mt-0.5 font-semibold">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">申請方式</h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-600">填寫申請表單後，依據對象與需求安排合適的講師與課程內容。</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {steps.map(([number, title, Icon]) => (
              <div key={title} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-600 text-white shadow-md">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="mt-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">{number}</span>
                <p className="mt-3 font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinanceQuizSection />
    </main>
  )
}

function FinanceQuizSection() {
  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [finished, setFinished] = useState(false)

  const resetQuiz = () => {
    setStarted(true)
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setFinished(false)
  }

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(answerIndex)
    if (answerIndex === quizData[currentQuestion].correctAnswer) {
      setScore((previous) => previous + 1)
    }
  }

  const goNext = () => {
    if (currentQuestion === quizData.length - 1) {
      setFinished(true)
      return
    }

    setCurrentQuestion((previous) => previous + 1)
    setSelectedAnswer(null)
  }

  const current = quizData[currentQuestion]
  const finalScore = Math.round((score / quizData.length) * 100)

  return (
    <section className="bg-stone-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-amber-400/15 text-amber-300">
            <Zap className="h-8 w-8" />
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">作品二</p>
          <h2 className="text-3xl font-bold md:text-4xl">快問快答：財務知識大挑戰</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-stone-300">
            透過遊戲化問答，把緊急預備金、記帳盲點與收支分配觀念轉成快速理解的互動體驗。
          </p>
        </div>

        <Card className="mx-auto max-w-3xl border-white/10 bg-white/10 text-white shadow-2xl backdrop-blur">
          {!started ? (
            <CardContent className="p-8 text-center md:p-12">
              <Trophy className="mx-auto mb-5 h-14 w-14 text-amber-300" />
              <h3 className="mb-3 text-2xl font-bold">準備開始挑戰</h3>
              <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm text-stone-300">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Timer className="h-4 w-4 text-amber-300" />
                  每題快速作答
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Trophy className="h-4 w-4 text-amber-300" />
                  共 {quizData.length} 題
                </span>
              </div>
              <Button onClick={resetQuiz} className="rounded-full bg-amber-400 px-8 py-6 text-base font-semibold text-stone-950 hover:bg-amber-300">
                <Play className="mr-2 h-5 w-5" />
                開始遊戲
              </Button>
            </CardContent>
          ) : finished ? (
            <CardContent className="p-8 text-center md:p-12">
              <Trophy className="mx-auto mb-5 h-16 w-16 text-amber-300" />
              <h3 className="mb-2 text-3xl font-bold">遊戲結束！</h3>
              <p className="mb-8 text-stone-300">{finalScore >= 67 ? '太厲害了，你是財務高手！' : '繼續加油，下次會更好！'}</p>
              <div className="mx-auto mb-8 grid h-32 w-32 place-items-center rounded-full border-8 border-amber-300/40 bg-amber-300/10">
                <span className="text-3xl font-black text-amber-200">{finalScore}%</span>
              </div>
              <p className="mb-8 text-stone-300">
                答對 {score} / {quizData.length} 題
              </p>
              <Button onClick={resetQuiz} className="rounded-full bg-amber-400 px-8 py-6 text-base font-semibold text-stone-950 hover:bg-amber-300">
                <RotateCcw className="mr-2 h-5 w-5" />
                重新挑戰
              </Button>
            </CardContent>
          ) : (
            <CardContent className="p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between text-sm text-stone-300">
                <span>
                  題目 {currentQuestion + 1} / {quizData.length}
                </span>
                <span>目前得分：{score}</span>
              </div>
              <h3 className="mb-8 text-center text-xl font-semibold leading-8 md:text-2xl">{current.question}</h3>
              <div className="space-y-3">
                {current.options.map((option, index) => {
                  const isCorrect = index === current.correctAnswer
                  const isSelected = index === selectedAnswer
                  const showResult = selectedAnswer !== null

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleAnswer(index)}
                      className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-colors ${
                        showResult && isCorrect
                          ? 'border-emerald-300 bg-emerald-400/15 text-emerald-100'
                          : showResult && isSelected
                            ? 'border-red-300 bg-red-400/15 text-red-100'
                            : 'border-white/15 bg-white/10 text-white hover:border-amber-300/60 hover:bg-white/15'
                      }`}
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/10 text-sm font-bold">{String.fromCharCode(65 + index)}</span>
                      <span className="flex-1">{option}</span>
                      {showResult && isCorrect ? <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-300" /> : null}
                      {showResult && isSelected && !isCorrect ? <XCircle className="h-5 w-5 shrink-0 text-red-300" /> : null}
                    </button>
                  )
                })}
              </div>
              {selectedAnswer !== null ? (
                <div className="mt-8 text-center">
                  <Button onClick={goNext} className="rounded-full bg-amber-400 px-8 text-stone-950 hover:bg-amber-300">
                    {currentQuestion === quizData.length - 1 ? '查看結果' : '下一題'}
                  </Button>
                </div>
              ) : null}
            </CardContent>
          )}
        </Card>
      </div>
    </section>
  )
}
