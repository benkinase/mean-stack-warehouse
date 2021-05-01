import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const conn_options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  poolSize: 50,
};
let URI: string = process.env.MONGO_LOCAL;
let dbStringConsole = URI.split("/")[3];

const PORT: string | number = process.env.PORT || 9000;

mongoose
  .connect(URI, conn_options)
  .catch((error) => {
    console.error(error.stack), process.exit(1);
  })
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}=>${dbStringConsole}`);
    });
  });
