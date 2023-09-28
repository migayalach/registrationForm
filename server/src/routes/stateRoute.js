const { Router } = require("express");
const {
  postState,
  getStateId,
  getCategoryName,
  putCategory,
  deleteCategory,
} = require("../handlers/stateHandler");
const stateRouter = Router();

stateRouter.post("/", postState);
stateRouter.get("/:idState", getStateId);
// stateRouter.get("/", getCategoryName);
// stateRouter.put("/", putCategory);
// stateRouter.delete("/:idCategory", deleteCategory);

module.exports = stateRouter;
