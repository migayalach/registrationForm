const { Router } = require("express");
const mainRouter = Router();

// route's
const userApiRouter = require("./userApiRoute");
const equipmentRouter = require("./equipmentRoute");
const stateRouter = require("./stateRoute");
const proceduresRouter = require("./proceduresRoute");
const unitRouter = require("./unitRoute");

// const subUnitRouter = require("./subUnitRoute");
// const credentialRouter = require("./credentialRoute");
// const formRouter = require("./formRoute");

// entry points
mainRouter.use("/userApi", userApiRouter);          //ok
mainRouter.use("/equipment", equipmentRouter);      //ok
mainRouter.use("/state", stateRouter);              //ok
mainRouter.use("/procedures", proceduresRouter);    //ok
mainRouter.use("/unit", unitRouter);                //ok





// mainRouter.use("/subUnit", subUnitRouter);

// mainRouter.use("/credential", credentialRouter);
// mainRouter.use("/form", formRouter);

module.exports = mainRouter;
