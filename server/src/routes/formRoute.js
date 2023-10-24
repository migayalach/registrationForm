const { Router } = require("express");
const {
  postForm,
  getFormId,
  getFormName,
  // putForm,
  deleteForm,
} = require("../handlers/formHandler");
const formRouter = Router();

formRouter.post("/", postForm);
formRouter.get("/:idForm", getFormId);
formRouter.get("/", getFormName);
// formRouter.put("/", putForm);
formRouter.delete("/:idForm", deleteForm);

module.exports = formRouter;
