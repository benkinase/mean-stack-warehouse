import express, { Request, NextFunction, Application, Response } from "express";
import cors from "cors";
import { wRouter, bRouter } from "./routes";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Node+Typescript");
});

app.use("/api/v2/warehouse", wRouter);
app.use("/api/v2/books", bRouter);
app.use("*", (req, res) => res.status(404).json({ error: "Not found" }));

export default app;
