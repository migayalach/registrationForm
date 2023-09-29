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

// entry points
mainRouter.use("/userApi", userApiRouter);          //ok
mainRouter.use("/equipment", equipmentRouter);      //ok
mainRouter.use("/state", stateRouter);              //ok
mainRouter.use("/procedures", proceduresRouter);    //ok
mainRouter.use("/area", unitRouter);                //ok
mainRouter.use("/user", userRouter);                //falta
mainRouter.use("/credential", credentialRouter);    //falta
mainRouter.use("/form", formRouter);                //falta     



module.exports = mainRouter;
