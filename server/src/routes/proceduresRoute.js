const { Router } = require("express");
const {
  postProcedures,
  getProceduresId,
  getProceduresName,
  putProcedures,
  deleteProcedures,
} = require("../handlers/proceduresHandler");
const proceduresRouter = Router();

proceduresRouter.post("/", postProcedures);
proceduresRouter.get("/:idProcedures", getProceduresId);
proceduresRouter.get("/", getProceduresName);
proceduresRouter.put("/", putProcedures);
proceduresRouter.delete("/:idProcedures", deleteProcedures);

module.exports = proceduresRouter;
