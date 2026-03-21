import type { Profile } from '../entities/Profile'

export interface IProfileRepository {
  getProfile(): Promise<Profile>
}
