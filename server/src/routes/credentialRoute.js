const { Router } = require("express");
const { postCredential } = require("../handlers/credentialHandler");
const credentialRouter = Router();

credentialRouter.post("/", postCredential);
// credentialRouter.get("/",);
// credentialRouter.get("/",);
// credentialRouter.put("/",);
// credentialRouter.delete("/",);

module.exports = credentialRouter;
