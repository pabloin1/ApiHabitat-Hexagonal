import { Habitat } from "../domain/Habitat";
import { HabitatRepository } from "../domain/HabitatRepository";


export class CreateHabitatUseCase {
  constructor(readonly HabitatRepository: HabitatRepository) {}

  async run(
    humedadDeseada: string,
    temperaturaDeseada: string,
    movimiento: string,
    idMonitoreo: number
  ): Promise<Habitat | null> {
    try {
      const user = await this.HabitatRepository.createHabitat(
        humedadDeseada,
        temperaturaDeseada,
        movimiento,
        idMonitoreo
      );
      return user;
    } catch (error) {
      return null;
    }
  }
}
