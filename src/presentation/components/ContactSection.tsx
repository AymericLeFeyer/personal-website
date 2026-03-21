import { useTranslation } from 'react-i18next'
import { Mail, Linkedin, Github, FileText } from 'lucide-react'
import type { Contacts } from '../../domain/profile/entities/Profile'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { cn } from '../../shared/utils/cn'

interface Props {
  contacts: Contacts
}

export function ContactSection({ contacts }: Props) {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()

  const links = [
    {
      icon: Mail,
      label: t('contact.email_label'),
      value: contacts.email,
      href: `mailto:${contacts.email}`,
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin_label'),
      value: 'LinkedIn',
      href: contacts.linkedin,
    },
    {
      icon: Github,
      label: t('contact.github_label'),
      value: `@${contacts.github}`,
      href: `https://github.com/${contacts.github}`,
    },
    {
      icon: FileText,
      label: t('contact.cv_label'),
      value: 'cv.aymeric.lefeyer.fr',
      href: 'https://cv.aymeric.lefeyer.fr',
    },
  ]

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-4 sm:px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <div
          className={cn(
            'mb-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Links grid */}
        <div
          className={cn(
            'grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-100',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {links.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-card/80 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                <Icon size={18} className="text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground mb-0.5">{label}</div>
                <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {value}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <div
          className={cn(
            'mt-10 transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <a
            href={`mailto:${contacts.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25 text-base"
          >
            <Mail size={18} />
            {contacts.email}
          </a>
        </div>
      </div>
    </section>
  )
}
