import express from "express";
import { CreateHabitatController } from "./controllers/CreateHabitatController";
import { GetAllHabitatController } from "./controllers/GetAllHabitatController";
import { GetByIdHabitatController } from "./controllers/GetByIdHabitatController";
import { DeleteHabitatController } from "./controllers/DeleteHabitatController";
import { UpdateHabitatController } from "./controllers/UpdateHabitatController";

import { createHabitatUseCase, getAllHabitatCase, getByIdHabitatUseCase, deleteUserHabitatCase , updateHabitatUseCase } from "./dependencies";

export const userRouter = express.Router();

const createUserController = new CreateHabitatController(createHabitatUseCase);
const getAllUserController = new GetAllHabitatController(getAllHabitatCase);
const getByIdUserController = new GetByIdHabitatController(getByIdHabitatUseCase);
const deleteUserController = new DeleteHabitatController(deleteUserHabitatCase);
const updateHabitatController = new UpdateHabitatController(updateHabitatUseCase)

userRouter.get("/", async (req, res) => {
  await getAllUserController.run(req, res);
});

userRouter.get("/:id", async (req, res) => {
  await getByIdUserController.run(req, res);
});

userRouter.post("/", async (req, res) => {
  await createUserController.run(req, res);
});

userRouter.delete("/:id", async (req, res) => {
  await deleteUserController.run(req, res);
});

userRouter.put('/:id', async (req,res)=>{
  await updateHabitatController.run(req,res)
})
