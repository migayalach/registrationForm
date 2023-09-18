const { Router } = require("express");
const { postEquipment } = require("../handlers/equipmentHandler");
const equipmentRouter = Router();

equipmentRouter.post("/", postEquipment);
// equipmentRouter.get("/",);
// equipmentRouter.get("/:idEquipment",);
// equipmentRouter.put("/",);
// equipmentRouter.delete("/:idEquipment",);

module.exports = equipmentRouter;
