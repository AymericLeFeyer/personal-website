import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ExternalLink, Calendar, CheckSquare, Briefcase, Rocket } from 'lucide-react'
import type { Mission } from '../../domain/profile/entities/Profile'
import { formatRange } from '../../shared/utils/date'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { cn } from '../../shared/utils/cn'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from './ui/dialog'

interface Props {
  missions: Mission[]
  techMap: Map<string, string>
  companyMap: Map<string, string>
}

const INITIAL_COUNT = 6

export function MissionsSection({ missions, techMap, companyMap }: Props) {
  const { t, i18n } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()
  const [filter, setFilter] = useState<'pro' | 'side_project'>('pro')
  const [techFilter, setTechFilter] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)
  const [selected, setSelected] = useState<Mission | null>(null)

  const locale = i18n.language.startsWith('en') ? 'en-GB' : 'fr-FR'
  const presentLabel = t('missions.present')

  const sorted = useMemo(
    () => [...missions].sort((a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime()),
    [missions]
  )

  const topTechs = ['Flutter', 'React', 'Kotlin']

  const filtered = useMemo(() => {
    return sorted.filter((m) => {
      // Si un filtre techno est actif, on ignore pro/perso et on montre tout
      if (techFilter) return m.technologies.some((t) => t.name === techFilter)
      if (filter === 'side_project' && !m.is_side_project) return false
      if (filter === 'pro' && m.is_side_project) return false
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
        <div className={cn('text-center mb-12 transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t('missions.title')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('missions.subtitle')}</p>
        </div>

        {/* Filters */}
        <div className={cn('flex flex-wrap gap-2 mb-8 justify-center transition-all duration-700 delay-100', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          {([
            { key: 'pro', icon: Briefcase },
            { key: 'side_project', icon: Rocket },
          ] as const).map(({ key, icon: Icon }) => (
            <button
              key={key}
              onClick={() => { setFilter(key); setTechFilter(null) }}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
                filter === key && !techFilter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40'
              )}
            >
              <Icon size={14} />
              {t(`missions.filters.${key}`)}
            </button>
          ))}
          <div className="w-full h-0" />
          {topTechs.map((tech) => {
            const iconSrc = techMap.get(tech)
            return (
              <button
                key={tech}
                onClick={() => setTechFilter(techFilter === tech ? null : tech)}
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all border',
                  techFilter === tech
                    ? 'bg-primary/20 border-primary/50 text-primary'
                    : 'bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/40'
                )}
              >
                {iconSrc && (
                  <img src={iconSrc} alt={tech} className="w-3.5 h-3.5 object-contain" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                )}
                {tech}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((mission, index) => (
            <MissionCard
              key={`${mission.title}-${mission.start_date}`}
              mission={mission}
              locale={locale}
              presentLabel={presentLabel}
              badgeLabel={t('missions.badge_side_project')}
              isVisible={isVisible}
              delay={index * 60}
              techMap={techMap}
              companyMap={companyMap}
              onClick={() => setSelected(mission)}
            />
          ))}
        </div>

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

      {/* Mission detail modal */}
      <Dialog open={!!selected} onOpenChange={(open) => { if (!open) setSelected(null) }}>
        {selected && (
          <MissionModal
            mission={selected}
            locale={locale}
            presentLabel={presentLabel}
            techMap={techMap}
            companyMap={companyMap}
            badgeLabel={t('missions.badge_side_project')}
          />
        )}
      </Dialog>
    </section>
  )
}

/* ── Card ──────────────────────────────────────────────────── */

interface MissionCardProps {
  mission: Mission
  locale: string
  presentLabel: string
  badgeLabel: string
  isVisible: boolean
  delay: number
  techMap: Map<string, string>
  companyMap: Map<string, string>
  onClick: () => void
}

function MissionCard({ mission, locale, presentLabel, badgeLabel, isVisible, delay, techMap, companyMap, onClick }: MissionCardProps) {
  const range = formatRange(mission.start_date, mission.end_date, locale, presentLabel)
  const sortedTechs = [...mission.technologies].sort((a, b) => b.frequency - a.frequency)
  const top3Techs = sortedTechs.slice(0, 3)
  const companyIcon = companyMap.get(mission.company)

  return (
    <article
      onClick={onClick}
      className={cn(
        'group flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 cursor-pointer',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          {companyIcon && (
            <img src={companyIcon} alt={mission.company} className="w-8 h-8 rounded-lg object-contain bg-muted p-1 shrink-0" />
          )}
          <span className="text-xs text-muted-foreground font-medium">{mission.company}</span>
        </div>
        {mission.is_side_project && (
          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
            {badgeLabel}
          </span>
        )}
      </div>

      {/* Title + link icon */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-base font-semibold text-foreground leading-snug">{mission.title}</h3>
        {mission.link && (
          <a
            href={mission.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="shrink-0 mt-0.5 p-1 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      {/* Context */}
      <p
        className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1 overflow-hidden"
        style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 4 }}
      >
        {mission.context}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex items-center gap-1.5">
          {top3Techs.map((tech) => {
            const iconSrc = techMap.get(tech.name)
            if (!iconSrc) return null
            return (
              <div key={tech.name} className="relative group/tooltip">
                <img src={iconSrc} alt={tech.name} className="w-5 h-5 object-contain" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 text-xs rounded-md bg-foreground text-background whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-10">
                  {tech.name}
                </span>
              </div>
            )
          })}
          {mission.technologies.length > 3 && (
            <span className="text-xs text-muted-foreground">+{mission.technologies.length - 3}</span>
          )}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar size={12} />
          {range}
        </div>
      </div>
    </article>
  )
}

/* ── Modal ─────────────────────────────────────────────────── */

interface MissionModalProps {
  mission: Mission
  locale: string
  presentLabel: string
  badgeLabel: string
  techMap: Map<string, string>
  companyMap: Map<string, string>
}

function MissionModal({ mission, locale, presentLabel, badgeLabel, techMap, companyMap }: MissionModalProps) {
  const range = formatRange(mission.start_date, mission.end_date, locale, presentLabel)
  const sortedTechs = [...mission.technologies].sort((a, b) => b.frequency - a.frequency)
  const companyIcon = companyMap.get(mission.company)

  return (
    <DialogContent>
      {/* Header */}
      <div className="flex items-start gap-4 mb-6 pr-6">
        {companyIcon && (
          <img src={companyIcon} alt={mission.company} className="w-12 h-12 rounded-xl object-contain bg-muted p-1.5 shrink-0" />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-muted-foreground font-medium">{mission.company}</span>
            {mission.is_side_project && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{badgeLabel}</span>
            )}
          </div>
          <DialogTitle>{mission.title}</DialogTitle>
          <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
            <Calendar size={12} />
            {range}
          </div>
        </div>
      </div>

      {/* Context */}
      <DialogDescription className="text-sm leading-relaxed mb-6 text-foreground/80">
        {mission.context}
      </DialogDescription>

      {/* Technologies */}
      {sortedTechs.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {sortedTechs.map((tech) => {
              const iconSrc = techMap.get(tech.name)
              return (
                <span key={tech.name} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-sm text-foreground border border-border">
                  {iconSrc && (
                    <img src={iconSrc} alt={tech.name} className="w-4 h-4 object-contain" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                  )}
                  {tech.name}
                </span>
              )
            })}
          </div>
        </div>
      )}

      {/* Tasks */}
      {mission.tasks.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Missions réalisées</h4>
          <ul className="space-y-2">
            {mission.tasks.map((task, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckSquare size={14} className="text-primary mt-0.5 shrink-0" />
                {task}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Link */}
      {mission.link && (
        <a
          href={mission.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors"
        >
          Voir le projet
          <ExternalLink size={14} />
        </a>
      )}
    </DialogContent>
  )
}
