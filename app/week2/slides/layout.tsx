import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Week 2｜網頁投影片',
  description:
    'Week 2 課堂投影片：從描述、對話到穩定產出，讓 AI 聽懂你的需求，並連結職場應用。',
}

export default function Week2SlidesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
