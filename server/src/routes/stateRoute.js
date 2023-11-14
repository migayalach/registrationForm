const { Router } = require("express");
const {
  validateStateData,
  validateStateId,
  validateStateName,
} = require("../Middleware/stateMiddleware");
const {
  postState,
  getStateId,
  getStateName,
  putState,
  deleteState,
} = require("../handlers/stateHandler");
const stateRouter = Router();

stateRouter.post("/", validateStateData, postState);
stateRouter.get("/:idState", validateStateId, getStateId);
stateRouter.get("/", validateStateName, getStateName);
stateRouter.put("/", validateStateData, putState);
stateRouter.delete("/:idState", validateStateId, deleteState);

module.exports = stateRouter;
