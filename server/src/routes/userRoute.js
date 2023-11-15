const { Router } = require("express");
const { validateId } = require("../Middleware/toolsMiddleware");
const {
  validateUserData,
  validateUserDataPut,
} = require("../Middleware/userMiddleware");
const {
  postUser,
  getUserId,
  getUserName,
  putUser,
  deleteUser,
} = require("../handlers/userHandler");

const userRouter = Router();
userRouter.post("/", validateUserData, postUser);
userRouter.get("/:idUser", validateId, getUserId);
userRouter.get("/", getUserName);
userRouter.put("/", validateUserDataPut, putUser);
userRouter.delete("/:idUser", validateId, deleteUser);

module.exports = userRouter;
