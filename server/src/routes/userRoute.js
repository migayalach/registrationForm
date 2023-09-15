const { Router } = require("express");
const { postUser, putUser } = require("../handlers/userHandler");

const userRouter = Router();
userRouter.post("/", postUser);
// userRouter.get();
userRouter.put("/", putUser);
// userRouter.delete("/:idUser");

module.exports = userRouter;
