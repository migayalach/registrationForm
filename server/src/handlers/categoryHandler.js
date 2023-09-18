const SUCCESS = 200;
const ERROR = 400;
const {
  createCategory,
  updateCategory,
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

const putCategory = async (request, response) => {
  const { idCategory, name } = request.body;
  try {
    const editCategory = await updateCategory(idCategory, name);
    response.status(SUCCESS).json({ update: true, editCategory });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postCategory,
  putCategory,
};
