const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./routes");
const app = express();

//Midleware's
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/forms", mainRouter);
module.exports = app;
