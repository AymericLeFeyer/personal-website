import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { cn } from '../../shared/utils/cn'

interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

const FR: Testimonial[] = [
  {
    quote: "Aymeric a une vraie capacité à comprendre les enjeux métier avant de toucher au code. Le résultat était propre, bien architecturé et livré dans les délais. Je le recommande sans hésiter.",
    name: "Thomas R.",
    role: "Tech Lead",
    company: "Scaleway",
  },
  {
    quote: "Rarement vu quelqu'un s'intégrer aussi vite dans une équipe produit. Aymeric pose les bonnes questions, challenge les specs et livre des features solides. Un vrai partenaire.",
    name: "Sophie M.",
    role: "Product Manager",
    company: "Doctolib",
  },
  {
    quote: "Aymeric a développé notre site vitrine de A à Z en un temps record. Moderne, rapide, et exactement ce qu'on voulait. Il a su traduire notre vision sans qu'on ait à tout expliquer.",
    name: "Laurent B.",
    role: "Dirigeant",
    company: "Atelier Lumière",
  },
]

const EN: Testimonial[] = [
  {
    quote: "Aymeric has a real ability to understand business challenges before touching the code. The result was clean, well-architected and delivered on time. Highly recommended.",
    name: "Thomas R.",
    role: "Tech Lead",
    company: "Scaleway",
  },
  {
    quote: "Rarely seen someone integrate so quickly into a product team. Aymeric asks the right questions, challenges specs and delivers solid features. A true partner.",
    name: "Sophie M.",
    role: "Product Manager",
    company: "Doctolib",
  },
  {
    quote: "Aymeric built our showcase website from scratch in record time. Modern, fast, and exactly what we wanted. He translated our vision without us having to explain everything.",
    name: "Laurent B.",
    role: "CEO",
    company: "Atelier Lumière",
  },
]

export function TestimonialsSection() {
  const { t, i18n } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  const testimonials = i18n.language === 'fr' ? FR : EN
  const current = testimonials[index]

  function go(next: number) {
    setVisible(false)
    setTimeout(() => {
      setIndex((next + testimonials.length) % testimonials.length)
      setVisible(true)
    }, 200)
  }

  useEffect(() => {
    const timer = setInterval(() => go(index + 1), 5000)
    return () => clearInterval(timer)
  }, [index, i18n.language])

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
              <p className="text-muted-foreground text-base leading-relaxed mb-8 italic">"{current.quote}"</p>
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
