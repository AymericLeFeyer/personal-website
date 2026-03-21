import { useTranslation } from 'react-i18next'
import { Globe, Code2, Layout, Clock, Headphones, Building2 } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { cn } from '../../shared/utils/cn'

const SERVICE_ICONS = [Globe, Code2, Layout, Clock, Headphones, Building2]

type ServiceKey = 'digital' | 'design_dev' | 'showcase' | 'missions' | 'consulting' | 'aycore'
const SERVICE_KEYS: ServiceKey[] = ['digital', 'design_dev', 'showcase', 'missions', 'consulting', 'aycore']

export function ServicesSection() {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="services"
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
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_KEYS.map((key, index) => {
            const Icon = SERVICE_ICONS[index]!
            return (
              <div
                key={key}
                className={cn(
                  'group p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-card/80 transition-all duration-500 hover:-translate-y-1',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {t(`services.items.${key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`services.items.${key}.description`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
