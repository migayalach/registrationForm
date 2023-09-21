const { Router } = require("express");
const {
  postCredential,
  putCredential,
} = require("../handlers/credentialHandler");
const credentialRouter = Router();

credentialRouter.post("/", postCredential);
// credentialRouter.get("/",);
// credentialRouter.get("/",);
credentialRouter.put("/", putCredential);
// credentialRouter.delete("/",);

module.exports = credentialRouter;
