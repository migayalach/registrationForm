const { Router } = require("express");
const { postUnit, putUnit, deleteUnit } = require("../handlers/unitHandler");
const unitRouter = Router();

unitRouter.post("/", postUnit);
// unitRouter.get("/:idUnit");
// unitRouter.get("/");
unitRouter.put("/", putUnit);
unitRouter.delete("/:idUnit", deleteUnit);

module.exports = unitRouter;
