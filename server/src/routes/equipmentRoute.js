const { Router } = require("express");
const { validateId } = require("../Middleware/toolsMiddleware");
const {
  validateEquipmentData,
  validateEquipmentDataPut,
} = require("../Middleware/equipmentMiddleware");

const {
  postEquipment,
  getEquipmentId,
  getEquipmentName,
  putEquipment,
  deleteEquipment,
} = require("../handlers/equipmentHandler");
const equipmentRouter = Router();

equipmentRouter.post("/", validateEquipmentData, postEquipment);
equipmentRouter.get("/", getEquipmentName);
equipmentRouter.get("/:idEquipment", validateId, getEquipmentId);
equipmentRouter.put("/", validateEquipmentDataPut, putEquipment);
equipmentRouter.delete("/:idEquipment", validateId, deleteEquipment);

module.exports = equipmentRouter;
