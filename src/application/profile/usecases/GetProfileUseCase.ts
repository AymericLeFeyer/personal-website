import type { IProfileRepository } from '../../../domain/profile/repositories/IProfileRepository'
import type { Profile } from '../../../domain/profile/entities/Profile'

export class GetProfileUseCase {
  constructor(private readonly repository: IProfileRepository) {}

  async execute(): Promise<Profile> {
    return this.repository.getProfile()
  }
}
