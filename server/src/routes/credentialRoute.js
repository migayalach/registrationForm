const { Router } = require("express");
const { validateId } = require("../Middleware/toolsMiddleware");
const {
  validateCredentialData,
  validateCredentialDataPut,
} = require("../Middleware/credentialMiddleware");
const {
  postCredential,
  getCredentialId,
  getCredentialName,
  putCredential,
  deleteCredential,
} = require("../handlers/credentialHandler");
const credentialRouter = Router();

credentialRouter.post("/", validateCredentialData, postCredential);
credentialRouter.get("/:idCredential", validateId, getCredentialId);
credentialRouter.get("/", getCredentialName);
credentialRouter.put("/", validateCredentialDataPut, putCredential);
credentialRouter.delete("/:idCredential", validateId, deleteCredential);

module.exports = credentialRouter;
