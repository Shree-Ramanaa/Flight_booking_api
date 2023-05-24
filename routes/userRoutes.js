import pkg from "express";

//views
import { BookTicket } from "../controllers/userControllers/bookTickets.js";
import { BookedFlights } from "../controllers/userControllers/bookedFlights.js";
import { searchFlights } from "../controllers/userControllers/searchFlights.js";
import { SignupView } from "../controllers/userControllers/signup.js";

//utils
import { authenticateJwtToken } from "../utils/jwtUtils.js";
import { tryCatch } from "../utils/errorHandler.js";

const userRoutes = pkg.Router();
const protectedRoutes = pkg.Router();

//routes
userRoutes.post("/signup", tryCatch(SignupView));
//protected route
userRoutes.use("/application", authenticateJwtToken, protectedRoutes);
protectedRoutes.post("/search", tryCatch(searchFlights));
protectedRoutes.get("/my_bookings", tryCatch(BookedFlights));
protectedRoutes.post("/book_ticket", tryCatch(BookTicket));
export default userRoutes;
