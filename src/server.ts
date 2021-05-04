import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const conn_options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  poolSize: 50,
};
const URI = process.env.MONGO_LOCAL;
const dbString = URI.split("/")[3];

const PORT = process.env.PORT || 9000;

mongoose
  .connect(URI, conn_options)
  .catch((error) => {
    console.error(error.stack), process.exit(1);
  })
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}=>${dbString}`);
    });
  });
