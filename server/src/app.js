const express =  require("express");
const morgan = require("morgan");
const cors =  require("cors");
const app = express();

//Midleware's
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
// app.use("/", mainRouter);
module.exports = app;