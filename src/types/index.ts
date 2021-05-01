import { Document } from "mongoose";
export interface IBook extends Document {
  _id?: string;
  title: string;
  author: string;
  warehouse: string;
}
export interface IWarehouse extends Document {
  _id?: string;
  name: string;
  address: string;
  capacity: number;
  decommissioned: boolean;
  established?: Date;
}
