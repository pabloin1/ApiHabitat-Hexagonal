import { Habitat } from "../domain/Habitat";
import { HabitatRepository } from "../domain/HabitatRepository";

export class GetByIdHabitatUseCase {
  constructor(readonly habitatRepository: HabitatRepository) {}

  async run(id: number): Promise<Habitat | null> {
    try {
      const result = await this.habitatRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
