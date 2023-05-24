import mongoose, { Schema, model } from "mongoose";

const FlightSchema = new Schema({
  name: {type : String, required: true},
  flightNumber: {type: Number, required: true},
  boardingLocation: {type: String, required: true},
  departureLocation: {type: String, required: true},
  takeoff: {type: Date, required: true},
  landing: {type: Date, required: true},
  price: {type: Number, required: true},
  totalSeats: { type: Number, default: 60 },
  bookedSeats: { type: Number, default: 0 },
  usersBooked: [{ type: mongoose.Types.ObjectId }],
});

export const flightModel = new model("flights", FlightSchema);
