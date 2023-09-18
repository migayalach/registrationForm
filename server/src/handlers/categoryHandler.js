const SUCCESS = 200;
const ERROR = 400;
const {
  createCategory,
  getSearchCategoryId,
  updateCategory,
  delCategory,
} = require("../controllers/categoryControllers");

const postCategory = async (request, response) => {
  const { name } = request.body;
  try {
    const newCategory = await createCategory(name);
    response.status(SUCCESS).json({ create: true, name: newCategory.name });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getCategoryId = async (request, response) => {
  const { idCategory } = request.params;
  try {
    const getIdCategory = await getSearchCategoryId(idCategory);
    response.status(SUCCESS).json(getIdCategory);
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
  postCategory,
  getCategoryId,
  putCategory,
  deleteCategory,
};
