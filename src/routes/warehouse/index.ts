import express, { Request, Response } from "express";
import { Warehouse } from "../../models";

export const wRouter = express.Router();

// Public access
wRouter.get("/", async (req: Request, res: Response) => {
  try {
    const warehouse = await Warehouse.find({});
    if (warehouse.length < 1) {
      res.send(200).json({ message: "No warehouse available" });
    }
    res.send(warehouse);
  } catch (error) {
    res.status(404).json({ error: "Not found" });
  }
});
wRouter.post("/", async (req: Request, res: Response) => {
  try {
    const warehouse = new Warehouse({
      name: req.body.name,
      address: req.body.address,
      capacity: req.body.capacity,
    });

    const newWarehouse = await warehouse.save();

    if (newWarehouse) {
      return res
        .status(201)
        .send({ message: "New Warehouse Created", data: newWarehouse });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Error in creating warehouse." });
  }
});
