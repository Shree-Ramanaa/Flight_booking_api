import { flightModel } from "../../schema/flightModel.js";
import { userModel } from "../../schema/userModel.js";

export const ViewBookings = async (req, res) => {
  const arr = [];
  await flightModel
    .find()
    .then((queryResults) => {
      var data = queryResults;
      const fun = async function () {
        for (let i = 0; i < data.length; i++) {
          const userdetails = [];
          for (let j = 0; j < data[i].usersBooked.length; j++) {
            const id = data[i].usersBooked[j];

            await userModel
              .findOne({ _id: id })
              .select("email")
              .then((result) => {
                userdetails.push(result);
              });
          }
          arr.push({
            name: data[i].name,
            num: data[i].flightNumber,
            bookedusers: userdetails
          });
        }
        res.send(arr);
      };
      fun();
    })
    .catch((error) => {
      console.log(error);
      res.send({ message: error });
    });
};
