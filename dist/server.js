"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signale_1 = require("signale");
const cors_1 = __importDefault(require("cors"));
const HabitatRouter_1 = require("./habitat/infrastructure/HabitatRouter");
const app = (0, express_1.default)();
app.disable("x-powered-by");
const signale = new signale_1.Signale();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/habitat", HabitatRouter_1.userRouter);
app.listen(3004, () => {
    signale.success("Server online in port 3004");
});
