import { useTranslation } from 'react-i18next'
import { Linkedin, Github, Youtube, FileText } from 'lucide-react'
import type { Contacts } from '../../domain/profile/entities/Profile'

interface Props {
  contacts: Contacts
}

export function Footer({ contacts }: Props) {
  const { t } = useTranslation()

  const socials = [
    { icon: Linkedin, href: contacts.linkedin, label: 'LinkedIn' },
    { icon: Github, href: `https://github.com/${contacts.github}`, label: 'GitHub' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UClCAe7FyrIwpkt9H56XRndA', label: 'YouTube' },
    { icon: FileText, href: 'https://cv.aymeric.lefeyer.fr', label: t('footer.cv') },
  ]

  return (
    <footer className="border-t border-border py-10 px-4 sm:px-6 bg-surface">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">{t('footer.copyright')}</p>
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
