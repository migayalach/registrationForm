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
  return await Form.create({
    dateStart,
    EquipmentIdEquipment: idEquipment,
    UserApiIdUser: idUserApi,
    StateIdState: idState,
    ProceduresIdProcedures: idProcedures,
    CredentialIdCredential: idCredential,
  });
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
const getAllForm = () => {};
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
