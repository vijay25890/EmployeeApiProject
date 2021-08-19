const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vijay:vijay@employees.m8naf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Connection Suceesfully ✔");
  })
  .catch((e) => {
    console.log(e);
  });
