const { Category, Equipment } = require("../database/database");
const { Op, where } = require("sequelize");

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

const updateEquipment = async (idEquipment, name, host, CategoryIdCategory) => {
  const existsEquipment = await Equipment.findOne({
    where: {
      idEquipment,
    },
  });
  if (!existsEquipment) {
    throw Error(`El equipo: ${name} no se encuentra registrado`);
  }
  const existCategory = await Category.findOne({
    attributes: ["name"],
    where: {
      idCategory: CategoryIdCategory,
    },
  });
  if (!existCategory) {
    throw Error(`La categoria buscada no se pudo encontrar`);
  }
  await Equipment.update(
    { name, host, CategoryIdCategory },
    { where: { idEquipment } }
  );
  return { name, host, category: existCategory.name };
};

module.exports = {
  createEquipment,
  updateEquipment,
};
