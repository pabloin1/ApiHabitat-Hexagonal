import { Habitat } from "../domain/Habitat";
import { HabitatRepository } from "../domain/HabitatRepository";


export class CreateHabitatUseCase {
  constructor(readonly HabitatRepository: HabitatRepository) {}

  async run(
    nombre:string,
    humedadDeseada: string,
    temperaturaDeseada: string,
    movimiento: string,
    idMonitoreo: number,
    horaNotificar:string
  ): Promise<Habitat | null> {
    try {
      const user = await this.HabitatRepository.createHabitat(
        nombre,
        humedadDeseada,
        temperaturaDeseada,
        movimiento,
        idMonitoreo,
        horaNotificar
      );
      return user;
    } catch (error) {
      return null;
    }
  }
}
