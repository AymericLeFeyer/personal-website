import { useTranslation } from 'react-i18next'
import { Youtube, ExternalLink } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { cn } from '../../shared/utils/cn'

const YOUTUBE_URL = 'https://www.youtube.com/channel/UClCAe7FyrIwpkt9H56XRndA'

export function AyLabsSection() {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-4 sm:px-6 bg-surface"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={cn(
            'relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 sm:p-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-8">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
              <Youtube size={28} className="text-red-500" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-1">
                <h2 className="text-2xl font-bold text-foreground">{t('aylabs.title')}</h2>
                <span className="text-sm text-muted-foreground">{t('aylabs.subtitle')}</span>
              </div>
              <p className="text-muted-foreground mb-0 text-base">
                {t('aylabs.description')}
              </p>
            </div>

            {/* CTA */}
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all hover:scale-105 shrink-0 shadow-lg shadow-red-500/25"
            >
              {t('aylabs.cta')}
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
