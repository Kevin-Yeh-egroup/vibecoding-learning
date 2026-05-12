'use client'

import { ArrowLeft } from 'lucide-react'

export function PortfolioBackLink({ className = '' }: { className?: string }) {
  const handleClick = () => {
    if (document.referrer.startsWith(window.location.origin)) {
      window.history.back()
      return
    }

    window.location.href = '/#student-portfolios'
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-slate-950 ${className}`}
    >
      <ArrowLeft className="size-4" />
      返回學員作品集
    </button>
  )
}
