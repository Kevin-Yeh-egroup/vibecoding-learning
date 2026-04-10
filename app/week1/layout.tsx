import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Week 1｜個人介紹頁 — 課堂引導',
  description:
    'Week 1 課堂引導：前言、學習目標與步驟；ChatGPT 與 v0 完成個人介紹頁練習。',
}

export default function Week1Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
