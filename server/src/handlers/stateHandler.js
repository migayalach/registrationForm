const SUCCESS = 200;
const ERROR = 400;
const {
  createState,
  getSearchStateId,
  getSearchStateName,
  getAllState,
  updateState,
  delCategory,
} = require("../controllers/stateControllers");

const postState = async (request, response) => {
  const { name } = request.body;
  try {
    const newState = await createState(name);
    response.status(SUCCESS).json({ create: true, newState });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
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
    response.status(SUCCESS).json({ update: true, editState });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteCategory = async (request, response) => {
  const { idCategory } = request.params;
  try {
    const deleteInfo = await delCategory(idCategory);
    response.status(SUCCESS).json({ delete: true, deleteInfo });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postState,
  getStateId,
  getStateName,
  putState,
  deleteCategory,
};
