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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHabitatController = void 0;
class CreateHabitatController {
    constructor(createHabitatUseCase) {
        this.createHabitatUseCase = createHabitatUseCase;
    }
    //Cambiar 
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const habitat = yield this.createHabitatUseCase.run(data.id_user, data.name, data.interval_review, data.temperature, data.humedity, data.created_at = new Date().toISOString());
                if (habitat) {
                    res.status(201).json({
                        status: "success",
                        data: habitat
                    });
                }
                else {
                    res.status(400).json({
                        status: "error",
                        message: "No se pudo crear el usuario"
                    });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    status: "error",
                    message: "Ocurrió un error interno"
                });
            }
        });
    }
}
exports.CreateHabitatController = CreateHabitatController;
