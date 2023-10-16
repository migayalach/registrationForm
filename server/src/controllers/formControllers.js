const {
  UserApi,
  Procedures,
  State,
  Equipment,
  Credential,
  FormEquipment,
  FormCredential,
  Form,
} = require("../database/database");

const { Op } = require("sequelize");

const createForm = async (
  idUser,
  idState,
  nameProcedures,
  equipment,
  credential
) => {
  const { idProcedures } = await Procedures.findOne({
    where: {
      name: {
        [Op.iLike]: `${nameProcedures}`,
      },
    },
  });
  if (!idProcedures) {
    throw Error(`No existe este procedimiento`);
  }

  const createUserApi = await UserApi.findByPk(idUser);
  const createState = await State.findByPk(idState);
  const procedures = await Procedures.findByPk(idProcedures);
  const createCredential = await Promise.all(
    credential.map(async ({ idCredential }) => {
      return await Credential.findByPk(idCredential);
    })
  );
  const createEquipment = await Promise.all(
    equipment.map(async ({ idEquipment }) => {
      return await Equipment.findByPk(idEquipment);
    })
  );

  if (
    !procedures ||
    !createUserApi ||
    !createState ||
    !createEquipment.length ||
    !createCredential.length
  ) {
    throw Error(`Faltan datos`);
  }

  const createForm = await Form.create({ dateStart: new Date() });
  await createForm.addUserApi(idUser);
  await createForm.addState(idState);
  await createForm.addProcedures(idProcedures);
  // CREAR
  await Promise.all(
    credential.map(async ({ idCredential }) => {
      return await createForm.addCredential(idCredential);
    })
  );
  await Promise.all(
    equipment.map(async ({ idEquipment }) => {
      return createForm.addEquipment(idEquipment);
    })
  );
  // ACA DEBE IR EL EDITAR PARA AGREGAR LOS DATOS QUE IGNORO SEQUELIZE
  return createForm;
};

const getSearchFormId = async (idForm) => {
  const responseData = await Form.findOne({
    where: { idForm },
    include: [
      {
        model: State,
        attributes: ["name"],
      },
    ],
  });

  return [
    {
      idForm: responseData.idForm,
      dateStart: responseData.dateStart,
      procedures: responseData.States[0].dataValues.name,
    },
  ];
};

const getSearchFormName = () => {};

const getAllForm = async () => await Form.findAll();

const updateForm = () => {};
const delFomr = () => {};

module.exports = {
  createForm,
  getSearchFormId,
  getSearchFormName,
  getAllForm,
  updateForm,
  delFomr,
};

//ahora sigue get
