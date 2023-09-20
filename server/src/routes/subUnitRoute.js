const { Router } = require("express");
const { postSubUnit, putSubUnit } = require("../handlers/subUnitHandler");
const subUnitRouter = Router();

subUnitRouter.post("/", postSubUnit);
// subUnitRouter.get("/",);
// subUnitRouter.get("/",);
subUnitRouter.put("/", putSubUnit);
// subUnitRouter.delete("/",);

module.exports = subUnitRouter;
