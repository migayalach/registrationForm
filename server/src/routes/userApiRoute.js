const { Router } = require("express");
const {
  postUserApi,
  getUserApiId,
  getUserApiName,
  putUserApi,
  deleteUserApi,
} = require("../handlers/userApiHandler");

const userApiRouter = Router();
// userApiRouter.post("/", postUserApi);
// userApiRouter.get("/:idUserApi", getUserApiId);
userApiRouter.get("/", getUserApiName)
// userApiRouter.put("/", putUserApi);
// userApiRouter.delete("/:idUserApi", deleteUserApi);

module.exports = userApiRouter;
