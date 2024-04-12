import { Habitat } from "../domain/Habitat";
import { HabitatRepository } from "../domain/HabitatRepository";

export class DeleteHabitatUseCase {
  constructor(readonly HabitatRepository: HabitatRepository) {}

  async run(
    id:number
  ): Promise<Habitat | null> {
    try {
      const user = await this.HabitatRepository.deleteHabitat(
        id
      );
      return user;
    } catch (error) {
      return null;
    }
  }
}
