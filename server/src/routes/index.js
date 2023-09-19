const { Router } = require("express");
const mainRouter = Router();

// route's
const levelRouter = require("./levelRoute");
const userRouter = require("./userRoute");
const categoryRouter = require("./categoryRoute");
const equipmentRouter = require("./equipmentRoute");
const unitRouter = require("./unitRoute");

// entry points
mainRouter.use("/level", levelRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/category", categoryRouter);
mainRouter.use("/equipment", equipmentRouter);
mainRouter.use("/unit", unitRouter);

module.exports = mainRouter;
