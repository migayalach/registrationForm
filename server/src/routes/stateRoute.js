const { Router } = require("express");
const {
  postState,
  putCategory,
  deleteCategory,
  getCategoryId,
  getCategoryName
} = require("../handlers/stateHandler");
const stateRouter = Router();

stateRouter.post("/", postState);
// stateRouter.get("/:idCategory", getCategoryId);
// stateRouter.get("/", getCategoryName);
// stateRouter.put("/", putCategory);
// stateRouter.delete("/:idCategory", deleteCategory);

module.exports = stateRouter;
