const SUCCESS = 200;
const ERROR = 400;
const {
  createProcedures,
  getProceduresSearchId,
  getLevelSearchName,
  getAllLevel,
  updateLevel,
  delLevel,
} = require("../controllers/proceduresController");

const postProcedures = async (request, response) => {
  const { nameProcedures } = request.body;
  try {
    const newProcedures = await createProcedures({ nameProcedures });
    response.status(SUCCESS).json({ create: true, newProcedures });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getProceduresId = async (request, response) => {
  const { idProcedures } = request.params;
  try {
    const searchId = await getProceduresSearchId(idProcedures);
    response.status(SUCCESS).json(searchId);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getLevelName = async (request, response) => {
  const { nameLevel } = request.query;
  try {
    const resultLevel = nameLevel
      ? await getLevelSearchName(nameLevel)
      : await getAllLevel();
    response.status(SUCCESS).json(resultLevel);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putLevel = async (request, response) => {
  const { idCharges, nameLevel } = request.body;
  try {
    const updateData = await updateLevel(idCharges, nameLevel);
    response.status(SUCCESS).json(updateData);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteLevel = async (request, response) => {
  const { idCharges } = request.params;
  try {
    const resultDelete = await delLevel(idCharges);
    response.status(SUCCESS).json({ success: true, resultDelete });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postProcedures,
  getProceduresId,
  getLevelName,
  putLevel,
  deleteLevel,
};
