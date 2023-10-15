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

  const createForm = await Form.create({
    dateStart: new Date(),
  });

  const createUserApi = await UserApi.findByPk(idUser);
  const createState = await State.findByPk(idState);
  const createProcedures = await Procedures.findByPk(idProcedures);
  await createForm.addUserApi(createUserApi);
  await createForm.addState(createState);
  await createForm.addProcedures(createProcedures);
  
  for (const credentialData of credential) {
    console.log(credentialData.idCredential);
    const createCredential = await Credential.findByPk(
      credentialData.idCredential
    );
    if (createCredential) {
      await FormCredential.create({
        checkCredential: credentialData.check,
      });
      await createForm.addCredential(createCredential);
    }
  }

  for (const equipmentData of equipment) {
    const createEquipment = await Equipment.findByPk(equipmentData.idEquipment);
    if (createEquipment) {
      await FormEquipment.create({
        ip: equipmentData.direccionIP,
        host: equipmentData.host,
        control: equipmentData.etiquetaControl,
      });
      await createForm.addEquipment(createEquipment);
    }
  }

  return createForm;
};

const getSearchFormId = async (idForm) => {
  return await Form.findOne({
    where: { idForm },
    include: [
      {
        model: Equipment,
      },
      {
        model: UserApi,
      },
      {
        model: State,
      },
      {
        model: Procedures,
      },
      {
        model: Credential,
      },
    ],
  });
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
