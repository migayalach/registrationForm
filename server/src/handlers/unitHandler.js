const SUCCESS = 200;
const ERROR = 400;
const { createUnit, updateUnit } = require("../controllers/unitControllers");
const postUnit = async (request, response) => {
  const { nameUnit } = request.body;
  try {
    const newUnit = await createUnit({ nameUnit });
    response.status(SUCCESS).json({ create: true, name: newUnit.nameUnit });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putUnit = async (request, response) => {
  const { idUnit, nameUnit } = request.body;
  try {
    const updateData = await updateUnit(idUnit, nameUnit);
    response.status(SUCCESS).json(updateData);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postUnit,
  putUnit,
};
