import { Habitat } from "../domain/Habitat";
import { HabitatRepository } from "../domain/HabitatRepository";


export class CreateHabitatUseCase {
  constructor(readonly HabitatRepository: HabitatRepository) {}

  async run(
    id_user: number,
    name: string,
    interval_review: string,
    temperature: string,
    humedity: string,
    created_at:string
  ): Promise<Habitat | null> {
    try {
      const user = await this.HabitatRepository.createHabitat(
        id_user,
        name,
        interval_review,
        temperature,
        humedity,
        created_at
      );
      return user;
    } catch (error) {
      return null;
    }
  }
}
