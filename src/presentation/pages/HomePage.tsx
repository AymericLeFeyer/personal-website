import { HelmetProvider, Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useProfile } from '../hooks/useProfile'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { ServicesSection } from '../components/ServicesSection'
import { MissionsSection } from '../components/MissionsSection'
import { AboutSection } from '../components/AboutSection'
import { AyLabsSection } from '../components/AyLabsSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { LoadingScreen } from '../components/LoadingScreen'
import { ErrorScreen } from '../components/ErrorScreen'

export function HomePage() {
  const { t } = useTranslation()
  const { profile, loading, error } = useProfile()

  const title = 'Aymeric Le Feyer — Développeur Freelance | Solutions Web & Mobile'
  const description = t('nav.services') === 'Services'
    ? 'Aymeric Le Feyer, freelance developer specialized in web, mobile and software solutions. Design, development, showcase websites.'
    : "Aymeric Le Feyer, développeur freelance spécialisé en solutions web, mobile et logicielles. Conception, développement, sites vitrines."

  if (loading) return <LoadingScreen />
  if (error || !profile) return <ErrorScreen />

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <MissionsSection missions={profile.missions} />
          <AboutSection profile={profile} />
          <AyLabsSection />
          <ContactSection contacts={profile.contacts} />
        </main>
        <Footer contacts={profile.contacts} />
      </div>
    </HelmetProvider>
  )
}
