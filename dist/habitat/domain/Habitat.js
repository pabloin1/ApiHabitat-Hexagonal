"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habitat = void 0;
class Habitat {
    constructor(id, id_user, name, interval_review, temperature, humedity, created_at) {
        this.id = id;
        this.id_user = id_user;
        this.name = name;
        this.interval_review = interval_review;
        this.temperature = temperature;
        this.humedity = humedity;
        this.created_at = created_at;
    }
}
exports.Habitat = Habitat;
