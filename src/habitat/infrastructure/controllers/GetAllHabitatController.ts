import { Request, Response } from "express";
import { GetAllHabitatUseCase } from "../../application/GetAllHabitatUseCase";

export class GetAllHabitatController {
  constructor(private readonly getAllHabitatUseCase: GetAllHabitatUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const habitats = await this.getAllHabitatUseCase.run();
      res.status(200).json({
        status: "success",
        data: habitats
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        message: "Ocurrió un error interno"
      });
    }
  }
}
