const { Router } = require("express");
const {
  postSubUnit,
  getSubUnitId,
  getSubUnitName,
  putSubUnit,
  deleteSubUnit,
} = require("../handlers/subUnitHandler");
const subUnitRouter = Router();

subUnitRouter.post("/", postSubUnit);
subUnitRouter.get("/:idSubUnit", getSubUnitId);
subUnitRouter.get("/", getSubUnitName);
subUnitRouter.put("/", putSubUnit);
subUnitRouter.delete("/:idSubUnit", deleteSubUnit);

module.exports = subUnitRouter;
