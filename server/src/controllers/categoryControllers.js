const { Category } = require("../database/database");
const { Op } = require("sequelize");

const createCategory = async (name) => {
  const newCategory = await Category.findOne({ where: { name } });

  if (!newCategory) {
    return await Category.create({ name });
  }
  throw Error(`La categoria: ${name} no se pudo crear`);
};

module.exports = {
  createCategory,
};
