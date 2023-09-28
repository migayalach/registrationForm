const { Procedures } = require("../database/database");
const { Op } = require("sequelize");

const createProcedures = async ({ nameProcedures }) => {
  const newProcedures = await Procedures.findOne({
    where: { name: nameProcedures },
  });
  if (!newProcedures) {
    return await Procedures.create({ name: nameProcedures });
  }
  throw Error(`El proceso: ${nameProcedures}, ya existe`);
};

const getLevelSearchId = async (idCharges) => {
  const level = await Procedures.findAll({
    where: {
      idCharges,
    },
  });
  if (level.length > 0) {
    return level;
  }
  throw Error(`No se pudo encontrar el nivel buscado`);
};

const getLevelSearchName = async (name) => {
  const nameSearch = await Procedures.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  return nameSearch;
};

const getAllLevel = async () => await Procedures.findAll();

const updateLevel = async (idCharges, nameLevel) => {
  const infoResponse = await Procedures.findOne({
    where: {
      idCharges,
    },
  });
  if (infoResponse) {
    const reponseInfo = await Procedures.update(
      { name: nameLevel },
      { where: { idCharges } }
    );
    if (typeof reponseInfo === "object") {
      return `Modificado con exito a nivel: ${nameLevel}`;
    }
  }
  throw Error(`El nivel: ${nameLevel}, no se pudo encontrar`);
};

const delLevel = async (idCharges) => {
  const deleteLevel = await Procedures.findOne({ where: { idCharges } });
  if (!deleteLevel) {
    throw Error(`El nivel no se encuentra registrado`);
  }
  await Procedures.destroy({
    where: {
      idCharges,
    },
  });
  return `El nivel, se elimino correctamente`;
};

module.exports = {
  createProcedures,
  getLevelSearchId,
  getLevelSearchName,
  getAllLevel,
  updateLevel,
  delLevel,
};
