const { Router } = require("express");
const { postUnit } = require("../handlers/unitHandler");
const unitRouter = Router();

unitRouter.post("/", postUnit);
// unitRouter.get("/:idUnit");
// unitRouter.get("/");
// unitRouter.put("/");
// unitRouter.delete("/:idUnit");

module.exports = unitRouter;
