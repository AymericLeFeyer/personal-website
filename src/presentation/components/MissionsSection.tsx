import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ExternalLink, Calendar } from 'lucide-react'
import type { Mission } from '../../domain/profile/entities/Profile'
import { iconUrl } from '../../infrastructure/profile/api/profileApiClient'
import { formatRange } from '../../shared/utils/date'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { cn } from '../../shared/utils/cn'

interface Props {
  missions: Mission[]
}

const INITIAL_COUNT = 6

export function MissionsSection({ missions }: Props) {
  const { t, i18n } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()
  const [filter, setFilter] = useState<'all' | 'side_project' | 'pro'>('all')
  const [techFilter, setTechFilter] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const locale = i18n.language.startsWith('en') ? 'en-GB' : 'fr-FR'
  const presentLabel = t('missions.present')

  // Sorted by most recent
  const sorted = useMemo(
    () => [...missions].sort((a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime()),
    [missions]
  )

  // Top technologies (appear in >= 2 missions)
  const topTechs = useMemo(() => {
    const counts = new Map<string, number>()
    sorted.forEach((m) => m.technologies.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)))
    return Array.from(counts.entries())
      .filter(([, count]) => count >= 2)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 6)
      .map(([tech]) => tech)
  }, [sorted])

  const filtered = useMemo(() => {
    return sorted.filter((m) => {
      if (filter === 'side_project' && !m.is_side_project) return false
      if (filter === 'pro' && m.is_side_project) return false
      if (techFilter && !m.technologies.includes(techFilter)) return false
      return true
    })
  }, [sorted, filter, techFilter])

  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_COUNT)

  return (
    <section
      id="missions"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-4 sm:px-6 bg-surface"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={cn(
            'text-center mb-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('missions.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('missions.subtitle')}
          </p>
        </div>

        {/* Filters */}
        <div
          className={cn(
            'flex flex-wrap gap-2 mb-8 justify-center transition-all duration-700 delay-100',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {(['all', 'side_project', 'pro'] as const).map((f) => (
            <button
              key={f}
              onClick={() => { setFilter(f); setTechFilter(null) }}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                filter === f && techFilter === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40'
              )}
            >
              {t(`missions.filters.${f}`)}
            </button>
          ))}
          <div className="w-full h-0" />
          {topTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setTechFilter(techFilter === tech ? null : tech)}
              className={cn(
                'px-3 py-1.5 rounded-full text-xs font-medium transition-all border',
                techFilter === tech
                  ? 'bg-primary/20 border-primary/50 text-primary'
                  : 'bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/40'
              )}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((mission, index) => (
            <MissionCard
              key={`${mission.title}-${mission.start_date}`}
              mission={mission}
              locale={locale}
              presentLabel={presentLabel}
              linkLabel={t('missions.link')}
              badgeLabel={t('missions.badge_side_project')}
              isVisible={isVisible}
              delay={index * 60}
            />
          ))}
        </div>

        {/* Show more/less */}
        {filtered.length > INITIAL_COUNT && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 border border-border text-sm font-medium rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            >
              {showAll ? t('missions.see_less') : t('missions.see_more')}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

interface MissionCardProps {
  mission: Mission
  locale: string
  presentLabel: string
  linkLabel: string
  badgeLabel: string
  isVisible: boolean
  delay: number
}

function MissionCard({
  mission,
  locale,
  presentLabel,
  linkLabel,
  badgeLabel,
  isVisible,
  delay,
}: MissionCardProps) {
  const range = formatRange(mission.start_date, mission.end_date, locale, presentLabel)

  return (
    <article
      className={cn(
        'group flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-500 hover:-translate-y-1',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <img
            src={iconUrl(`/icons/companies/${mission.company.toLowerCase().replace(/\s+/g, '')}.png`)}
            alt={mission.company}
            className="w-8 h-8 rounded-lg object-contain bg-muted p-1"
            onError={(e) => {
              const target = e.currentTarget
              target.style.display = 'none'
            }}
          />
          <span className="text-xs text-muted-foreground font-medium">{mission.company}</span>
        </div>
        {mission.is_side_project && (
          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
            {badgeLabel}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
        {mission.title}
      </h3>

      {/* Context */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1 line-clamp-3">
        {mission.context}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {mission.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
          >
            <img
              src={iconUrl(`/icons/technologies/${tech.toLowerCase().replace(/\s+/g, '').replace(/\./g, '').replace(/#/g, 'sharp')}.png`)}
              alt={tech}
              className="w-3 h-3 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            {tech}
          </span>
        ))}
        {mission.technologies.length > 5 && (
          <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
            +{mission.technologies.length - 5}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar size={12} />
          {range}
        </div>
        {mission.link && (
          <a
            href={mission.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            {linkLabel}
            <ExternalLink size={12} />
          </a>
        )}
      </div>
    </article>
  )
}
