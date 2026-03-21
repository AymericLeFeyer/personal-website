import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { cn } from '../../shared/utils/cn'

export function Navbar() {
  const { t } = useTranslation()
  const { theme, setTheme } = useTheme()
  const { currentLang, toggleLanguage } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id: string) {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: t('nav.services'), id: 'services' },
    { label: t('nav.missions'), id: 'missions' },
    { label: t('nav.about'), id: 'about' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'navbar-scrolled backdrop-blur-md border-border shadow-sm'
          : 'bg-transparent border-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-base font-bold text-foreground tracking-tight hover:text-primary transition-colors shrink-0"
        >
          Aymeric Le Feyer
        </button>

        {/* Desktop links — centered absolutely */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={toggleLanguage}
            className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-accent"
            aria-label="Switch language"
          >
            {currentLang === 'fr' ? 'FR' : 'EN'}
          </button>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            {t('nav.cta')}
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden navbar-scrolled backdrop-blur-md border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <button
                onClick={toggleLanguage}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                {currentLang === 'fr' ? 'FR' : 'EN'}
              </button>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
              </button>
              <button
                onClick={() => { scrollTo('contact'); setMenuOpen(false) }}
                className="ml-auto px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                {t('nav.cta')}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
