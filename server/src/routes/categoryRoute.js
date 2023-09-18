const { Router } = require("express");
const { postCategory, putCategory, deleteCategory } = require("../handlers/categoryHandler");
const categoryRouter = Router();

categoryRouter.post("/", postCategory);
// categoryRouter.get();
categoryRouter.put("/", putCategory);
categoryRouter.delete("/:idCategory", deleteCategory);

module.exports = categoryRouter;
