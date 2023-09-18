const { Category } = require("../database/database");
const { Op } = require("sequelize");

const createCategory = async (name) => {
  const newCategory = await Category.findOne({ where: { name } });
  if (!newCategory) {
    return await Category.create({ name });
  }
  throw Error(`La categoria: ${name} no se pudo crear`);
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

module.exports = {
  createCategory,
  updateCategory,
};
