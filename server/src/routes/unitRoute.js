const { Router } = require("express");
const {
  postUnit,
  getUnitId,
  getUnitName,
  putUnit,
  deleteUnit,
} = require("../handlers/unitHandler");
const unitRouter = Router();

unitRouter.post("/", postUnit);
unitRouter.get("/:idUnit", getUnitId);
unitRouter.get("/", getUnitName);
unitRouter.put("/", putUnit);
unitRouter.delete("/:idUnit", deleteUnit);

module.exports = unitRouter;
