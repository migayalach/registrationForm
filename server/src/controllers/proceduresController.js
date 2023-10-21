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

const getProceduresSearchId = async (idProcedures) => {
  const procedures = await Procedures.findAll({
    where: {
      idProcedures,
    },
  });
  if (procedures.length > 0) {
    return procedures;
  }
  throw Error(`No se pudo encontrar el procedimiento buscado`);
};

const getProceduresSearchName = async (name) => {
  const nameSearch = await Procedures.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  return nameSearch;
};

const getAllProcedures = async () => await Procedures.findAll();

const updateProcedures = async (idProcedures, nameProcedures) => {
  const infoResponse = await Procedures.findOne({
    where: {
      idProcedures,
    },
  });
  if (infoResponse) {
    const reponseInfo = await Procedures.update(
      { name: nameProcedures },
      { where: { idProcedures } }
    );
    if (typeof reponseInfo === "object") {
      // return `Modificado con exito el procedimiento: ${nameProcedures}`;
      return await getAllProcedures();
    }
  }
  throw Error(`El procedimiento: ${nameProcedures}, no se pudo encontrar`);
};

const delProcedures = async (idProcedures) => {
  const deleteProcedures = await Procedures.findOne({
    where: { idProcedures },
  });
  if (!deleteProcedures) {
    throw Error(`El proceso no se encuentra registrado`);
  }
  await Procedures.destroy({
    where: {
      idProcedures,
    },
  });

  // return `El proceso, se elimino correctamente`;
  return await getAllProcedures();
};

module.exports = {
  createProcedures,
  getProceduresSearchId,
  getProceduresSearchName,
  getAllProcedures,
  updateProcedures,
  delProcedures,
};
