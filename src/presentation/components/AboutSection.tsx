import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import type { Profile } from '../../domain/profile/entities/Profile'
import { iconUrl } from '../../infrastructure/profile/api/profileApiClient'
import { getYearsSince } from '../../shared/utils/date'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { cn } from '../../shared/utils/cn'

interface Props {
  profile: Profile
}

export function AboutSection({ profile }: Props) {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()

  // Compute stats
  const totalMissions = profile.missions.length

  const allTechs = useMemo(() => {
    const set = new Set<string>()
    profile.missions.forEach((m) => m.technologies.forEach((tech) => set.add(tech)))
    return set.size
  }, [profile.missions])

  // First experience start date (oldest company)
  const firstDate = useMemo(() => {
    const dates = [
      ...profile.companies.map((c) => c.start_date),
      ...profile.education.map((e) => e.start_date),
    ].filter(Boolean)
    dates.sort()
    return dates[0] ?? '2018-01-01'
  }, [profile.companies, profile.education])

  const years = getYearsSince(firstDate)

  // Top recurring technologies
  const topTechs = useMemo(() => {
    const counts = new Map<string, number>()
    profile.missions.forEach((m) => m.technologies.forEach((tech) => counts.set(tech, (counts.get(tech) ?? 0) + 1)))
    return Array.from(counts.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, 12)
      .map(([tech]) => tech)
  }, [profile.missions])

  const stats = [
    { value: totalMissions, label: t('about.stats.missions') },
    { value: allTechs, label: t('about.stats.technologies') },
    { value: years, label: t('about.stats.years') },
  ]

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: text + stats */}
          <div
            className={cn(
              'transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            )}
          >
            {/* Avatar placeholder */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white text-2xl font-bold mb-8">
              AL
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4 text-base">
              {t('about.description')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-base">
              {t('about.description2')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}+</div>
                  <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: tech stack */}
          <div
            className={cn(
              'transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            )}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">
              {t('about.skills_title')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {topTechs.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
                >
                  <img
                    src={iconUrl(`/icons/technologies/${tech.toLowerCase().replace(/\s+/g, '').replace(/\./g, '').replace(/#/g, 'sharp')}.png`)}
                    alt={tech}
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <span className="text-sm font-medium text-foreground">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
