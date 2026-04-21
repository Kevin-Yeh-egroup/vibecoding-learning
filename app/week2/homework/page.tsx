import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, CalendarClock, FileArchive, Send } from 'lucide-react'

export default function Week2HomeworkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(139,92,246,0.1),transparent)]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground hover:text-primary" asChild>
            <Link href="/week2">
              <ArrowLeft className="size-4" aria-hidden />
              Week 2 課堂
            </Link>
          </Button>
          <Link
            href="/"
            className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:text-sm"
          >
            課程首頁
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Week 2</p>
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-primary via-muted to-accent bg-clip-text text-transparent">
              回家作業
            </span>
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            延續課堂練習，將你優化後的專案整理繳交，方便講師檢視與回饋。
          </p>
        </div>

        <Card className="border-primary/25 bg-gradient-to-br from-primary/[0.08] to-accent/[0.06] shadow-none">
          <CardContent className="space-y-6 px-6 py-8 sm:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <CalendarClock className="size-5" aria-hidden />
              </div>
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-foreground">繳交期限</h2>
                <p className="text-base font-medium text-foreground/95">
                  請於 <time dateTime="2026-04-30">2026 年 4 月 30 日</time> 前完成繳交。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  逾時請先與 Kevin 確認是否仍可補交，以免影響回饋時程。
                </p>
              </div>
            </div>

            <div className="h-px bg-border/60" aria-hidden />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <FileArchive className="size-5" aria-hidden />
              </div>
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-foreground">繳交內容</h2>
                <p className="text-sm leading-relaxed text-foreground/90">
                  將<strong className="font-semibold text-foreground">優化後</strong>
                  的專案資料夾打包成<strong className="font-semibold text-foreground">壓縮檔</strong>
                  （建議使用 ZIP；請勿只交單一 HTML 截圖，需包含可對照的專案結構或講師指定之內容）。
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary/70">
                  <li>檔名建議包含你的識別（例如姓名或暱稱），方便對應。</li>
                  <li>打包前請確認未含敏感個資，或已改為暱稱／假資料。</li>
                </ul>
              </div>
            </div>

            <div className="h-px bg-border/60" aria-hidden />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Send className="size-5" aria-hidden />
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">繳交對象</h2>
                <p className="text-sm leading-relaxed text-foreground/90">
                  將壓縮檔提供給 <strong className="font-semibold text-foreground">Kevin</strong>。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  實際傳送方式（例如雲端連結、課程群組、電子郵件等），上述方式都可以。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="outline" className="border-primary/30">
            <Link href="/week2">返回 Week 2 課堂引導</Link>
          </Button>
          <Button asChild variant="ghost" className="text-muted-foreground">
            <Link href="/week2/slides">開啟 Week 2 投影片</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
