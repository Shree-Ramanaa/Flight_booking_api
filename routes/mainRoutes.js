import pkg from "express";

import { loginView } from "../controllers/login.js";

//sub routes
import userRoutes from "./userRoutes.js";
import adminRoutes from "./adminRoutes.js";

const mainRoutes = pkg.Router();
mainRoutes.get("/login", loginView);

mainRoutes.use("/user", userRoutes);
mainRoutes.use("/admin", adminRoutes);
export default mainRoutes;
