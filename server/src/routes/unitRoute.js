const { Router } = require("express");
const { postUnit, putUnit } = require("../handlers/unitHandler");
const unitRouter = Router();

unitRouter.post("/", postUnit);
// unitRouter.get("/:idUnit");
// unitRouter.get("/");
unitRouter.put("/", putUnit);
// unitRouter.delete("/:idUnit");

module.exports = unitRouter;
