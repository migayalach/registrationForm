const { Router } = require("express");
const {
  postEquipment,
  putEquipment,
  deleteEquipment,
} = require("../handlers/equipmentHandler");
const equipmentRouter = Router();

equipmentRouter.post("/", postEquipment);
// equipmentRouter.get("/",);
// equipmentRouter.get("/:idEquipment",);
equipmentRouter.put("/", putEquipment);
equipmentRouter.delete("/:idEquipment", deleteEquipment);

module.exports = equipmentRouter;
