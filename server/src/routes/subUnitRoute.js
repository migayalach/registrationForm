const { Router } = require("express");
const {
  postSubUnit,
  putSubUnit,
  deleteSubUnit,
} = require("../handlers/subUnitHandler");
const subUnitRouter = Router();

subUnitRouter.post("/", postSubUnit);
// subUnitRouter.get("/",);
// subUnitRouter.get("/",);
subUnitRouter.put("/", putSubUnit);
subUnitRouter.delete("/:idSubUnit", deleteSubUnit);

module.exports = subUnitRouter;
