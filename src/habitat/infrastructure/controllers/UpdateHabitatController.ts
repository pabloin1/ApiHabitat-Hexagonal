import { Request, Response } from "express";
import { UpdateHabitatUseCase } from "../../application/UpdateHabitatUseCase";

export class UpdateHabitatController {
  constructor(private readonly updateHabitatUseCase: UpdateHabitatUseCase) {}

  async run(req: Request, res: Response) {
    const { id } = req.params; // Suponiendo que el id está en los parámetros de la solicitud
    const { humedadDeseada, temperaturaDeseada, movimiento, idMonitoreo, nombre, horaNotificar } = req.body;
    
    try {
      const habitat = await this.updateHabitatUseCase.run(
        parseInt(id), // Convertir id a número
        nombre,
        humedadDeseada,
        temperaturaDeseada,
        movimiento,
        idMonitoreo,
        horaNotificar
      );

      if (habitat) {
        res.status(200).json({
          status: "success",
          data: habitat
        });
      } else {
        res.status(404).json({
          status: "error",
          message: "Habitat no encontrado"
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        message: "Ocurrió un error interno"
      });
    }
  }
}
