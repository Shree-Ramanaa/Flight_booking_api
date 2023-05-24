import pkg from "express";

//views
import { BookTicket } from "../controllers/userViews/bookTickets.js";
import { BookedFlights } from "../controllers/userViews/bookedFlights.js";
import { searchFlights } from "../controllers/userViews/searchFlights.js";
import { SignupView } from "../controllers/userViews/signup.js";

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
