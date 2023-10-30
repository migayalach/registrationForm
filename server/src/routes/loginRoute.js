const { Router } = require("express");
const { getLogin } = require("../handlers/loginHandler");

const loginRouter = Router();

loginRouter.post("/", getLogin);

module.exports = loginRouter;
