import { Habitat } from "../domain/Habitat";
import { HabitatRepository } from "../domain/HabitatRepository";

export class GetAllHabitatUseCase {
  constructor(readonly habitatRepository: HabitatRepository) {}

  async run(): Promise<Habitat[] | null> {
    try {
      const Habitat = await this.habitatRepository.getAll();
      console.log(Habitat);
      return Habitat;
    } catch (error) {
      return null;
    }
  }
}
