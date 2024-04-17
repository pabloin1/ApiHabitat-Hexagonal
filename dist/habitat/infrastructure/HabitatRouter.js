"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const CreateHabitatController_1 = require("./controllers/CreateHabitatController");
const GetAllHabitatController_1 = require("./controllers/GetAllHabitatController");
const GetByIdHabitatController_1 = require("./controllers/GetByIdHabitatController");
const DeleteHabitatController_1 = require("./controllers/DeleteHabitatController");
const UpdateHabitatController_1 = require("./controllers/UpdateHabitatController");
const dependencies_1 = require("./dependencies");
exports.userRouter = express_1.default.Router();
const createUserController = new CreateHabitatController_1.CreateHabitatController(dependencies_1.createHabitatUseCase);
const getAllUserController = new GetAllHabitatController_1.GetAllHabitatController(dependencies_1.getAllHabitatCase);
const getByIdUserController = new GetByIdHabitatController_1.GetByIdHabitatController(dependencies_1.getByIdHabitatUseCase);
const deleteUserController = new DeleteHabitatController_1.DeleteHabitatController(dependencies_1.deleteUserHabitatCase);
const updateHabitatController = new UpdateHabitatController_1.UpdateHabitatController(dependencies_1.updateHabitatUseCase);
exports.userRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield getAllUserController.run(req, res);
}));
exports.userRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield getByIdUserController.run(req, res);
}));
exports.userRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield createUserController.run(req, res);
}));
exports.userRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield deleteUserController.run(req, res);
}));
exports.userRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield updateHabitatController.run(req, res);
}));
