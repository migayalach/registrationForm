const { Router } = require("express");
const {
  postLevel,
  getLevel,
  putLevel,
  deleteLevel,
} = require("../handlers/levelHandler");
const levelRouter = Router();

levelRouter.post("/", postLevel);
levelRouter.get("/", getLevel);
levelRouter.put("/", putLevel);
levelRouter.delete("/", deleteLevel);

module.exports = levelRouter;
