import { flightModel } from "../../schema/flightModel.js";
export const RemoveFlights = (req, res) => {
  flightModel.deleteOne({ flightNumber: req.body.flightNumber }).then(() => {
    res.send({ message: "Flight Deleted" });
  });
};
