import { Habitat } from "./Habitat";

export interface HabitatRepository {
  getAll(): Promise<Habitat[] | null>;

  getById(habitatId: number): Promise<Habitat | null>;
  
  createHabitat(
     id_user: number,
     name: string,
     interval_review: string,
     temperature: string,
     humedity: string,
     created_at:string
  ): Promise<Habitat | null>;

  deleteHabitat(habitatId: number): Promise<Habitat | null>;

  updateHabitat(
    id:number,
    id_user: number,
    name: string,
    interval_review: string,
    temperature: string,
    humedity: string,
    created_at: string
  ): Promise<Habitat | null>;
}
