import { Request, Response } from "express";
import { DeleteHabitatUseCase } from "../../application/DeleteHabitatUseCase";

export class DeleteHabitatController {
  constructor(private readonly deleteHabitatUseCase: DeleteHabitatUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const habitat = await this.deleteHabitatUseCase.run(id);

      res.status(200).json({
        status: "success",
        data: habitat,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        message: "Ocurrió un error interno",
      });
    }
  }
}
