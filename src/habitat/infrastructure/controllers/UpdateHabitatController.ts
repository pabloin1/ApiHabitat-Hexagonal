import { Request, Response } from "express";
import { UpdateHabitatUseCase } from "../../application/UpdateHabitatUseCase";

export class UpdateHabitatController {
  constructor(private readonly updateHabitatUseCase: UpdateHabitatUseCase) {}

  async run(req: Request, res: Response) {
    const { id } = req.params; // Suponiendo que el id está en los parámetros de la solicitud
    const data = req.body;
    
    try {
      const habitat = await this.updateHabitatUseCase.run(
        parseInt(id), // Convertir id a número
        data.id_user,
        data.name,
        data.interval_review,
        data.temperature,
        data.humedity,
        data.created_at
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
