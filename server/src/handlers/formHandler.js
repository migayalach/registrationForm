const SUCCESS = 200;
const ERROR = 400;
const {
  createForm,
  getSearchFormId,
  getSearchFormName,
  getAllForm,
  updateForm,
  delFomr,
} = require("../controllers/formControllers");

// // POSTMAN
// {
//   "idUser": 3,
//   "idState": 2,
//   "nameProcedures": "alta",
//   "credential": [
//     { "idCredential": "1", "check": true },
//     { "idCredential": "2", "check": true },
//     { "idCredential": "3", "check": true },
//     { "idCredential": "4", "check": true },
//     { "idCredential": "5", "check": true }
//   ],
//   "equipment": [
//     {
//       "idEquipment": "1",
//       "host": "255.255.225.1",
//       "direccionIP": "192.166.0.1",
//       "etiquetaControl": true
//     },

//     {
//       "idEquipment": "2",
//       "host": "255.255.225.255",
//       "direccionIP": "192.166.100.102",
//       "etiquetaControl": true
//     }
//   ]
// }

// idEquipment,    //ok [{}]
// idUserApi,      //ok int
// idState,        //ok int
// idProcedures,   //ok string
// idCredential,   //ok [{}]

const postForm = async (request, response) => {
  const { idUser, idState, nameProcedures, equipment, credential } =
    request.body;
  try {
    const resCreateForm = await createForm(
      idUser,
      idState,
      nameProcedures,
      equipment,
      credential
    );
    response.status(SUCCESS).json({ create: true, resCreateForm });
  } catch (error) {
    response.status(ERROR).json({ create: false, error: error.message });
  }
};

const getFormId = async (request, response) => {
  const { idForm } = request.params;
  try {
    const responseForm = await getSearchFormId(idForm);
    response.status(SUCCESS).json(responseForm);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getFormName = async (request, response) => {
  try {
    const responseForm = await getAllForm();
    response.status(SUCCESS).json(responseForm);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putForm = (request, response) => {
  try {
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteForm = (request, response) => {
  try {
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = { postForm, getFormId, getFormName, putForm, deleteForm };
