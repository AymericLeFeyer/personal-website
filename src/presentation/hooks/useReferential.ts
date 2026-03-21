import { useState, useEffect } from 'react'

const API_BASE = 'https://api.aymeric.lefeyer.fr'

interface Ref { name: string; icon: string }

export interface Referential {
  techMap: Map<string, string>
  companyMap: Map<string, string>
}

export function useReferential(): Referential {
  const [techMap, setTechMap] = useState<Map<string, string>>(new Map())
  const [companyMap, setCompanyMap] = useState<Map<string, string>>(new Map())

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/api/technologies`).then((r) => r.json()),
      fetch(`${API_BASE}/api/companies`).then((r) => r.json()),
    ]).then(([techs, companies]: [Ref[], Ref[]]) => {
      setTechMap(new Map(techs.map((t) => [t.name, `${API_BASE}${t.icon}`])))
      setCompanyMap(new Map(companies.map((c) => [c.name, `${API_BASE}${c.icon}`])))
    })
  }, [])

  return { techMap, companyMap }
}
