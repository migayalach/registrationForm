const { Router } = require("express");
const { validateLogin } = require("../Middleware/loginMiddleware");
const { getLogin } = require("../handlers/loginHandler");

const loginRouter = Router();

loginRouter.post("/", validateLogin, getLogin);

module.exports = loginRouter;
