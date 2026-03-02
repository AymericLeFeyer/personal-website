import type { CalendarEvent } from '../types';
import { iconUrl } from '../config';
import { formatDate } from '../utils/date';

function handleIconError(e: React.SyntheticEvent<HTMLImageElement>) {
  (e.target as HTMLImageElement).style.display = 'none';
}

function EventItem({ event }: { event: CalendarEvent }) {
  return (
    <div className="event-item">
      <img
        src={iconUrl(event.icon)}
        alt={event.name}
        className="event-icon"
        onError={handleIconError}
      />
      <div>
        <p className="event-name">{event.name}</p>
        <p className="event-desc">{event.description}</p>
        <p className="event-date">{formatDate(event.date)}</p>
      </div>
    </div>
  );
}

export function EventsSection({ events }: { events: CalendarEvent[] }) {
  const sorted = [...events].sort((a, b) => b.date.localeCompare(a.date));
  const talks = sorted.filter(e => e.type === 'talk');
  const certs = sorted.filter(e => e.type === 'certification');

  return (
    <section className="cv-section">
      <h2 className="section-title">Talks & Certifications</h2>
      <div className="events-columns">
        <div>
          <p className="subsection-title">Talks</p>
          <div className="events-list">
            {talks.map((e, i) => <EventItem key={i} event={e} />)}
          </div>
        </div>
        <div>
          <p className="subsection-title">Certifications</p>
          <div className="events-list">
            {certs.map((e, i) => <EventItem key={i} event={e} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
