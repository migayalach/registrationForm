const { Router } = require("express");
const {
  postState,
  getStateId,
  getStateName,
  putState,
  deleteState,
} = require("../handlers/stateHandler");
const stateRouter = Router();

stateRouter.post("/", postState);
stateRouter.get("/:idState", getStateId);
stateRouter.get("/", getStateName);
stateRouter.put("/", putState);
stateRouter.delete("/:idState", deleteState);

module.exports = stateRouter;
