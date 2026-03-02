import { useState, useEffect } from 'react';
import { API_BASE, iconUrl } from '../config';

interface TechRef { name: string; icon: string }
interface CompanyRef { name: string; icon: string }

export function useReferential() {
  const [techMap, setTechMap] = useState<Map<string, string>>(new Map());
  const [companyMap, setCompanyMap] = useState<Map<string, string>>(new Map());

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/api/technologies`).then(r => r.json()),
      fetch(`${API_BASE}/api/companies`).then(r => r.json()),
    ]).then(([techs, companies]: [TechRef[], CompanyRef[]]) => {
      setTechMap(new Map(techs.map(t => [t.name, iconUrl(t.icon)])));
      setCompanyMap(new Map(companies.map(c => [c.name, iconUrl(c.icon)])));
    });
  }, []);

  return { techMap, companyMap };
}
