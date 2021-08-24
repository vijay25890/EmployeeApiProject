const express = require("express");
require("./Database/conn");
const router = require("./API/index");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

app.listen(3001, () => {
  console.log("server is running ✔");
});
