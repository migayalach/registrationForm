const SUCCESS = 200;
const ERROR = 400;

const {
  createUserApi,
  getUserApiDataId,
  getAllUserApi,
  getNameUserApi,
  updateUserApi,
  deleteDataUserApi,
} = require("../controllers/userApiController");

const postUserApi = async (request, response) => {
  const { name, nroIdentification, email, phone, charge } = request.body;
  try {
    const userApiCreate = await createUserApi(
      name,
      +nroIdentification,
      email,
      phone,
      charge
    );
    response.status(SUCCESS).json({ create: true, userApiCreate });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getUserApiId = async (request, response) => {
  const { idUserApi } = request.params;
  try {
    const getUser = await getUserApiDataId(idUserApi);
    response.status(SUCCESS).json(getUser);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getUserApiName = async (request, response) => {
  const { name } = request.query;
  try {
    const resController = name ? await getNameUserApi(name) : await getAllUserApi();
    response.status(SUCCESS).json(resController);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putUserApi = async (request, response) => {
  const { idUserApi, name, nroIdentification, email, phone, charge } =
    request.body;
  try {
    const dataResponse = await updateUserApi(
      idUserApi,
      name,
      nroIdentification,
      email,
      phone,
      charge
    );
    response.status(SUCCESS).json({
      update: true,
      dataResponse,
    });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteUserApi = async (request, response) => {
  const { idUser } = request.params;
  try {
    const deleteUser = await deleteDataUserApi(idUser);
    response.status(SUCCESS).json(deleteUser);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postUserApi,
  getUserApiId,
  getUserApiName,
  putUserApi,
  deleteUserApi,
};
