const { Equipment } = require("../database/database");
const { Op } = require("sequelize");

const createEquipment = async (name, host, directionIp, controlLabel) => {
  const countData = await Equipment.count();
  if (countData === 0) {
    await Equipment.create({ name, host, directionIp, controlLabel });
    return { name, host, directionIp, controlLabel };
  }

  //VERIFICAR QUE NO ESTE REPETIDO
  const existsEquipment = await Equipment.findOne({
    where: {
      name,
    },
  });
  if (!existsEquipment) {
    await Equipment.create({ name, host, directionIp, controlLabel });
    return { name, host, directionIp, controlLabel };
  }
  throw Error(`El equipo: ${name} ya se encuentra registrado`);
};

const getEquipmentDataId = async (idEquipment) => {
  const equipmentInfo = await Equipment.findAll({
    where: {
      idEquipment,
    },
    include: {
      model: Category,
      attibutes: ["name"],
    },
  });
  if (equipmentInfo.length > 0) {
    return equipmentInfo;
  }
  return await getAllEquipment();
};

const getNameEquipment = (name) => {
  const equipmentData = Equipment.findOne({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: { model: Category, attibutes: ["name"] },
  });
  return equipmentData;
};

const getAllEquipment = async () =>
  await Equipment.findAll({
    include: { model: Category, attibutes: ["name"] },
  });

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

const deleteDataEquipment = async (idEquipment) => {
  const {
    dataValues: { name, host },
  } = await Equipment.findOne({
    attibutes: ["name"],
    where: {
      idEquipment,
    },
  });
  const deleteEquipment = await Equipment.destroy({
    where: {
      idEquipment,
    },
  });
  if (deleteEquipment === 1) {
    return `Se elimino el equipo: ${name} con el host: ${host}, con exito`;
  }
  throw Error(`NO se pudo eliminar el equipo deseado`);
};

module.exports = {
  createEquipment,
  getEquipmentDataId,
  getNameEquipment,
  getAllEquipment,
  updateEquipment,
  deleteDataEquipment,
};
