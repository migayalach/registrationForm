const SUCCESS = 200;
const ERROR = 400;

const {
  createUser,
  getUserDataId,
  getAllUser,
  getNameUser,
  updateUser,
  deleteDataUser,
} = require("../controllers/userController");

const postUser = async (request, response) => {
  const { name, nroIdentification, email, phone, charge } = request.body;
  try {
    const userCreate = await createUser(
      name,
      nroIdentification,
      email,
      phone,
      charge
    );
    response.status(SUCCESS).json({ create: true, userCreate });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getUserId = async (request, response) => {
  const { idUser } = request.params;
  try {
    const getUser = await getUserDataId(idUser);
    response.status(SUCCESS).json(getUser);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getUserName = async (request, response) => {
  const { name } = request.query;
  try {
    const resController = name ? await getNameUser(name) : await getAllUser();
    response.status(SUCCESS).json(resController);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putUser = async (request, response) => {
  const { idUser, name, ChargeIdCharges } = request.body;
  try {
    const dataResponse = await updateUser(idUser, name, ChargeIdCharges);
    response.status(SUCCESS).json({
      update: true,
      name: dataResponse.name,
      charges: dataResponse.charges,
    });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteUser = async (request, response) => {
  const { idUser } = request.params;
  try {
    const deleteUser = await deleteDataUser(idUser);
    response.status(SUCCESS).json(deleteUser);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postUser,
  getUserId,
  getUserName,
  putUser,
  deleteUser,
};
