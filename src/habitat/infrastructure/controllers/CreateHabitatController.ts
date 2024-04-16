import { Request, Response } from "express";
import { CreateHabitatUseCase } from "../../application/CreateHabitatUseCase";

export class CreateHabitatController {
  constructor(private readonly createHabitatUseCase: CreateHabitatUseCase) {}
  //Cambiar 
  async run(req: Request, res: Response) {

    const data = req.body;
    try {
      const habitat = await this.createHabitatUseCase.run(
        data.id_user,
        data.name,
        data.interval_review,
        data.temperature,
        data.humedity,
        data.created_at = new Date().toISOString()
      );

      if (habitat) {
        res.status(201).json({
          status: "success",
          data: habitat
        });
      } else {
        res.status(400).json({
          status: "error",
          message: "No se pudo crear el usuario"
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
