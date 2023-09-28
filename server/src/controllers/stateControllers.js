const { State } = require("../database/database");
const { Op } = require("sequelize");

const createState = async (name) => {
  const newState = await State.findOne({ where: { name } });
  if (!newState) {
    return await State.create({ name });
  }
  throw Error(`El estado: ${name} no se pudo crear`);
};

const getSearchStateId = async (idState) => {
  const state = await State.findAll({
    where: {
      idState,
    },
  });
  if (state.length > 0) {
    return state;
  }
  throw Error(`No se pudo encontrar el estado buscado`);
};

const getSearchStateName = async (name) => {
  const nameSearch = await State.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  return nameSearch;
};

const getAllState = async () => await State.findAll();

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
  getSearchStateId,
  getSearchStateName,
  getAllState,
  updateCategory,
  delCategory,
};

("aun da");
