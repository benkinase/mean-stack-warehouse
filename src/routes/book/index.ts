import express from "express";
import { bookControllers } from "../../controllers";

// instantiate express router
export const bookRouter = express.Router();

// Public access
bookRouter.get("/", bookControllers.getBooks);
bookRouter.post("/:warehouseId", bookControllers.createBook);
bookRouter.get("/:warehouseId", bookControllers.warehouseBooks);
bookRouter.get("/:warehouseId/:bookId", bookControllers.getBook);
bookRouter.patch("/:warehouseId/:bookId", bookControllers.updateBook);
bookRouter.delete("/:warehouseId/:bookId", bookControllers.deleteBook);
