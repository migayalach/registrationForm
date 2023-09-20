const SUCCESS = 200;
const ERROR = 400;
const {
  createUnit,
  getUnitSearchID,
  updateUnit,
  delUnit,
} = require("../controllers/unitControllers");

const postUnit = async (request, response) => {
  const { nameUnit } = request.body;
  try {
    const newUnit = await createUnit({ nameUnit });
    response.status(SUCCESS).json({ create: true, name: newUnit.nameUnit });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getUnitId = async (request, response) => {
  const { idUnit } = request.params;
  try {
    const searchUnitIdU = await getUnitSearchID(idUnit);
    response.status(SUCCESS).json(searchUnitIdU);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getUnitName = (request, response) => {
  try {
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getAllUnit = (request, response) => {
  try {
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

const deleteUnit = async (request, response) => {
  const { idUnit } = request.params;
  try {
    const deleteData = await delUnit(idUnit);
    response.status(SUCCESS).json(deleteData);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postUnit,
  getUnitId,
  getUnitName,
  putUnit,
  deleteUnit,
};
