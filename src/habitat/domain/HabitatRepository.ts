import { Habitat } from "./Habitat";

export interface HabitatRepository {
  getAll(): Promise<Habitat[] | null>;

  getById(habitatId: number): Promise<Habitat | null>;
  
  createHabitat(
    humedadDeseada: string,
    temperaturaDeseada: string,
    movimiento: string,
    idMonitoreo: number
  ): Promise<Habitat | null>;

  deleteHabitat(habitatId: number): Promise<Habitat | null>;

  updateHabitat(
    id:number,
    humedadDeseada: string,
    temperaturaDeseada: string,
    movimiento: string,
    idMonitoreo: number
  ): Promise<Habitat | null>;
}
