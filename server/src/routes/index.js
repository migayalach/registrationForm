const { Router } = require("express");
const mainRouter = Router();

// route's
const levelRouter = require("./levelRoute");
const userRouter = require("./userRoute");
const categoryRouter = require("./categoryRoute");
const equipmentRouter = require("./equipmentRoute");
const unitRouter = require("./unitRoute");
const subUnitRouter = require("./subUnitRoute");
const credentialRouter = require("./credentialRoute");
const formRouter = require("./formRoute");

// entry points
mainRouter.use("/level", levelRouter);
mainRouter.use("/user", userRouter);            //ok
mainRouter.use("/category", categoryRouter);
mainRouter.use("/equipment", equipmentRouter);  //process
mainRouter.use("/unit", unitRouter);
mainRouter.use("/subUnit", subUnitRouter);
mainRouter.use("/credential", credentialRouter);
mainRouter.use("/form", formRouter);

module.exports = mainRouter;
