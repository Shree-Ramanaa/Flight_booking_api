import pkg from "express";
//views
import { AddFlights } from "../controllers/adminViews/addFlights.js";
import { RemoveFlights } from "../controllers/adminViews/removeFlights.js";
import { ViewBookings } from "../controllers/adminViews/viewBookings.js";
import { tryCatch } from "../utils/errorHandler.js";

//jwt auth
import { authenticateAdminJwtToken } from "../utils/jwtUtils.js";

const adminRoutes = pkg.Router();
const protectedRoutes = pkg.Router();
//routes
//protected routes
adminRoutes.use("/application", authenticateAdminJwtToken, protectedRoutes);
protectedRoutes.post("/add_flights", tryCatch(AddFlights));
protectedRoutes.post("/remove_flights", tryCatch(RemoveFlights));
protectedRoutes.get("/view_bookings", tryCatch(ViewBookings));

export default adminRoutes;
