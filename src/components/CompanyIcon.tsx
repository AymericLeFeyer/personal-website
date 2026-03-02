import { useState } from 'react';
import { useRefs } from '../context/RefsContext';

export function CompanyIcon({ name, size = 34 }: { name: string; size?: number }) {
  const { companyIcon } = useRefs();
  const [failed, setFailed] = useState(false);
  const src = companyIcon(name);
  const radius = size <= 28 ? 6 : 8;

  return (
    <div className="company-icon-wrap" style={{ width: size, height: size, borderRadius: radius }}>
      {src && !failed ? (
        <img src={src} alt={name} className="company-icon-img" onError={() => setFailed(true)} />
      ) : (
        <span className="company-icon-letter">{name[0]}</span>
      )}
    </div>
  );
}
