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
            habitat.nombre,
            habitat.humedadDeseada,
            habitat.temperaturaDeseada,
            habitat.movimiento,
            habitat.idMonitoreo,
            habitat.horaNotificar
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
        result[0].nombre,
        result[0].humedadDeseada,
        result[0].temperaturaDeseada,
        result[0].movimiento,
        result[0].idMonitoreo,
        result[0].horaNotificar
      );
    } catch (error) {
      return null;
    }
  }

  async createHabitat(
    nombre:string,
    humedadDeseada: string,
    temperaturaDeseada: string,
    movimiento: string,
    idMonitoreo: number,
    horaNotificar:string
  ): Promise<Habitat | null> {
    const sql =
      "INSERT INTO habitat (nombre,humedadDeseada, temperaturaDeseada, movimiento,idMonitoreo,horaNotificar) VALUES (?,?,?,?,?,?)";
    const params: any[] = [
      nombre,
      humedadDeseada,
      temperaturaDeseada,
      movimiento,
      idMonitoreo,
      horaNotificar
    ];

    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Habitat(
        result.insertId,
        nombre,
        humedadDeseada,
        temperaturaDeseada,
        movimiento,
        idMonitoreo,
        horaNotificar
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
        result.nombre,
        result.humedadDeseada,
        result.temperaturaDeseada,
        result.movimiento,
        result.idMonitoreo,
        result.horaNotificar
      );
    } catch (error) {
      return null;
    }
  }

  async updateHabitat(
    id: number,
    nombre:string,
    humedadDeseada: string,
    temperaturaDeseada: string,
    movimiento: string,
    idMonitoreo: number,
    horaNotificar:string
  ): Promise<Habitat | null> {
    const sql =
      "UPDATE habitat SET nombre=?, humedadDeseada=?, temperaturaDeseada=?, movimiento=?, idMonitoreo=?, horaNotificar=? WHERE id=?";
    const params: any[] = [
      nombre,
      humedadDeseada,
      temperaturaDeseada,
      movimiento,
      idMonitoreo,
      horaNotificar,
      id,
    ];
    try {
      const [result]: any = await query(sql, params);
      // El objeto Result es un objeto que contiene info generada de la bd
      /* No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Habitat(
        id,
        nombre,
        humedadDeseada,
        temperaturaDeseada,
        movimiento,
        idMonitoreo,
        horaNotificar
      );
    } catch (error) {
      return null;
    }
  }
}
