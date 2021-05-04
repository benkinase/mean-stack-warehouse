import { Request, Response } from "express";
import { Book } from "../../models";
import { IBook } from "../../types";

// Public access
export const allBooks = async (req: Request, res: Response) => {
  try {
    const books: IBook[] = await Book.find({});
    if (!books) {
      return res.status(404).json({ message: "No books available" });
    }
    return res.status(200).send(books);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
export const warehouseBooks = async (req: Request, res: Response) => {
  const warehouseId = req.params.warehouseId;

  try {
    const books: IBook[] = await Book.find({ warehouse: warehouseId });
    if (!books) {
      res.status(404).json({ message: "No books available" });
    }
    return res.status(200).send(books);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

export const createBook = async (req: Request, res: Response) => {
  const warehouse = req.params.warehouseId;
  try {
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      warehouse: warehouse,
    });
    // save new book
    const newBook: IBook = await book.save();

    if (newBook) {
      return res
        .status(201)
        .send({ message: "New book created", book: newBook });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
// find book that belongs to a warehouse
export const getBook = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  //const warehouseId = req.params.warehouseId;

  try {
    // get single book and the warehouse it belongs to
    const book = await Book.findById(bookId).populate("warehouse").lean();
    if (book) {
      res.status(200).json(book);
    }
    return res.status(404).json({ message: "Book not found" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
//
export const updateBook = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  try {
    const updateBook: IBook | null = await Book.findByIdAndUpdate(
      { _id: bookId },
      { $set: req.body }
    );
    return res.status(200).send(updateBook);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
//
export const deleteBook = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  try {
    const book: IBook | null = await Book.findByIdAndRemove({ _id: bookId });
    if (!book) {
      return res.status(404).send({ message: "Book not found!" });
    }
    res.status(204).send({ message: "Book successfully deleted" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
