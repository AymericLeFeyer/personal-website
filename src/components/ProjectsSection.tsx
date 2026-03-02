import { useState } from 'react';
import type { Mission } from '../types';
import { useRefs } from '../context/RefsContext';
import { formatDate } from '../utils/date';

function TechIcon({ name }: { name: string }) {
  const { techIcon } = useRefs();
  const [failed, setFailed] = useState(false);
  const src = techIcon(name);
  if (!src || failed) return null;
  return (
    <img
      src={src}
      alt={name}
      title={name}
      className="tech-icon-sm"
      onError={() => setFailed(true)}
    />
  );
}

export function ProjectsSection({ missions }: { missions: Mission[] }) {
  const projects = missions
    .filter(m => m.is_side_project)
    .sort((a, b) => b.start_date.localeCompare(a.start_date));

  return (
    <section className="cv-section">
      <h2 className="section-title">Projets personnels</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-header">
              <div>
                <h3 className="project-title">{p.title}</h3>
                {p.link && (
                  <a
                    href={p.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {p.link.text} ↗
                  </a>
                )}
              </div>
              <span className="project-date">{formatDate(p.start_date)}</span>
            </div>
            <p className="project-context">{p.context}</p>
            <div className="project-techs">
              {p.technologies
                .sort((a, b) => b.frequency - a.frequency)
                .map(t => <TechIcon key={t.name} name={t.name} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
