const SUCCESS = 200;
const ERROR = 400;

const { createEquipment } = require("../controllers/equipmentControllers");

const postEquipment = async (request, response) => {
  const { name, host, CategoryIdCategory } = request.body;
  try {
    const equipmentRes = await createEquipment(name, host, CategoryIdCategory);
    response.status(SUCCESS).json({create: true, equipmentRes});
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postEquipment,
};
