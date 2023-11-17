const SUCCESS = 200;
const ERROR = 400;
const {
  createProcedures,
  getProceduresSearchId,
  getProceduresSearchName,
  getAllProcedures,
  updateProcedures,
  delProcedures,
} = require("../controllers/proceduresController");

const postProcedures = async (request, response) => {
  const { nameProcedures } = request.body;
  try {
    const newProcedures = await createProcedures({ nameProcedures });
    response.status(SUCCESS).json({
      procedure: true,
      message: "Procedimiento creado exitosamente",
      newProcedures,
    });
  } catch (error) {
    response.status(ERROR).json({ procedure: false, error: error.message });
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

const getProceduresName = async (request, response) => {
  const { nameProcedures } = request.query;
  try {
    const resultProcedures = nameProcedures
      ? await getProceduresSearchName(nameProcedures)
      : await getAllProcedures();
    response.status(SUCCESS).json(resultProcedures);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putProcedures = async (request, response) => {
  const { idProcedures, nameProcedures } = request.body;
  try {
    const updateData = await updateProcedures(idProcedures, nameProcedures);
    response.status(SUCCESS).json({
      procedure: true,
      message: "Procedimiento actualizado exitosamente",
      updateData,
    });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteProcedures = async (request, response) => {
  const { idProcedures } = request.params;
  try {
    const resultDelete = await delProcedures(idProcedures);
    response.status(SUCCESS).json({
      procedure: true,
      message: "Procedimiento eliminado exitosamente",
      resultDelete,
    });
  } catch (error) {
    response.status(ERROR).json({ procedure: false, error: error.message });
  }
};

module.exports = {
  postProcedures,
  getProceduresId,
  getProceduresName,
  putProcedures,
  deleteProcedures,
};
