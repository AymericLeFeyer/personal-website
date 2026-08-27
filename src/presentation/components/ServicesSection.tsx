import { useTranslation } from 'react-i18next'
import { Server, Code2, Layout, Wrench, Headphones, Smartphone } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { cn } from '../../shared/utils/cn'

type ServiceKey = 'mobile_web' | 'devops' | 'projects'
const SERVICES: { key: ServiceKey; icon: typeof Smartphone }[] = [
  { key: 'mobile_web', icon: Smartphone },
  { key: 'devops', icon: Server },
  { key: 'projects', icon: Layout },
]

type StepKey = 'consulting' | 'design_dev' | 'support'
const STEPS: { key: StepKey; icon: typeof Headphones }[] = [
  { key: 'consulting', icon: Headphones },
  { key: 'design_dev', icon: Code2 },
  { key: 'support', icon: Wrench },
]

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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map(({ key, icon: Icon }, index) => (
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
          ))}
        </div>

        {/* Process — timeline verticale en mobile, horizontale à partir de sm */}
        <div className={cn('mt-20 sm:mt-24 transition-all duration-700 delay-200', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{t('services.process.title')}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('services.process.subtitle')}</p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {STEPS.map(({ key, icon: Icon }, index) => (
              <li
                key={key}
                className={cn(
                  'relative flex gap-4 sm:flex-col sm:gap-5 transition-all duration-700',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${300 + index * 120}ms` }}
              >
                {index < STEPS.length - 1 && (
                  <>
                    <span
                      aria-hidden
                      className="sm:hidden absolute left-5 top-12 -bottom-8 w-px bg-gradient-to-b from-primary/40 to-border"
                    />
                    <span
                      aria-hidden
                      className="hidden sm:block absolute left-12 -right-8 top-5 h-px bg-gradient-to-r from-primary/40 to-border"
                    />
                  </>
                )}

                <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-card border border-primary/40 flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="block text-xs font-semibold tracking-widest text-primary/70 mb-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h4 className="text-base font-semibold text-foreground mb-2">
                    {t(`services.process.steps.${key}.title`)}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`services.process.steps.${key}.description`)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
