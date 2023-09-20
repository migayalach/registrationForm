const { Router } = require("express");
const {
  postSubUnit,
  getSubUnitId,
  putSubUnit,
  deleteSubUnit,
} = require("../handlers/subUnitHandler");
const subUnitRouter = Router();

subUnitRouter.post("/", postSubUnit);
subUnitRouter.get("/:idSubUnit", getSubUnitId);
// subUnitRouter.get("/",);
subUnitRouter.put("/", putSubUnit);
subUnitRouter.delete("/:idSubUnit", deleteSubUnit);

module.exports = subUnitRouter;
