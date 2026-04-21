import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Week 2｜回家作業',
  description:
    '於 2026/4/30 前繳交優化後的專案資料夾壓縮檔給 Kevin。',
}

export default function Week2HomeworkLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
