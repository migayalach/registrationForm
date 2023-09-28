const { Router } = require("express");
const {
  postProcedures,
  getProceduresId,
  getLevelName,
  putLevel,
  deleteLevel,
} = require("../handlers/proceduresHandler");
const proceduresRouter = Router();

proceduresRouter.post("/", postProcedures);
proceduresRouter.get("/:idProcedures", getProceduresId);
// proceduresRouter.get("/", getLevelName);
// proceduresRouter.put("/", putLevel);
// proceduresRouter.delete("/:idCharges", deleteLevel);

module.exports = proceduresRouter;
