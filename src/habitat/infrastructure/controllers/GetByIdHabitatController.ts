import { Request, Response } from "express";
import { GetByIdHabitatUseCase } from "../../application/GetByIdHabitatUseCase";

export class GetByIdHabitatController {
  constructor(private readonly getByIdHabitatUseCase: GetByIdHabitatUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const habitat = await this.getByIdHabitatUseCase.run(id);

      if (habitat) {
        res.status(200).json({
          status: "success",
          data: habitat
        });
      } else {
        res.status(404).json({
          status: "error",
          message: "El usuario no se encontró"
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
