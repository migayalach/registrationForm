const { Router } = require("express");
const {
  postCredential,
  getCredentialId,
  getCredentialName,
  putCredential,
  deleteCredential,
} = require("../handlers/credentialHandler");
const credentialRouter = Router();

credentialRouter.post("/", postCredential);
credentialRouter.get("/:idCredential", getCredentialId);
credentialRouter.get("/", getCredentialName);
credentialRouter.put("/", putCredential);
credentialRouter.delete("/:idCredential", deleteCredential);

module.exports = credentialRouter;
