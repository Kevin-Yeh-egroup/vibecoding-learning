import { notFound } from 'next/navigation'
import { OriginalSubmittedPortfolio } from './original-submitted-portfolio'
import { PortfolioBackLink } from '../../portfolio-back-link'

const slugs = ['tseng-yu-chin', 'chang-ya-chu', 'chen-tzu-min', 'liu-ting-wei'] as const

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

export default async function SubmittedPortfolioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (!slugs.includes(slug as (typeof slugs)[number])) {
    notFound()
  }

  return (
    <>
      <div className="fixed left-4 top-4 z-[70]">
        <PortfolioBackLink />
      </div>
      <OriginalSubmittedPortfolio slug={slug as (typeof slugs)[number]} />
    </>
  )
}
