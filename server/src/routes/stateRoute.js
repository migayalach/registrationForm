const { Router } = require("express");
const {
  validateId,
} = require("../Middleware/toolsMiddleware");
const {validateStateData, validateStateDataPut} = require("../Middleware/stateMiddleware")

const {
  postState,
  getStateId,
  getStateName,
  putState,
  deleteState,
} = require("../handlers/stateHandler");
const stateRouter = Router();

stateRouter.post("/", validateStateData, postState);
stateRouter.get("/:idState", validateId, getStateId);
stateRouter.get("/", getStateName);
stateRouter.put("/", validateStateDataPut, putState);
stateRouter.delete("/:idState", validateId, deleteState);

module.exports = stateRouter;
