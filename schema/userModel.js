import mongoose,{ Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: {type: String, required: true},
  password:{type: String, required: true},
  isAdmin: {type: Boolean, required: true},
  bookedFlights: [{ type: mongoose.Types.ObjectId }],
});

export const userModel = new model("user", UserSchema);
