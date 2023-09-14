const { Router } = require("express");
const {
  postLevel,
  getLevelId,
  getLevelName,
  putLevel,
  deleteLevel,
} = require("../handlers/levelHandler");
const levelRouter = Router();

levelRouter.post("/", postLevel);
levelRouter.get("/:idCharges", getLevelId);
levelRouter.get("/", getLevelName);
levelRouter.put("/", putLevel);
levelRouter.delete("/:idCharges", deleteLevel);

module.exports = levelRouter;
