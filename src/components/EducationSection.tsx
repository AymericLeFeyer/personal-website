import type { Education } from '../types';
import { iconUrl } from '../config';
import { formatRange, formatDate } from '../utils/date';

function handleIconError(e: React.SyntheticEvent<HTMLImageElement>) {
  (e.target as HTMLImageElement).style.display = 'none';
}

export function EducationSection({ education }: { education: Education[] }) {
  const degrees = education.filter(
    e => e.institution.includes('Université') || e.institution.includes('Polytechnique')
  );
  const formations = education.filter(
    e => !e.institution.includes('Université') && !e.institution.includes('Polytechnique')
  );

  return (
    <section className="cv-section">
      <h2 className="section-title">Formation</h2>

      <div className="education-list">
        {degrees.map((edu, i) => (
          <div key={i} className="education-item">
            <img
              src={iconUrl(edu.icon)}
              alt={edu.institution}
              className="education-icon"
              onError={handleIconError}
            />
            <div>
              <p className="education-degree">{edu.degree}</p>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-dates">{formatRange(edu.start_date, edu.end_date)}</p>
            </div>
          </div>
        ))}
      </div>

      {formations.length > 0 && (
        <>
          <p className="subsection-title">Formations complémentaires</p>
          <div className="formations-grid">
            {formations.map((f, i) => (
              <div key={i} className="formation-item">
                <img
                  src={iconUrl(f.icon)}
                  alt={f.degree}
                  className="formation-icon"
                  onError={handleIconError}
                />
                <span className="formation-degree">{f.degree}</span>
                <span className="formation-date">{formatDate(f.start_date)}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
