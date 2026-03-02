import { useProfile } from './hooks/useProfile';
import { useReferential } from './hooks/useReferential';
import { RefsContext } from './context/RefsContext';
import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { ExperienceSection } from './components/ExperienceSection';
import { MissionsSection } from './components/MissionsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { EventsSection } from './components/EventsSection';

function App() {
  const { profile, loading, error } = useProfile();
  const { techMap, companyMap } = useReferential();

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Chargement du CV...</p>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="error-screen">
        <p>Erreur lors du chargement : {error}</p>
      </div>
    );
  }

  return (
    <RefsContext.Provider value={{
      techIcon: (name) => techMap.get(name),
      companyIcon: (name) => companyMap.get(name),
    }}>
      <div className="cv-root">
        <Banner />
        <div className="cv-container">
          <Header profile={profile} />
          <main>
            <ExperienceSection companies={profile.companies} />
            <EducationSection education={profile.education} />
            <MissionsSection missions={profile.missions} />
            <ProjectsSection missions={profile.missions} />
            <EventsSection events={profile.events} />
          </main>
          <footer className="cv-footer">
            <p>
            Données chargées dynamiquement depuis{' '}
            <a
              href="https://github.com/AymericLeFeyer/portfolio-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              portfolio-manager
            </a>
          </p>
          </footer>
        </div>
      </div>
    </RefsContext.Provider>
  );
}

export default App;
