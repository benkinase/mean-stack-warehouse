import express, { Request, Response } from "express";
import { Book } from "../../models";

export const bRouter = express.Router();

// Public access
bRouter.get("/", async (req: Request, res: Response) => {
  try {
    const books = await Book.find({});
    if (!books) {
      res.send(200).json({ message: "No books available" });
    }
    res.send(books);
  } catch (error) {
    res.status(404).json({ error: "Error fetching books" });
  }
});

bRouter.post("/", async (req: Request, res: Response) => {
  try {
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      warehouse: req.body.warehouse,
    });
    // save new book
    const newBook = await book.save();

    if (newBook) {
      return res
        .status(201)
        .send({ message: "New Book Created", data: newBook });
    }
  } catch (error) {
    return res.status(500).send({ message: "Error in creating book." });
  }
});
