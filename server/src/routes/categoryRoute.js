const { Router } = require("express");
const {
  postCategory,
  putCategory,
  deleteCategory,
  getCategoryId,
  getCategoryName
} = require("../handlers/categoryHandler");
const categoryRouter = Router();

categoryRouter.post("/", postCategory);
categoryRouter.get("/:idCategory", getCategoryId);
categoryRouter.get("/", getCategoryName);
categoryRouter.put("/", putCategory);
categoryRouter.delete("/:idCategory", deleteCategory);

module.exports = categoryRouter;
