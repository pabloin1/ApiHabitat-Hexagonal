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
exports.DeleteHabitatController = void 0;
class DeleteHabitatController {
    constructor(deleteHabitatUseCase) {
        this.deleteHabitatUseCase = deleteHabitatUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const habitat = yield this.deleteHabitatUseCase.run(id);
                res.status(200).json({
                    status: "success",
                    data: habitat,
                });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    status: "error",
                    message: "Ocurrió un error interno",
                });
            }
        });
    }
}
exports.DeleteHabitatController = DeleteHabitatController;
