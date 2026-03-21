import { useState, useEffect } from 'react'
import type { Profile } from '../../domain/profile/entities/Profile'
import { GetProfileUseCase } from '../../application/profile/usecases/GetProfileUseCase'
import { ProfileRepository } from '../../infrastructure/profile/repositories/ProfileRepository'

interface UseProfileResult {
  profile: Profile | null
  loading: boolean
  error: string | null
}

const repository = new ProfileRepository()
const getProfileUseCase = new GetProfileUseCase(repository)

export function useProfile(): UseProfileResult {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    getProfileUseCase
      .execute()
      .then((data) => {
        if (!cancelled) {
          setProfile(data)
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error')
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { profile, loading, error }
}
