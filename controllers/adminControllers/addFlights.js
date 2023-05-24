import { flightModel } from "../../schema/flightModel.js";

export const AddFlights = (req, res) => {
  let newFlight = flightModel(req.body);
  newFlight
    .save()
    .then(() => {
      res.send({ message: "Flight Added" });
    })
    .catch((err) => {
      res.send({ message: err });
    });
};
