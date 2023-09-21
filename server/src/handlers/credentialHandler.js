const SUCCESS = 200;
const ERROR = 400;

const {
  createCredential,
  updateCredential,
  delCredential,
} = require("../controllers/credentialControllers");

const postCredential = async (request, response) => {
  const { name } = request.body;
  try {
    const newCredential = await createCredential(name);
    response.status(SUCCESS).json({ create: true, newCredential });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putCredential = async (request, response) => {
  const { idCredential, name } = request.body;
  try {
    const editCredential = await updateCredential(idCredential, name);
    response.status(SUCCESS).json({ update: true, editCredential });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteCredential = async (request, response) => {
  const { idCredential } = request.params;
  try {
    const deleteInfo = await delCredential(idCredential);
    response.status(SUCCESS).json({ update: true, deleteInfo });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postCredential,
  putCredential,
  deleteCredential,
};
