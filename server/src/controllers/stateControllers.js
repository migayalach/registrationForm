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

const updateState = async (idState, name) => {
  const editState = await State.findOne({
    where: {
      idState,
    },
  });
  if (editState) {
    const responseInfo = await State.update(
      { name },
      { where: { idState } }
    );
    if (typeof responseInfo === "object") {
      return `Estado: ${name}, modificado con exito`;
    }
  }
  throw Error(`El estado: ${name}, no se pudo encontrar`);
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
  updateState,
  delCategory,
};

("aun da");
