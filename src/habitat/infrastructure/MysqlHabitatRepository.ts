import { query } from "../../database/mysql";
import { Habitat } from "../domain/Habitat";
import { HabitatRepository } from "../domain/HabitatRepository";

export class MysqlHabitatRepository implements HabitatRepository {
  async getAll(): Promise<Habitat[] | null> {
    const sql = "SELECT * FROM habitats";
    try {
      const [data]: any = await query(sql, []);
      const dataHabitat = Object.values(JSON.parse(JSON.stringify(data)));

      return dataHabitat.map(
        (habitat: any) =>
          new Habitat(
            habitat.id,
            habitat.id_user,
            habitat.name,
            habitat.humedity,
            habitat.temperature,
            habitat.interval_review,
            habitat.Created_at
          )
      );
    } catch (error) {
      return null;
    }
  }

  async getById(habitatId: number): Promise<Habitat | null> {
    const sql = "SELECT * FROM habitats WHERE id=?";
    const params: any[] = [habitatId];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Habitat(
        result[0].id,
        result[0].name,
        result[0].humedity,
        result[0].temperature,
        result[0].interval_review,
        result[0].id_user,
        result[0].created_at
      );
    } catch (error) {
      return null;
    }
  }

  async createHabitat(
    id_user: number,
    name: string,
    interval_review: string,
    temperature: string,
    humedity: string,
    created_at: string
  ): Promise<Habitat | null> {
    const sql = `INSERT INTO habitats (
        id_user,
        name,
        interval_review,
        temperature,
        humedity,
        Created_at) VALUES (?,?,?,?,?,?)`;
    const params: any[] = [
      id_user,
      name,
      interval_review,
      temperature,
      humedity,
      created_at,
    ];

    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Habitat(
        result.insertId,
        id_user,
        name,
        interval_review,
        temperature,
        humedity,
        created_at
      );
    } catch (error) {
      return null;
    }
  }

  async deleteHabitat(id: number): Promise<Habitat | null> {
    const sql = "DELETE FROM habitats WHERE id=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Habitat(
        result.id,
        result.name,
        result.humedity,
        result.temperature,
        result.interval_review,
        result.id_user,
        result.created_at
      );
    } catch (error) {
      return null;
    }
  }

  async updateHabitat(
    id: number,
    id_user: number,
    name: string,
    interval_review: string,
    temperature: string,
    humedity: string,
    created_at: string
  ): Promise<Habitat | null> {
    const sql =
      "UPDATE habitats SET id_user=?, name=?, interval_review=?, temperature=?, humedity=?, created_at=? WHERE id=?";
    const params: any[] = [
      id_user,
      name,
      interval_review,
      temperature,
      humedity,
      created_at,
      id,
    ];
    try {
      const [result]: any = await query(sql, params);
      // El objeto Result es un objeto que contiene info generada de la bd
      /* No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Habitat(
        id,
        id_user,
        name,
        interval_review,
        temperature,
        humedity,
        created_at
      );
    } catch (error) {
      return null;
    }
  }
}
