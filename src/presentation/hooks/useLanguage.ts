import { useTranslation } from 'react-i18next'

export function useLanguage() {
  const { i18n } = useTranslation()

  const currentLang = i18n.language.startsWith('en') ? 'en' : 'fr'

  function toggleLanguage() {
    const next = currentLang === 'fr' ? 'en' : 'fr'
    void i18n.changeLanguage(next)
  }

  return { currentLang, toggleLanguage }
}
