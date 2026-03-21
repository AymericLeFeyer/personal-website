import { useTranslation } from 'react-i18next'
import { ArrowDown, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

function useCount(target: number, delay = 600) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const start = setTimeout(() => {
      const steps = 50
      const interval = 1400 / steps
      let current = 0
      const timer = setInterval(() => {
        current += target / steps
        if (current >= target) { setCount(target); clearInterval(timer) }
        else setCount(Math.floor(current))
      }, interval)
      return () => clearInterval(timer)
    }, delay)
    return () => clearTimeout(start)
  }, [target, delay])
  return count
}

interface Props {
  stats: { missions: number; clients: number; years: number }
}

export function HeroSection({ stats }: Props) {
  const { t } = useTranslation()
  const missions = useCount(stats.missions)
  const clients = useCount(stats.clients)
  const years = useCount(stats.years)

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in-down">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {t('hero.badge')}
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight mb-6 animate-fade-in-up">
          {t('hero.title')}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-100">
          {t('hero.subtitle')}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 mb-10 animate-fade-in-up delay-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground tabular-nums">{missions}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{t('about.stats.missions')}</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground tabular-nums">{clients}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{t('about.stats.clients')}</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground tabular-nums">{years}+</div>
            <div className="text-xs text-muted-foreground mt-0.5">{t('about.stats.years')}</div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center animate-fade-in-up delay-200">
          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25 text-base"
          >
            <Mail size={18} />
            {t('hero.cta_contact')}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <ArrowDown size={20} className="text-muted-foreground/50" />
      </div>
    </section>
  )
}
