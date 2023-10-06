const {
  UserApi,
  Procedures,
  State,
  Equipment,
  Credential,
  Form,
} = require("../database/database");

const createForm = async (
  dateStart,
  idEquipment,
  idUserApi,
  idState,
  idProcedures,
  idCredential
) => {
  const createForm = await Form.create({
    dateStart,
  });
  const createEquipment = await Equipment.findByPk(idEquipment);
  const createUserApi = await UserApi.findByPk(idUserApi);
  const createState = await State.findByPk(idState);
  const createProcedures = await Procedures.findByPk(idProcedures);
  const createCredential = await Credential.findByPk(idCredential);

  await createForm.addEquipment(createEquipment);
  await createForm.addUserApi(createUserApi);
  await createForm.addState(createState);
  await createForm.addProcedures(createProcedures);
  await createForm.addCredential(createCredential);

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
