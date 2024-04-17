import express from "express";
import { Signale } from "signale";
import cors from "cors"


import { userRouter } from "./habitat/infrastructure/HabitatRouter";

const app = express();

app.disable("x-powered-by");

const signale = new Signale();

app.use(express.json());
app.use(cors())
app.use("/habitat", userRouter);

app.listen(3004, () => {
  signale.success("Server online in port 3004");
});
