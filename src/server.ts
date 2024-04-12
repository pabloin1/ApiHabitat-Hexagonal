import express from "express";
import { Signale } from "signale";

//kljkjkk

import { userRouter } from "./habitat/infrastructure/HabitatRouter";

const app = express();

app.disable("x-powered-by");

const signale = new Signale();

app.use(express.json());
app.use("/habitat", userRouter);

app.listen(3000, () => {
  signale.success("Server online in port 3000");
});
