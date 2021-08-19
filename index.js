const express = require("express");
require("./Database/conn");
const router = require("./API/index");

const app = express();
app.use(express.json());

app.use(router);

app.listen(3001, () => {
  console.log("server is running ✔");
});
