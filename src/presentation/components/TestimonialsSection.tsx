import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { cn } from '../../shared/utils/cn'
import type { Testimonial } from '../../domain/profile/entities/Profile'

interface Props {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: Props) {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  const current = testimonials[index]

  function go(next: number) {
    setVisible(false)
    setTimeout(() => {
      setIndex((next + testimonials.length) % testimonials.length)
      setVisible(true)
    }, 200)
  }


  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className={cn('text-center mb-16 transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t('testimonials.title')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('testimonials.subtitle')}</p>
        </div>

        <div className={cn('transition-all duration-700 delay-100', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <div className="relative max-w-2xl mx-auto">
            {/* Card */}
            <div className={cn(
              'p-8 rounded-2xl border border-border bg-card text-center transition-all duration-200',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            )}>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 italic">"{current.message}"</p>
              <div className="text-sm font-semibold text-foreground">{current.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{current.role} · {current.company}</div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <button
                onClick={() => go(index - 1)}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={cn(
                      'w-1.5 h-1.5 rounded-full transition-all duration-300',
                      i === index ? 'bg-primary w-4' : 'bg-border'
                    )}
                  />
                ))}
              </div>

              <button
                onClick={() => go(index + 1)}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
