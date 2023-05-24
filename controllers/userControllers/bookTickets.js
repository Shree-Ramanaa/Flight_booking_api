import { flightModel } from "../../schema/flightModel.js";
import { userModel } from "../../schema/userModel.js";

export const BookTicket = (req, res) => {
  flightModel
    .findOne({ flightNumber: req.body.flightNumber })
    .then((flightResults) => {
      if (
        flightResults.totalSeats - flightResults.availableSeats >
        req.body.requiredSeats
      ) {
        userModel.findOne({ email: req.email }).then((userResults) => {
          flightModel
            .updateOne(
              { flightNumber: req.body.flightNumber },
              {
                bookedSeats:
                  flightResults.bookedSeats + req.body.requiredSeats,
                $push: { usersBooked: userResults._id },
              }
            )
            .catch((error) => {
              res.send({ message: error });
            });
        });
        userModel
          .updateOne(
            { email: req.email },
            { $push: { bookedFlights: flightResults._id } }
          )
          .then(() => {
            res.sendStatus(201);
          })
          .catch((error) => {
            res.send({ message: error });
          });
      } else {
        res.send({ message: "Seats not available" });
      }
    })
    .catch((error) => {
      res.send({ message: error });
    });
};
