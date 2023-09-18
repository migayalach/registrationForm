const { Router } = require("express");
const { postCategory, putCategory, deleteCategory, getCategoryId } = require("../handlers/categoryHandler");
const categoryRouter = Router();

categoryRouter.post("/", postCategory);
categoryRouter.get("/:idCategory", getCategoryId);
categoryRouter.put("/", putCategory);
categoryRouter.delete("/:idCategory", deleteCategory);

module.exports = categoryRouter;
