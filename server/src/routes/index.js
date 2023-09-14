const { Router } = require("express");
const mainRouter = Router();

// route's
const levelRouter = require("./levelRoute");
const userRouter = require("./userRoute");

// entry points
mainRouter.use("/level", levelRouter);
mainRouter.use("/user", userRouter);

module.exports = mainRouter;
