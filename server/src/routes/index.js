const { Router } = require("express");
const mainRouter =  Router();

// route's
const levelRouter = require("./levelRoute");

// entry points
mainRouter.use("/level", levelRouter);

module.exports = mainRouter;