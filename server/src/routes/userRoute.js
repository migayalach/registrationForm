const { Router } = require("express");
const { postUser } = require("../handlers/userHandler");

const userRouter = Router();
userRouter.post("/", postUser);
// userRouter.get();
// userRouter.put();
// userRouter.delete("/:idUser");

module.exports = userRouter;
