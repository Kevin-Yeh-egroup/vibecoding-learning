import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Week 2｜讓 AI 聽懂你 — 課堂引導',
  description:
    'Week 2 課堂：前言與學習目標、本週重點與投影片教材連結；從描述、對話到穩定產出與職場應用。',
}

export default function Week2Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
