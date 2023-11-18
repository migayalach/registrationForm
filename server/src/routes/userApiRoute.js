const { Router } = require("express");
const { getUserApiId, getUserApiName } = require("../handlers/userApiHandler");

const userApiRouter = Router();
userApiRouter.get("/:idUserApi", getUserApiId);
userApiRouter.get("/", getUserApiName);

module.exports = userApiRouter;
