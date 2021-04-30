import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const conn_options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  //poolSize: 50,
};
let db = "mongodb://127.0.0.1:27017/meanStack";
let dbStringConsole = db.split("/")[1];
const PORT = process.env.PORT || 9000;

mongoose
  .connect(db, conn_options)
  .catch((error) => {
    console.error(error.stack), process.exit(1);
  })
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}:${dbStringConsole}`);
    });
  });
