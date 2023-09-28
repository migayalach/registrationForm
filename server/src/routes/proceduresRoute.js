const { Router } = require("express");
const {
  postProcedures,
  getProceduresId,
  getProceduresName,
  putLevel,
  deleteLevel,
} = require("../handlers/proceduresHandler");
const proceduresRouter = Router();

proceduresRouter.post("/", postProcedures);
proceduresRouter.get("/:idProcedures", getProceduresId);
proceduresRouter.get("/", getProceduresName);
// proceduresRouter.put("/", putLevel);
// proceduresRouter.delete("/:idCharges", deleteLevel);

module.exports = proceduresRouter;
