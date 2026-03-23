import { useTranslation } from 'react-i18next'
import { Building2, FileText, Clock, Linkedin, Github, Mail, Youtube } from 'lucide-react'
import { SmartLink } from './ExternalLink'
import type { Profile } from '../../domain/profile/entities/Profile'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { cn } from '../../shared/utils/cn'

interface Props {
  profile: Profile
  companyMap: Map<string, string>
}

export function AboutSection({ profile, companyMap }: Props) {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()

  const personalCompany = profile.missions.find((m) => m.is_side_project)?.company
  const companyIcon = personalCompany ? companyMap.get(personalCompany) : undefined
  const { contacts } = profile

  const links = [
    { icon: FileText, label: t('about.link_cv'), href: 'https://cv.aymeric.lefeyer.fr' },
    { icon: Clock, label: 'Time Life', href: 'https://timelife.aymeric.lefeyer.fr' },
    { icon: Youtube, label: 'AyLabs', href: 'https://www.youtube.com/channel/UClCAe7FyrIwpkt9H56XRndA' },
    { icon: Linkedin, label: 'LinkedIn', href: contacts.linkedin },
    { icon: Github, label: 'GitHub', href: `https://github.com/${contacts.github}` },
  ]

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={cn('text-center mb-16 transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t('about.title')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('about.subtitle')}</p>
        </div>

        {/* Bio */}
        <div className={cn('flex gap-6 items-start max-w-4xl mx-auto mb-4 sm:mb-12 transition-all duration-700 delay-100', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          {companyIcon && (
            <img src={companyIcon} alt={personalCompany} className="shrink-0 object-contain rounded-3xl w-20 sm:w-48" />
          )}
          <div className="flex-1">
            <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-10 text-base">{t('about.description')}</p>
            <p className="hidden sm:flex gap-2 text-xs text-muted-foreground/60">
              <Building2 size={13} className="shrink-0" />
              <span className="flex flex-col gap-1">
                <span>{t('about.aycore')}</span>
                <span>{t('footer.aycore_legal')}</span>
              </span>
            </p>
          </div>
        </div>

        {/* Mentions légales — mobile only, pleine largeur */}
        <div className={cn('sm:hidden mb-8 flex gap-2 text-xs text-muted-foreground/60 transition-all duration-700 delay-150', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <Building2 size={13} className="shrink-0 mt-0.5" />
          <span className="flex flex-col gap-1">
            <span>{t('about.aycore')}</span>
            <span>{t('footer.aycore_legal')}</span>
          </span>
        </div>

        {/* Links — centered */}
        <div id="contact" className={cn('flex flex-col items-center gap-4 transition-all duration-700 delay-200', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {links.map(({ icon: Icon, label, href }) => (
              <SmartLink
                key={label}
                href={href}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              >
                <Icon size={14} />
                {label}
              </SmartLink>
            ))}
          </div>
          <a
            href={`mailto:${contacts.email}`}
            className="flex items-center gap-2 px-8 py-3 mt-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            <Mail size={18} />
            contact@aycore.fr
          </a>
        </div>
      </div>
    </section>
  )
}
