import { mongooseConnection } from "./database/mongo.js";
import { statusLog } from "./utils/logs.js";
import bodyParser from "body-parser";
import cors from "cors";
import pkg from "express";
import * as dotenv from "dotenv";
import { errorHandler } from "./utils/errorHandler.js";

//routes
import routes from "./routes/mainRoutes.js";


mongooseConnection();
dotenv.config();
const app = pkg();

//middlewares
app.use(cors({ credentials: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// This was the Bug
// app.use("",(req,res,next)=>{
//   res.send("Welcome to Flight ticket booking API");
//   next();
// });
app.use("", routes);
app.use(errorHandler);
app.listen(process.env.PORT || 3000, () => {
  statusLog(`server is listening at ${process.env.PORT}`);
});
