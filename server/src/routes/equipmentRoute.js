const { Router } = require("express");
const {
  postEquipment,
  getEquipmentId,
  getEquipmentName,
  putEquipment,
  deleteEquipment,
} = require("../handlers/equipmentHandler");
const equipmentRouter = Router();

equipmentRouter.post("/", postEquipment);
// equipmentRouter.get("/", getEquipmentName);
equipmentRouter.get("/:idEquipment", getEquipmentId);
equipmentRouter.put("/", putEquipment);
equipmentRouter.delete("/:idEquipment", deleteEquipment);

module.exports = equipmentRouter;
