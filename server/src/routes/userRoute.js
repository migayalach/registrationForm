const { Router } = require("express");
const {
  postUser,
  getUserId,
  getUserName,
  putUser,
  deleteUser,
} = require("../handlers/userHandler");

const userRouter = Router();
userRouter.post("/", postUser);
userRouter.get("/:idUser", getUserId);
userRouter.get("/", getUserName)
userRouter.put("/", putUser);
userRouter.delete("/:idUser", deleteUser);

module.exports = userRouter;
