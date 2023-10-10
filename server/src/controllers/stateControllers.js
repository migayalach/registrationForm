const { State } = require("../database/database");
const { Op } = require("sequelize");

const createState = async (name) => {
  const newState = await State.findOne({ where: { name } });
  if (!newState) {
    return await State.create({ name });
    // return data.name;
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
    const responseInfo = await State.update({ name }, { where: { idState } });
    if (typeof responseInfo === "object") {
      // return `Estado: ${name}, modificado con exito`;
      return await getSearchStateId(idState);
    }
  }
  throw Error(`El estado: ${name}, no se pudo encontrar`);
};

const delState = async (idState) => {
  const deleteState = await State.findOne({ where: { idState } });
  if (!deleteState) {
    throw Error(`El estado no se encuentra registrado`);
  }
  State.destroy({
    where: {
      idState,
    },
  });
  return `El estado, se elimino correctamente`;
};

module.exports = {
  createState,
  getSearchStateId,
  getSearchStateName,
  getAllState,
  updateState,
  delState,
};