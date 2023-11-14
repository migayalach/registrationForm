const { Router } = require("express");
const {
  postForm,
  dataSearch,
  getFormId,
  getFormName,
  putForm,
  deleteForm,
} = require("../handlers/formHandler");
const formRouter = Router();

formRouter.post("/", postForm);
formRouter.post("/search", dataSearch)
formRouter.get("/:idForm", getFormId);
formRouter.get("/", getFormName);
formRouter.put("/", putForm);
formRouter.delete("/:idForm", deleteForm);

module.exports = formRouter;
