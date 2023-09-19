const SUCCESS = 200;
const ERROR = 400;

const {
  createEquipment,
  updateEquipment,
  deleteDataEquipment,
} = require("../controllers/equipmentControllers");

const postEquipment = async (request, response) => {
  const { name, host, CategoryIdCategory } = request.body;
  try {
    const equipmentRes = await createEquipment(name, host, CategoryIdCategory);
    response.status(SUCCESS).json({ create: true, equipmentRes });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putEquipment = async (request, response) => {
  const { idEquipment, name, host, CategoryIdCategory } = request.body;
  try {
    const dataResponse = await updateEquipment(
      idEquipment,
      name,
      host,
      CategoryIdCategory
    );
    response.status(SUCCESS).json({
      update: true,
      name: dataResponse.name,
      host: dataResponse.host,
      category: dataResponse.category,
    });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteEquipment = async (request, response) => {
  const { idEquipment } = request.params;
  try {
    const delEquipment = await deleteDataEquipment(idEquipment);
    response.status(SUCCESS).json(delEquipment);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postEquipment,
  putEquipment,
  deleteEquipment,
};
