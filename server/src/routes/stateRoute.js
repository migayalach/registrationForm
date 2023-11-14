const { Router } = require("express");
const {
  validateData,
  validateId,
  validateDataPut,
} = require("../Middleware/toolsMiddleware");
const {
  postState,
  getStateId,
  getStateName,
  putState,
  deleteState,
} = require("../handlers/stateHandler");
const stateRouter = Router();

stateRouter.post("/", validateData, postState);
stateRouter.get("/:idState", validateId, getStateId);
stateRouter.get("/", getStateName);
stateRouter.put("/", validateDataPut, putState);
stateRouter.delete("/:idState", validateId, deleteState);

module.exports = stateRouter;
