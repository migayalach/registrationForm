const { Router } = require("express");
const {postCategory} = require("../handlers/categoryHandler")
const categoryRouter = Router();

categoryRouter.post("/", postCategory);
// categoryRouter.get();
// categoryRouter.put();
// categoryRouter.delete();

module.exports = categoryRouter;
