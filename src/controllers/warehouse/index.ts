import { Request, Response } from "express";
import { Book, Warehouse } from "../../models";
import { IWarehouse } from "../../types";

// Public access
export const getWarehouses = async (req: Request, res: Response) => {
  try {
    const warehouse: IWarehouse[] = await Warehouse.find({});
    if (!warehouse) {
      res.status(404).json({ message: "No warehouse available" });
    }
    res.send(warehouse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createWarehouse = async (req: Request, res: Response) => {
  try {
    const warehouse = new Warehouse(req.body);

    const newWarehouse: IWarehouse = await warehouse.save();

    if (newWarehouse) {
      return res.status(201).send({
        message: `New warehouse ${newWarehouse.name} created`,
        data: newWarehouse,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWarehouse = async (req: Request, res: Response) => {
  const warehouseId = req.params.warehouseId;
  try {
    const warehouse = await Warehouse.findById(warehouseId);
    if (warehouse) {
      return res.status(200).send(warehouse);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateWarehouse = async (req: Request, res: Response) => {
  const warehouseId = req.params.warehouseId;
  const wareUpdate = {
    decommissioned: !req.body.decommissioned,
  };

  try {
    const warehouse = await Warehouse.findByIdAndUpdate(
      { _id: warehouseId },
      { $set: wareUpdate }
    );
    res.send(warehouse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// delete warehouse and associated books
export const deleteWarehouse = async (req: Request, res: Response) => {
  const warehouseId = req.params.warehouseId;
  try {
    const warehouse = await Warehouse.findById({ _id: warehouseId }).lean();
    if (!warehouse) {
      res.status(404).send({ message: "Warehouse not found!" });
    }

    await Book.deleteMany({ warehouse: warehouseId });
    await Warehouse.deleteOne(warehouse);
    res.status(202).send({ message: "Warehouse successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
