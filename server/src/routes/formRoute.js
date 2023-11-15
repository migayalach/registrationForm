const { Router } = require("express");
const { validateId } = require("../Middleware/toolsMiddleware");
const {
  validateFormData,
  validateFormDataPut,
} = require("../Middleware/formMiddleware");
const {
  postForm,
  dataSearch,
  getFormId,
  getFormName,
  putForm,
  deleteForm,
} = require("../handlers/formHandler");
const formRouter = Router();

formRouter.post("/", validateFormData, postForm);
formRouter.post("/search", dataSearch);
formRouter.get("/:idForm", validateId, getFormId);
formRouter.get("/", getFormName);
formRouter.put("/", validateFormDataPut, putForm);
formRouter.delete("/:idForm", validateId, deleteForm);

module.exports = formRouter;
