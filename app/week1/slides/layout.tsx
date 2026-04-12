import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Week 1｜課堂教材（網頁投影片）',
  description:
    'Week 1 學員向教材：每頁含說明敘述、重點整理；可切換精簡／完整檢視與講師備註。',
}

export default function Week1SlidesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
