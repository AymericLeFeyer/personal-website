import type { Profile } from '../../../domain/profile/entities/Profile'

const API_BASE = 'https://api.aymeric.lefeyer.fr'

export async function fetchProfile(): Promise<Profile> {
  const response = await fetch(`${API_BASE}/api/profile`)
  if (!response.ok) {
    throw new Error(`Failed to fetch profile: ${response.status} ${response.statusText}`)
  }
  return response.json() as Promise<Profile>
}

export function iconUrl(path: string): string {
  return `${API_BASE}${path}`
}
