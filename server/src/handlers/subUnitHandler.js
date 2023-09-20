const SUCCESS = 200;
const ERROR = 400;
const {
  createSubUnit,
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
  putSubUnit,
  deleteSubUnit,
};
