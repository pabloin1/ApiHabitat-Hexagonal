import { Habitat } from "../domain/Habitat";
import { HabitatRepository } from "../domain/HabitatRepository";


export class UpdateHabitatUseCase {
  constructor(readonly HabitatRepository: HabitatRepository) {}

  async run(
    id:number,
    humedadDeseada: string,
    temperaturaDeseada: string,
    movimiento: string,
    idMonitoreo: number
  ): Promise<Habitat | null> {
    try {
      const user = await this.HabitatRepository.updateHabitat(
        id,
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
