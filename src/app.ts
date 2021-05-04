import express, { Request, NextFunction, Application, Response } from "express";
import cors from "cors";
import { coreRouter } from "./routes";

// instantiate express
const app: Application = express();

// apply midddleware
app.use(cors());
app.use(express.json());

// home page
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("NodeJS::Express::Typescript server running");
});
// base routes
app.use("/api/v2/warehouses", coreRouter);
app.use("*", (req: Request, res: Response) =>
  res.status(404).json({ error: "Not found" })
);

export default app;
