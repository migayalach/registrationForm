const { Router } = require("express");
const { validateId } = require("../Middleware/toolsMiddleware");
const {
  validateUnitData,
  validateUnitDataPut,
} = require("../Middleware/unitMiddleware");
const {
  postUnit,
  getUnitId,
  getUnitName,
  putUnit,
  deleteUnit,
} = require("../handlers/unitHandler");
const unitRouter = Router();

unitRouter.post("/", validateUnitData, postUnit);
unitRouter.get("/:idUnit", validateId, getUnitId);
unitRouter.get("/", getUnitName);
unitRouter.put("/", validateUnitDataPut, putUnit);
unitRouter.delete("/:idUnit", validateId, deleteUnit);

module.exports = unitRouter;
