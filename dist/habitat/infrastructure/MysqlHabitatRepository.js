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
exports.MysqlHabitatRepository = void 0;
const mysql_1 = require("../../database/mysql");
const Habitat_1 = require("../domain/Habitat");
class MysqlHabitatRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM habitats";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataHabitat = Object.values(JSON.parse(JSON.stringify(data)));
                return dataHabitat.map((habitat) => new Habitat_1.Habitat(habitat.id, habitat.id_user, habitat.name, habitat.interval_review, habitat.temperature, habitat.humidity, habitat.created_at));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(habitatId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM habitats WHERE id=?";
            const params = [habitatId];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Habitat_1.Habitat(result[0].id, result[0].id_user, result[0].name, result[0].interval_review, result[0].temperature, result[0].humidity, result[0].created_at);
            }
            catch (error) {
                return null;
            }
        });
    }
    createHabitat(id_user, name, interval_review, temperature, humedity, created_at) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `INSERT INTO habitats (
        id_user,
        name,
        interval_review,
        temperature,
        humidity,
        created_at) VALUES (?,?,?,?,?,?)`;
            const params = [
                id_user,
                name,
                interval_review,
                temperature,
                humedity,
                created_at
            ];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Habitat_1.Habitat(result.insertId, id_user, name, interval_review, temperature, humedity, created_at);
            }
            catch (error) {
                return null;
            }
        });
    }
    deleteHabitat(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM habitats WHERE id=?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Habitat_1.Habitat(result.id, result.id_user, result.name, result.interval_review, result.temperature, result.humedity, result.created_at);
            }
            catch (error) {
                return null;
            }
        });
    }
    updateHabitat(id, id_user, name, interval_review, temperature, humedity, created_at) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE habitats SET id_user=?, name=?, interval_review=?, temperature=?, humidity=?, created_at=? WHERE id=?";
            const params = [
                id_user,
                name,
                interval_review,
                temperature,
                humedity,
                created_at,
                id,
            ];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                // El objeto Result es un objeto que contiene info generada de la bd
                /* No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Habitat_1.Habitat(id, id_user, name, interval_review, temperature, humedity, created_at);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MysqlHabitatRepository = MysqlHabitatRepository;
