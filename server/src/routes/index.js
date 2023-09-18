const { Router } = require("express");
const mainRouter = Router();

// route's
const levelRouter = require("./levelRoute");
const userRouter = require("./userRoute");
const categoryRouter = require("./categoryRoute")

// entry points
mainRouter.use("/level", levelRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/category", categoryRouter)

module.exports = mainRouter;
