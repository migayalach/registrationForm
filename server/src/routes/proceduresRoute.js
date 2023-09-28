const { Router } = require("express");
const {
  postProcedures,
  getProceduresId,
  getProceduresName,
  putProcedures,
  deleteLevel,
} = require("../handlers/proceduresHandler");
const proceduresRouter = Router();

proceduresRouter.post("/", postProcedures);
proceduresRouter.get("/:idProcedures", getProceduresId);
proceduresRouter.get("/", getProceduresName);
proceduresRouter.put("/", putProcedures);
// proceduresRouter.delete("/:idCharges", deleteLevel);

module.exports = proceduresRouter;
