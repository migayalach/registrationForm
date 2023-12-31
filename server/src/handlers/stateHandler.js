const SUCCESS = 200;
const ERROR = 400;
const {
  createState,
  getSearchStateId,
  getSearchStateName,
  getAllState,
  updateState,
  delState,
} = require("../controllers/stateControllers");

const postState = async (request, response) => {
  const { name } = request.body;
  try {
    const newState = await createState(name);
    response
      .status(SUCCESS)
      .json({ state: true, message: "Estado creado exitosamente", newState });
  } catch (error) {
    response.status(ERROR).json({ state: false, error: error.message });
  }
};

const getStateId = async (request, response) => {
  const { idState } = request.params;
  try {
    const getIdState = await getSearchStateId(idState);
    response.status(SUCCESS).json(getIdState);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getStateName = async (request, response) => {
  const { name } = request.query;
  try {
    const getNameState = name
      ? await getSearchStateName(name)
      : await getAllState();
    response.status(SUCCESS).json(getNameState);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putState = async (request, response) => {
  const { idState, name } = request.body;
  try {
    const editState = await updateState(idState, name);
    response.status(SUCCESS).json({
      state: true,
      message: "Estado actualizado exitosamente",
      editState,
    });
  } catch (error) {
    response.status(ERROR).json({ state: false, error: error.message });
  }
};

const deleteState = async (request, response) => {
  const { idState } = request.params;
  try {
    const deleteInfo = await delState(idState);
    response.status(SUCCESS).json({
      state: true,
      message: "Estado eliminado exitosamente",
      deleteInfo,
    });
  } catch (error) {
    response.status(ERROR).json({ state: false, error: error.message });
  }
};

module.exports = {
  postState,
  getStateId,
  getStateName,
  putState,
  deleteState,
};
