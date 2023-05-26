import { flightModel } from "../../schema/flightModel.js";
import { userModel } from "../../schema/userModel.js";

export const BookedFlights = (req, res) => {
  userModel
    .findOne({ email: req.body.email })
    .select("bookedFlights")
    .then((queryResult) => {
      flightModel
        .find({ _id: { $in: queryResult.bookedFlights } })
        .then((flightResults) => {
          res.send(flightResults);
        });
    })
    .catch((error) => {
      res.send({ message: error });
    });
};
