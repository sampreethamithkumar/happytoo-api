const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log(`MongoDB Connected at ${process.env.MONGO_URI}`))
    .catch((e) => console.log(e));
};
