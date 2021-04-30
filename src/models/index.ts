import mongoose from "mongoose";

const WarehouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Enter warehouse name",
  },
  address: {
    type: String,
    required: "Enter warehouse address",
  },
  capacity: {
    type: Number,
    required: "Enter warehouse capacity",
  },
  established: {
    type: Date,
    default: Date.now,
  },
});
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Enter book title",
  },
  author: {
    type: String,
    required: "Enter author name",
  },
  warehouse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Warehouse",
    required: true,
  },
});

export const Warehouse = mongoose.model("Warehouse", WarehouseSchema);
export const Book = mongoose.model("Book", BookSchema);
