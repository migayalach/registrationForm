const SUCCESS = 200;
const ERROR = 400;
const {
  createSubUnit,
  getSubUnitDataId,
  getNameSubUnit,
  getAllSubUnit,
  updateSubUnit,
  deleteDataSubUnit,
} = require("../controllers/subUnitControllers");

const postSubUnit = async (request, response) => {
  const { nameSubUnit, UnitIdUnit } = request.body;
  try {
    const responseInfo = await createSubUnit(nameSubUnit, UnitIdUnit);
    response.status(SUCCESS).json(responseInfo);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getSubUnitId = async (request, response) => {
  const { idSubUnit } = request.params;
  try {
    const getSubUnit = await getSubUnitDataId(idSubUnit);
    response.status(SUCCESS).json(getSubUnit);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getSubUnitName = async (request, response) => {
  const { nameSubUnit } = request.query;
  try {
    const resSubUnit = nameSubUnit
      ? await getNameSubUnit(nameSubUnit)
      : await getAllSubUnit();
    response.status(SUCCESS).json(resSubUnit);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putSubUnit = async (request, response) => {
  const { idSubUnit, nameSubUnit, UnitIdUnit } = request.body;
  try {
    const dataResponse = await updateSubUnit(
      idSubUnit,
      nameSubUnit,
      UnitIdUnit
    );
    response.status(SUCCESS).json({ update: true, dataResponse });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteSubUnit = async (request, response) => {
  const { idSubUnit } = request.params;
  try {
    const delSubUnit = await deleteDataSubUnit(idSubUnit);
    response.status(ERROR).json(delSubUnit);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postSubUnit,
  getSubUnitId,
  getSubUnitName,
  putSubUnit,
  deleteSubUnit,
};
