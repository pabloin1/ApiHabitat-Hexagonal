import { Habitat } from "./Habitat";

export interface HabitatRepository {
  getAll(): Promise<Habitat[] | null>;

  getById(habitatId: number): Promise<Habitat | null>;
  
  createHabitat(
    nombre:string,
    humedadDeseada: string,
    temperaturaDeseada: string,
    movimiento: string,
    idMonitoreo: number,
    horaNotificar:string
  ): Promise<Habitat | null>;

  deleteHabitat(habitatId: number): Promise<Habitat | null>;

  updateHabitat(
    id:number,
    nombre:string,
    humedadDeseada: string,
    temperaturaDeseada: string,
    movimiento: string,
    idMonitoreo: number,
    horaNotificar:string
  ): Promise<Habitat | null>;
}
