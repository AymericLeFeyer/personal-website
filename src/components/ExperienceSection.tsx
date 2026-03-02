import type { Company } from '../types';
import { formatRange } from '../utils/date';
import { CompanyIcon } from './CompanyIcon';

const SKIP_POSITIONS = new Set(['Agent de surveillance', 'Manutentionnaire entrepôt']);

export function ExperienceSection({ companies }: { companies: Company[] }) {
  const filtered = companies
    .filter(c => !SKIP_POSITIONS.has(c.position))
    .sort((a, b) => {
      const aEnd = a.end_date === 'Present' ? '9999' : a.end_date;
      const bEnd = b.end_date === 'Present' ? '9999' : b.end_date;
      return bEnd.localeCompare(aEnd);
    });

  return (
    <section className="cv-section">
      <h2 className="section-title">Entreprises</h2>
      <div className="timeline">
        {filtered.map((company, i) => (
          <div key={i} className="timeline-item">
            <CompanyIcon name={company.company} />
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-meta">
                  <span className="timeline-company">{company.company}</span>
                  <span className="timeline-separator">·</span>
                  <span className="timeline-position">{company.position}</span>
                </div>
                <span className="timeline-dates">
                  {formatRange(company.start_date, company.end_date)}
                </span>
              </div>
              <ul className="timeline-responsibilities">
                {company.responsibilities.slice(0, 4).map((r, j) => (
                  <li key={j}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
