const { Router } = require("express");
const {
  postCredential,
  getCredentialId,
  putCredential,
  deleteCredential,
} = require("../handlers/credentialHandler");
const credentialRouter = Router();

credentialRouter.post("/", postCredential);
credentialRouter.get("/:idCredential", getCredentialId);
// credentialRouter.get("/",);
credentialRouter.put("/", putCredential);
credentialRouter.delete("/:idCredential", deleteCredential);

module.exports = credentialRouter;
