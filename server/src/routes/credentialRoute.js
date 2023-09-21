const { Router } = require("express");
const {
  postCredential,
  putCredential,
  deleteCredential,
} = require("../handlers/credentialHandler");
const credentialRouter = Router();

credentialRouter.post("/", postCredential);
// credentialRouter.get("/",);
// credentialRouter.get("/",);
credentialRouter.put("/", putCredential);
credentialRouter.delete("/:idCredential", deleteCredential);

module.exports = credentialRouter;
