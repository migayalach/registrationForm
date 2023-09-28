const SUCCESS = 200;
const ERROR = 400;
const {
  createState,
  getSearchStateId,
  getSearchCategoryName,
  getAllCategory,
  updateCategory,
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

const getCategoryName = async (request, response) => {
  const { name } = request.query;
  try {
    const getNameCategory = name
      ? await getSearchCategoryName(name)
      : await getAllCategory();
    response.status(SUCCESS).json(getNameCategory);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putCategory = async (request, response) => {
  const { idCategory, name } = request.body;
  try {
    const editCategory = await updateCategory(idCategory, name);
    response.status(SUCCESS).json({ update: true, editCategory });
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
  getCategoryName,
  putCategory,
  deleteCategory,
};
