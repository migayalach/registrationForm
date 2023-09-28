const { State } = require("../database/database");
const { Op } = require("sequelize");

const createState = async (name) => {
  const newState = await State.findOne({ where: { name } });
  if (!newState) {
    return await State.create({ name });
  }
  throw Error(`El estado: ${name} no se pudo crear`);
};

const getSearchCategoryId = async (idCategory) => {
  const category = await State.findAll({
    where: {
      idCategory,
    },
  });
  if (category.length > 0) {
    return category;
  }
  throw Error(`No se pudo encontrar el nivel buscado`);
};

const getSearchCategoryName = async (name) => {
  const nameSearch = await State.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  return nameSearch;
};

const getAllCategory = async () => await State.findAll();

const updateCategory = async (idCategory, name) => {
  const editCategori = await State.findOne({
    where: {
      idCategory,
    },
  });
  if (editCategori) {
    const responseInfo = await State.update(
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
  const deleteCategory = State.findOne({ where: { idCategory } });
  if (!deleteCategory) {
    throw Error(`La categoria no se encuentra registrada`);
  }
  State.destroy({
    where: {
      idCategory,
    },
  });
  return `La categoria, se elimino correctamente`;
};

module.exports = {
  createState,
  getSearchCategoryId,
  getSearchCategoryName,
  getAllCategory,
  updateCategory,
  delCategory,
};

("aun da");
