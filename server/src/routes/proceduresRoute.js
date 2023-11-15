const { Router } = require("express");
const { validateId } = require("../Middleware/toolsMiddleware");
const {
  validateProcedureData,
  validateProcedureDataPut,
} = require("../Middleware/procedureMiddleware");

const {
  postProcedures,
  getProceduresId,
  getProceduresName,
  putProcedures,
  deleteProcedures,
} = require("../handlers/proceduresHandler");
const proceduresRouter = Router();

proceduresRouter.post("/", validateProcedureData, postProcedures);
proceduresRouter.get("/:idProcedures", validateId, getProceduresId);
proceduresRouter.get("/", getProceduresName);
proceduresRouter.put("/", validateProcedureDataPut, putProcedures);
proceduresRouter.delete("/:idProcedures", validateId, deleteProcedures);

module.exports = proceduresRouter;
