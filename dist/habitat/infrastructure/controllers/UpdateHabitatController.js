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
exports.UpdateHabitatController = void 0;
class UpdateHabitatController {
    constructor(updateHabitatUseCase) {
        this.updateHabitatUseCase = updateHabitatUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // Suponiendo que el id está en los parámetros de la solicitud
            const data = req.body;
            try {
                const habitat = yield this.updateHabitatUseCase.run(parseInt(id), // Convertir id a número
                data.id_user, data.name, data.interval_review, data.temperature, data.humedity, data.created_at);
                if (habitat) {
                    res.status(200).json({
                        status: "success",
                        data: habitat
                    });
                }
                else {
                    res.status(404).json({
                        status: "error",
                        message: "Habitat no encontrado"
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
exports.UpdateHabitatController = UpdateHabitatController;
