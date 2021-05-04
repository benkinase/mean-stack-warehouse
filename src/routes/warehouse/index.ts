import express from "express";
import {
  warehouseControllers as wc,
  bookControllers as bc,
} from "../../controllers";

export const warehouseRouter = express.Router();

// warehouse routes
warehouseRouter.get("/", wc.getWarehouses);
warehouseRouter.post("/", wc.createWarehouse);
warehouseRouter.get("/books", bc.allBooks);

// require warehouseId
warehouseRouter.get("/:warehouseId", wc.getWarehouse);
warehouseRouter.patch("/:warehouseId", wc.updateWarehouse);
warehouseRouter.delete("/:warehouseId", wc.deleteWarehouse);

// warehouse books routes
warehouseRouter.post("/:warehouseId/books", bc.createBook);
warehouseRouter.get("/:warehouseId/books", bc.warehouseBooks);
warehouseRouter.get("/:warehouseId/books/:bookId", bc.getBook);
warehouseRouter.patch("/:warehouseId/books/:bookId", bc.updateBook);
warehouseRouter.delete("/:warehouseId/books/:bookId", bc.deleteBook);
