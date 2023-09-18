const { Category } = require("../database/database");
const { Op } = require("sequelize");

const createCategory = async (name) => {
  const newCategory = await Category.findOne({ where: { name } });
  if (!newCategory) {
    return await Category.create({ name });
  }
  throw Error(`La categoria: ${name} no se pudo crear`);
};

const getSearchCategoryId = async (idCategory) => {
  const category = await Category.findAll({
    where: {
      idCategory,
    },
  });
  if (category.length > 0) {
    return category;
  }
  throw Error(`No se pudo encontrar el nivel buscado`);
};

const updateCategory = async (idCategory, name) => {
  const editCategori = await Category.findOne({
    where: {
      idCategory,
    },
  });
  if (editCategori) {
    const responseInfo = await Category.update(
      { name },
      { where: { idCategory } }
    );
    if (typeof responseInfo === "object") {
      return `Categoria: ${name}, modificado con exito`;
    }
  }
  throw Error(`La categoria: ${name}, no se pudo encontrar`);
};

const delCategory = (idCategory) => {
  const deleteCategory = Category.findOne({ where: { idCategory } });
  if (!deleteCategory) {
    throw Error(`La categoria no se encuentra registrada`);
  }
  Category.destroy({
    where: {
      idCategory,
    },
  });
  return `La categoria, se elimino correctamente`;
};

module.exports = {
  createCategory,
  getSearchCategoryId,
  updateCategory,
  delCategory,
};
