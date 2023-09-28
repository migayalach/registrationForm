const { Router } = require("express");
const {
  postState,
  getStateId,
  getStateName,
  putState,
  deleteCategory,
} = require("../handlers/stateHandler");
const stateRouter = Router();

stateRouter.post("/", postState);
stateRouter.get("/:idState", getStateId);
stateRouter.get("/", getStateName);
stateRouter.put("/", putState);
// stateRouter.delete("/:idCategory", deleteCategory);

module.exports = stateRouter;
