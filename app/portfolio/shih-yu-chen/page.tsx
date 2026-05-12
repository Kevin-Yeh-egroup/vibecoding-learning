"use client"

import { useEffect, useRef } from "react"
import { Building2, ClipboardList, FileText, HandHeart, Heart, Instagram, Mail, MessageCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PortfolioBackLink } from "../portfolio-back-link"

const skills = [
  {
    icon: FileText,
    title: "ISP 個別化服務計畫",
    description: "支持策略與目標規劃",
  },
  {
    icon: Users,
    title: "活動設計",
    description: "生活技能與社區活動帶領",
  },
  {
    icon: Heart,
    title: "個案支持",
    description: "觀察紀錄與日常陪伴",
  },
  {
    icon: MessageCircle,
    title: "團隊合作",
    description: "與家屬及跨專業團隊合作",
  },
  {
    icon: Building2,
    title: "社區融合",
    description: "支持服務對象社區參與",
  },
  {
    icon: ClipboardList,
    title: "服務紀錄",
    description: "需求整理與紀錄撰寫",
  },
]

const experiences = [
  {
    year: "2026",
    title: "身心障礙支持服務與 ISP 規劃",
    description: "協助服務對象建立生活能力與社區適應能力。",
  },
  {
    year: "2025",
    title: "社區融合與活動設計",
    description: "規劃生活技能與互動活動。",
  },
  {
    year: "2024",
    title: "投入社會福利領域",
    description: "透過實習與服務經驗累積實務能力。",
  },
]

function useAnimateOnScroll() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return sectionRef
}

export default function ShihYuChenPortfolioPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#faf7f2] text-[#3f362d]">
      <div className="fixed left-4 top-4 z-[70]">
        <PortfolioBackLink className="border-[#d8c8b2] bg-[#fffaf3]/90 text-[#5f5448] hover:bg-white hover:text-[#3f362d]" />
      </div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <PhilosophySection />
      <PortfolioFooter />
    </main>
  )
}

function HeroSection() {
  const sectionRef = useAnimateOnScroll()

  return (
    <section ref={sectionRef} className="relative flex min-h-[calc(100vh-2rem)] items-center justify-center overflow-hidden px-5 py-16 sm:px-6 md:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#faf7f2] via-[#f5f0e8] to-[#ede6db]" />
      <div className="absolute right-[-6rem] top-12 -z-10 h-80 w-80 rounded-full bg-[#d4c4b0]/25 blur-3xl md:right-20 md:h-96 md:w-96" />
      <div className="absolute bottom-10 left-[-5rem] -z-10 h-72 w-72 rounded-full bg-[#e8ddd0]/45 blur-3xl md:left-20 md:h-80 md:w-80" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="animate-on-scroll space-y-8 duration-700">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8a7b68]">Social Worker · Community Support</p>

            <div className="space-y-4">
              <h1 className="text-4xl font-medium leading-tight text-[#3f362d] md:text-5xl lg:text-6xl">
                哈囉，我是 <span className="text-[#8b6f47]">施妤臻</span>
              </h1>
              <p className="text-xl font-light text-[#6f6252] md:text-2xl">社工師 / 身心障礙支持服務工作者</p>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#5f5448] md:text-lg">
              畢業於東海大學社會工作學系，受過完整的專業訓練，也具備助人工作的熱忱。目前服務於大肚好日子身障日照中心，在服務經驗中，學會以尊重與理解為出發點，觀察不同個案的需求與狀態，並保持穩定與耐心的態度面對每一位服務對象。
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full bg-[#8b6f47] px-8 text-white shadow-lg shadow-[#8b6f47]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#745b39] hover:shadow-xl hover:shadow-[#8b6f47]/30" asChild>
                <a href="#about">認識我</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-[#bca98d] bg-white/40 px-8 text-[#4f4337] transition-all duration-300 hover:border-[#8b6f47] hover:bg-white/70 hover:text-[#3f362d]" asChild>
                <a href="#skills">專業能力</a>
              </Button>
            </div>
          </div>

          <div className="animate-on-scroll flex justify-center duration-700 delay-200 lg:justify-end">
            <div className="relative w-full max-w-[22rem]">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/55 p-5 shadow-2xl shadow-[#8b6f47]/10 backdrop-blur-sm">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#e7d8c3] via-[#f8f2ea] to-[#cdb99d] p-6">
                  <div className="flex h-full flex-col items-center justify-center rounded-[1.25rem] border border-white/55 bg-white/45 text-center shadow-inner">
                    <div className="mb-5 grid h-28 w-28 place-items-center rounded-full bg-[#8b6f47]/15 text-[#8b6f47] shadow-sm">
                      <HandHeart className="h-14 w-14" />
                    </div>
                    <p className="text-2xl font-semibold text-[#3f362d]">Yuyu</p>
                    <p className="mt-2 max-w-48 text-sm leading-6 text-[#6f6252]">溫柔而穩定的支持者</p>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-medium text-[#6f6252]">
                  <span className="rounded-full bg-[#efe4d4] px-3 py-2">陪伴</span>
                  <span className="rounded-full bg-[#efe4d4] px-3 py-2">理解</span>
                  <span className="rounded-full bg-[#efe4d4] px-3 py-2">支持</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 -z-10 h-24 w-24 rounded-2xl border border-[#d4c4b0]/30 bg-[#d4c4b0]/20 backdrop-blur-sm" />
              <div className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full border border-white/30 bg-[#e8ddd0]/50 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  const sectionRef = useAnimateOnScroll()

  return (
    <section id="about" ref={sectionRef} className="px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="animate-on-scroll rounded-3xl border border-white/70 bg-white/65 p-7 shadow-xl shadow-[#8b6f47]/5 backdrop-blur-sm duration-700 md:p-12 lg:p-16">
          <h2 className="mb-8 text-balance font-serif text-2xl leading-relaxed text-[#3f362d] md:text-3xl lg:text-4xl">
            好的支持，是陪伴每個人
            <br className="hidden md:block" />
            用自己的步調<span className="text-[#8b6f47]">成長</span>。
          </h2>

          <div className="space-y-6 text-base leading-8 text-[#5f5448] md:text-lg">
            <p>求學期間，透過課程與實習累積社會工作理論與實務基礎，培養同理傾聽、評估判斷與資源連結等能力，逐漸確立了以助人為職志的方向。</p>
            <p>對我而言，社會工作的核心是「以人為本」：不僅是協助者，更是陪伴與支持的角色。我喜歡將複雜需求轉化成具體且可逐步完成的小目標，從每一次經驗中持續反思與成長。</p>
            <p className="font-medium text-[#3f362d]">期待在助人的路上持續深耕，用專業與溫度，陪伴更多人找到前進的力量。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const sectionRef = useAnimateOnScroll()

  return (
    <section id="skills" ref={sectionRef} className="bg-gradient-to-b from-transparent via-[#eee2d2]/70 to-transparent px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="animate-on-scroll mb-16 text-center duration-700">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8a7b68]">Professional Skills</p>
          <h2 className="font-serif text-3xl text-[#3f362d] md:text-4xl lg:text-5xl">專業能力</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div key={skill.title} className="animate-on-scroll group duration-700" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="h-full rounded-2xl border border-white/70 bg-white/65 p-7 shadow-lg shadow-[#8b6f47]/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/85 hover:shadow-xl hover:shadow-[#8b6f47]/10 md:p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8b6f47]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#8b6f47]/20">
                  <skill.icon className="h-7 w-7 text-[#8b6f47]" />
                </div>
                <h3 className="mb-3 text-xl font-medium text-[#3f362d]">{skill.title}</h3>
                <p className="leading-relaxed text-[#6f6252]">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  const sectionRef = useAnimateOnScroll()

  return (
    <section id="experience" ref={sectionRef} className="px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="animate-on-scroll mb-16 text-center duration-700">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8a7b68]">Experience</p>
          <h2 className="font-serif text-3xl text-[#3f362d] md:text-4xl lg:text-5xl">經歷與成長</h2>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-[#8b6f47]/30 via-[#8b6f47]/20 to-transparent sm:left-8 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.year} className="animate-on-scroll relative duration-700" style={{ animationDelay: `${index * 150}ms` }}>
                <div className={`flex items-start gap-8 md:gap-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-6 z-10 mt-2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#8b6f47] shadow-lg shadow-[#8b6f47]/30 sm:left-8 md:left-1/2" />
                  <div className={`hidden w-1/2 md:block ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <span className="text-4xl font-light text-[#8b6f47]/70">{exp.year}</span>
                  </div>
                  <div className={`ml-12 min-w-0 sm:ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <span className="mb-2 block text-2xl font-light text-[#8b6f47]/70 md:hidden">{exp.year}</span>
                    <div className="rounded-2xl border border-white/70 bg-white/65 p-6 shadow-lg shadow-[#8b6f47]/5 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#8b6f47]/10">
                      <h3 className="mb-3 text-xl font-medium text-[#3f362d]">{exp.title}</h3>
                      <p className="leading-relaxed text-[#6f6252]">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhilosophySection() {
  const sectionRef = useAnimateOnScroll()

  return (
    <section ref={sectionRef} className="relative overflow-hidden px-5 py-20 sm:px-6 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f5ede3] via-[#ebe3d7] to-[#f0e8dc]" />
      <div className="absolute left-[-5rem] top-1/2 -z-10 h-80 w-80 rounded-full bg-[#d4c4b0]/20 blur-3xl md:left-1/4 md:h-96 md:w-96" />
      <div className="absolute bottom-1/4 right-[-5rem] -z-10 h-72 w-72 rounded-full bg-[#e8ddd0]/35 blur-3xl md:right-1/4 md:h-80 md:w-80" />

      <div className="mx-auto max-w-4xl text-center">
        <div className="animate-on-scroll duration-700">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8a7b68]">Service Philosophy</p>
          <h2 className="mb-8 text-balance font-serif text-3xl text-[#3f362d] md:text-4xl lg:text-5xl">
            服務不只是協助，
            <br className="hidden sm:block" />
            而是<span className="text-[#8b6f47]">一起走一段路</span>。
          </h2>
        </div>

        <div className="animate-on-scroll mx-auto max-w-3xl space-y-6 text-base leading-8 text-[#5f5448] duration-700 delay-200 md:text-lg">
          <p>未來，我希望能持續深化身心障礙服務與社區支持的專業，探索更多元的支持模式與資源連結方式，並累積跨領域合作的經驗。</p>
          <p className="text-xl font-medium text-[#3f362d]">看見需求、給予回應，在每一個日常裡創造改變的可能。</p>
        </div>
      </div>
    </section>
  )
}

function PortfolioFooter() {
  const sectionRef = useAnimateOnScroll()

  return (
    <footer ref={sectionRef} className="border-t border-[#d8c8b2] px-5 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="animate-on-scroll space-y-8 duration-700">
          <div className="space-y-4">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#5f5448] md:text-lg">穩定而真誠的陪伴，本身就是一種力量。</p>
            <p className="mx-auto max-w-2xl leading-relaxed text-[#6f6252]">讓我們一起在屬於自己的步調裡，慢慢累積前行的勇氣。</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" className="gap-2 rounded-full border-[#bca98d] bg-white/40 px-8 text-[#4f4337] transition-all duration-300 hover:border-[#8b6f47] hover:bg-white/70 hover:text-[#3f362d]" asChild>
              <a href="mailto:yuyu@example.com">
                <Mail className="h-5 w-5" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 rounded-full border-[#bca98d] bg-white/40 px-8 text-[#4f4337] transition-all duration-300 hover:border-[#8b6f47] hover:bg-white/70 hover:text-[#3f362d]" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </Button>
          </div>

          <p className="pt-8 text-sm text-[#8a7b68]">© {new Date().getFullYear()} Yuyu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
