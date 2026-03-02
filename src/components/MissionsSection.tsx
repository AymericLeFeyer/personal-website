import { useState } from 'react';
import type { Mission } from '../types';
import { useRefs } from '../context/RefsContext';
import { formatRange } from '../utils/date';
import { CompanyIcon } from './CompanyIcon';

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

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={`mission-chevron${expanded ? ' mission-chevron--open' : ''}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function MissionRow({ mission }: { mission: Mission }) {
  const [expanded, setExpanded] = useState(false);
  const sortedTechs = [...mission.technologies].sort((a, b) => b.frequency - a.frequency);

  return (
    <div className={`mission-row${expanded ? ' mission-row--expanded' : ''}`}>
      <div className="mission-row-main" onClick={() => setExpanded(v => !v)}>
        <CompanyIcon name={mission.company} size={28} />
        <div className="mission-row-body">
          <div className="mission-row-top">
            <span className="mission-row-title">{mission.title}</span>
            <span className="mission-row-sep">·</span>
            <span className="mission-row-company">{mission.company}</span>
          </div>
          {sortedTechs.length > 0 && (
            <div className="mission-row-techs">
              {sortedTechs.map(t => <TechIcon key={t.name} name={t.name} />)}
            </div>
          )}
        </div>
        <div className="mission-row-right">
          <span className="mission-row-dates">
            {formatRange(mission.start_date, mission.end_date)}
          </span>
          <ChevronIcon expanded={expanded} />
        </div>
      </div>

      <div className="mission-row-details">
        <div className="mission-row-details-inner">
          <p className="mission-row-context">{mission.context}</p>
          {mission.tasks.length > 0 && (
            <ul className="mission-row-tasks">
              {mission.tasks.map((task, i) => <li key={i}>{task}</li>)}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export function MissionsSection({ missions }: { missions: Mission[] }) {
  const professional = missions
    .filter(m => !m.is_side_project)
    .sort((a, b) => {
      const aDate = a.start_date === 'Present' ? '9999' : a.start_date;
      const bDate = b.start_date === 'Present' ? '9999' : b.start_date;
      return bDate.localeCompare(aDate);
    });

  return (
    <section className="cv-section">
      <h2 className="section-title">Missions</h2>
      <div className="mission-list">
        {professional.map((m, i) => <MissionRow key={i} mission={m} />)}
      </div>
    </section>
  );
}
