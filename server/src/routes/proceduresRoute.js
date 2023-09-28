const { Router } = require("express");
const {
  postProcedures,
  getLevelId,
  getLevelName,
  putLevel,
  deleteLevel,
} = require("../handlers/proceduresHandler");
const proceduresRouter = Router();

proceduresRouter.post("/", postProcedures);
// proceduresRouter.get("/:idCharges", getLevelId);
// proceduresRouter.get("/", getLevelName);
// proceduresRouter.put("/", putLevel);
// proceduresRouter.delete("/:idCharges", deleteLevel);

module.exports = proceduresRouter;
