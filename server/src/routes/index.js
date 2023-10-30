const { Router } = require("express");
const mainRouter = Router();

// route's
const userApiRouter = require("./userApiRoute");
const equipmentRouter = require("./equipmentRoute");
const stateRouter = require("./stateRoute");
const proceduresRouter = require("./proceduresRoute");
const unitRouter = require("./unitRoute");
const userRouter = require("./userRoute");
const credentialRouter = require("./credentialRoute");
const formRouter = require("./formRoute");
const loginRouter = require("./loginRoute");

// entry points
mainRouter.use("/login", loginRouter);
mainRouter.use("/userApi", userApiRouter);
mainRouter.use("/equipment", equipmentRouter);
mainRouter.use("/state", stateRouter);
mainRouter.use("/procedures", proceduresRouter);
mainRouter.use("/area", unitRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/credential", credentialRouter);
mainRouter.use("/form", formRouter);

module.exports = mainRouter;
