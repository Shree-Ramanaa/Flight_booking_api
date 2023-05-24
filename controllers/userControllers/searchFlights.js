import { flightModel } from "../../schema/flightModel.js";
export const searchFlights = (req, res) => {
  flightModel
    .find({takeoff : req.date})
    .then((queryResults) => {
      res.send(queryResults);
    })
    .catch((error) => {
      res.send({ message: error });
    });
};
