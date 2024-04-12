import { query } from "../../database/mysql";
import { Habitat } from "../domain/Habitat";
import { HabitatRepository } from "../domain/HabitatRepository";

export class MysqlHabitatRepository implements HabitatRepository {
  async getAll(): Promise<Habitat[] | null> {
    const sql = "SELECT * FROM habitat";
    try {
      const [data]: any = await query(sql, []);
      const dataHabitat = Object.values(JSON.parse(JSON.stringify(data)));

      return dataHabitat.map(
        (habitat: any) =>
          new Habitat(
            habitat.id,
            habitat.humedadDeseada,
            habitat.temperaturaDeseada,
            habitat.movimiento,
            habitat.idMonitoreo
          )
      );
    } catch (error) {
      return null;
    }
  }

  async getById(habitatId: number): Promise<Habitat | null> {
    const sql = "SELECT * FROM habitat WHERE id=?";
    const params: any[] = [habitatId];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Habitat(
        result[0].id,
        result[0].humedadDeseada,
        result[0].temperaturaDeseada,
        result[0].movimiento,
        result[0].idMonitoreo
      );
    } catch (error) {
      return null;
    }
  }

  async createHabitat(
    humedadDeseada: string,
    temperaturaDeseada: string,
    movimiento: string,
    idMonitoreo: number
  ): Promise<Habitat | null> {
    const sql =
      "INSERT INTO habitat (humedadDeseada, temperaturaDeseada, movimiento,idMonitoreo) VALUES (?,?,?,?)";
    const params: any[] = [
      humedadDeseada,
      temperaturaDeseada,
      movimiento,
      idMonitoreo,
    ];

    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Habitat(
        result.insertId,
        humedadDeseada,
        temperaturaDeseada,
        movimiento,
        idMonitoreo
      );
    } catch (error) {
      return null;
    }
  }

  async deleteHabitat(habitatId: number): Promise<Habitat | null> {
    const sql = "DELETE FROM habitat WHERE id=?";
    const params: any[] = [habitatId];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Habitat(
        habitatId,
        result.humedadDeseada,
        result.temperaturaDeseada,
        result.movimiento,
        result.idMonitoreo
      );
    } catch (error) {
      return null;
    }
  }

  async updateHabitat(
    id: number,
    humedadDeseada: string,
    temperaturaDeseada: string,
    movimiento: string,
    idMonitoreo: number
  ): Promise<Habitat | null> {
    const sql =
      "UPDATE habitat SET humedadDeseada=?, temperaturaDeseada=?, movimiento=?, idMonitoreo=? WHERE id=?";
    const params: any[] = [
      humedadDeseada,
      temperaturaDeseada,
      movimiento,
      idMonitoreo,
      id,
    ];
    try {
      const [result]: any = await query(sql, params);
      // El objeto Result es un objeto que contiene info generada de la bd
      /* No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Habitat(
        id,
        humedadDeseada,
        temperaturaDeseada,
        movimiento,
        idMonitoreo
      );
    } catch (error) {
      return null;
    }
  }
}
