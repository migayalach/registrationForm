const { Router } = require("express");
const mainRouter = Router();

// route's
const userRouter = require("./userRoute");
const equipmentRouter = require("./equipmentRoute");
const stateRouter = require("./stateRoute");

// const levelRouter = require("./levelRoute");
// const unitRouter = require("./unitRoute");
// const subUnitRouter = require("./subUnitRoute");
// const credentialRouter = require("./credentialRoute");
// const formRouter = require("./formRoute");

// entry points
mainRouter.use("/user", userRouter);            //ok
mainRouter.use("/equipment", equipmentRouter);  //ok
mainRouter.use("/state", stateRouter);    // => estado




// mainRouter.use("/level", levelRouter);          // => procedimiento

// mainRouter.use("/unit", unitRouter);            
// mainRouter.use("/subUnit", subUnitRouter);

// mainRouter.use("/credential", credentialRouter);
// mainRouter.use("/form", formRouter);

module.exports = mainRouter;
