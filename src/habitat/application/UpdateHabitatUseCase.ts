import { Habitat } from "../domain/Habitat";
import { HabitatRepository } from "../domain/HabitatRepository";


export class UpdateHabitatUseCase {
  constructor(readonly HabitatRepository: HabitatRepository) {}

  async run(
    id:number,
    nombre: string,
    humedadDeseada: string,
    temperaturaDeseada: string,
    movimiento: string,
    idMonitoreo: number,
    horaNotificar:string
  ): Promise<Habitat | null> {
    try {
      const user = await this.HabitatRepository.updateHabitat(
        id,
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
