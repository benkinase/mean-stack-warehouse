import express from "express";
import { warehouseControllers } from "../../controllers";

export const warehouseRouter = express.Router();

// Public access
warehouseRouter.get("/", warehouseControllers.getWarehouses);
warehouseRouter.post("/", warehouseControllers.createWarehouse);
warehouseRouter.get("/:warehouseId", warehouseControllers.getWarehouse);
warehouseRouter.patch("/:warehouseId", warehouseControllers.updateWarehouse);
warehouseRouter.delete("/:warehouseId", warehouseControllers.deleteWarehouse);
