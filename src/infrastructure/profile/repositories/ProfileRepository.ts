import type { IProfileRepository } from '../../../domain/profile/repositories/IProfileRepository'
import type { Profile } from '../../../domain/profile/entities/Profile'
import { fetchProfile } from '../api/profileApiClient'

export class ProfileRepository implements IProfileRepository {
  async getProfile(): Promise<Profile> {
    return fetchProfile()
  }
}
