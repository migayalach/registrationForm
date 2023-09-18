const { Category, Equipment } = require("../database/database");
const { Op } = require("sequelize");

const createEquipment = async (name, host, CategoryIdCategory) => {
  const existsCategory = await Category.findOne({
    where: {
      idCategory: CategoryIdCategory,
    },
  });

  if (!existsCategory) {
    throw Error(`No se pudo encontrar La categoria buscada`);
  }
  const category = await Category.findOne({
    attributes: ["name"],
    where: {
      idCategory: CategoryIdCategory,
    },
  });
  const nameCategory = category.dataValues.name;
  await Equipment.create({ name, host, CategoryIdCategory });
  return { name, host, nameCategory };
};

module.exports = {
  createEquipment,
};
