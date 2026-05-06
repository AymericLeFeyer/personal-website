import { HelmetProvider, Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useProfile } from '../hooks/useProfile'
import { getYearsSince } from '../../shared/utils/date'
import { useReferential } from '../hooks/useReferential'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { ServicesSection } from '../components/ServicesSection'
import { MissionsSection } from '../components/MissionsSection'
import { AboutSection } from '../components/AboutSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { Footer } from '../components/Footer'
import { LoadingScreen } from '../components/LoadingScreen'
import { ErrorScreen } from '../components/ErrorScreen'

export function HomePage() {
  const { t } = useTranslation()
  const { profile, loading, error } = useProfile()
  const { techMap, companyMap } = useReferential()

  const title = 'Aymeric Le Feyer — Ingénieur Logiciel | Solutions Web & Mobile'
  const description = t('nav.services') === 'Services'
    ? 'Aymeric Le Feyer, software engineer specialized in web, mobile and software solutions. Design, development, showcase websites.'
    : "Aymeric Le Feyer, ingénieur logiciel spécialisé en solutions web, mobile et logicielles. Conception, développement, sites vitrines."

  if (loading) return <LoadingScreen />
  if (error || !profile) return <ErrorScreen />

  const proMissions = profile.missions.filter((m) => !m.is_side_project)
  const heroStats = {
    missions: proMissions.length,
    clients: new Set(proMissions.map((m) => m.company)).size,
    years: getYearsSince('2020-09-01'),
  }

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
          <HeroSection stats={heroStats} availability={profile.availability} />
          <ServicesSection />
          <TestimonialsSection testimonials={profile.testimonials} />
          <MissionsSection missions={profile.missions} techMap={techMap} companyMap={companyMap} />
          <AboutSection profile={profile} companyMap={companyMap} />

        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}
