const { Router } = require("express");
const { postCategory, putCategory } = require("../handlers/categoryHandler");
const categoryRouter = Router();

categoryRouter.post("/", postCategory);
// categoryRouter.get();
categoryRouter.put("/", putCategory);
// categoryRouter.delete();

module.exports = categoryRouter;
