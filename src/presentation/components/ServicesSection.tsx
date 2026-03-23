import { useTranslation } from 'react-i18next'
import { Globe, Code2, Layout, Wrench, Headphones, Smartphone } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { cn } from '../../shared/utils/cn'

const SERVICE_ICONS = [Smartphone, Code2, Globe, Wrench, Headphones, Layout]

type ServiceKey = 'digital' | 'design_dev' | 'showcase' | 'mobile_web' | 'support' | 'consulting'
const SERVICE_KEYS: ServiceKey[] = ['mobile_web', 'design_dev', 'digital', 'support', 'consulting', 'showcase']

export function ServicesSection() {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-4 sm:px-6 bg-surface"
    >
      <div className="max-w-6xl mx-auto">
        <div className={cn('text-center mb-16 transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t('services.title')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICE_KEYS.map((key, index) => {
            const Icon = SERVICE_ICONS[index]!
            return (
              <div
                key={key}
                className={cn(
                  'transition-all duration-700',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
              <div className="group h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-accent transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{t(`services.items.${key}.title`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(`services.items.${key}.description`)}</p>
              </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
