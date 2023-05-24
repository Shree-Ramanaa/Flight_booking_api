import mongoose from "mongoose";
import { statusLog } from "../utils/logs.js";
import * as dotenv from "dotenv";
dotenv.config();

export const mongooseConnection = () => {
  const mongoUrl = process.env.MONGO_URL;
  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    statusLog("mongo connected");
  });
};
