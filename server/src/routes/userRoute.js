const { Router } = require("express");
const { postUser, putUser, deleteUser } = require("../handlers/userHandler");

const userRouter = Router();
userRouter.post("/", postUser);
// userRouter.get();
userRouter.put("/", putUser);
userRouter.delete("/:idUser", deleteUser);

module.exports = userRouter;
