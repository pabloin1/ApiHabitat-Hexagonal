import { CreateHabitatUseCase } from "../application/CreateHabitatUseCase";
import { DeleteHabitatUseCase } from "../application/DeleteHabitatUseCase";
import { GetAllHabitatUseCase } from "../application/GetAllHabitatUseCase";
import { GetByIdHabitatUseCase } from "../application/GetByIdHabitatUseCase";
import { UpdateHabitatUseCase } from "../application/UpdateHabitatUseCase";

import { CreateHabitatController } from "./controllers/CreateHabitatController";
import { DeleteHabitatController } from "./controllers/DeleteHabitatController";
import { GetAllHabitatController } from "./controllers/GetAllHabitatController";
import { GetByIdHabitatController } from "./controllers/GetByIdHabitatController";
import { UpdateHabitatController } from "./controllers/UpdateHabitatController";

import { MysqlHabitatRepository } from "./MysqlHabitatRepository";


export const mysqlHabitatRepository = new MysqlHabitatRepository();

export const createHabitatUseCase = new CreateHabitatUseCase(
  mysqlHabitatRepository
);

export const getAllHabitatCase = new GetAllHabitatUseCase(
  mysqlHabitatRepository
);
export const getByIdHabitatUseCase = new GetByIdHabitatUseCase(
  mysqlHabitatRepository
);
export const deleteUserHabitatCase = new DeleteHabitatUseCase(
  mysqlHabitatRepository
);

export const updateHabitatUseCase = new UpdateHabitatUseCase(
  mysqlHabitatRepository
)

//----------------------------------------------------------------------------------------------
export const createHabitatController = new CreateHabitatController(
  createHabitatUseCase
);
export const getAllHabitatController = new GetAllHabitatController(
  getAllHabitatCase
);
export const getByIdHabitatController = new GetByIdHabitatController(
  getByIdHabitatUseCase
);

export const deleteHabitatController = new DeleteHabitatController(
  deleteUserHabitatCase
);

export const updateHabitatController = new UpdateHabitatController(
  updateHabitatUseCase
);
