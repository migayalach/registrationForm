const SUCCESS = 200;
const ERROR = 400;

const {
  getAllUserApi,
  getUserApiDataId,
  orderDataUserApi,
} = require("../controllers/userApiController");

const getUserApiName = async (request, response) => {
  const { order } = request.query;
  try {
    const dataResponse = order
      ? await orderDataUserApi(order)
      : await getAllUserApi();
    response.status(SUCCESS).json(dataResponse);
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

module.exports = {
  getUserApiName,
  getUserApiId,
};
