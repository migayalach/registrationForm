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
  const { nameUser, emailUser, user, idArea } = request.body;
  try {
    const userCreate = await createUser(
      nameUser,
      emailUser,
      user,
      idArea
    );
    response
      .status(SUCCESS)
      .json({ user: true, message: "Usuario creado exitosamente", userCreate });
  } catch (error) {
    response.status(ERROR).json({ user: false, error: error.message });
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
  const { nameUser, nameUnit, order } = request.query;
  try {
    const resController =
      nameUser || nameUnit || order
        ? await getNameUser(nameUser, nameUnit, order)
        : await getAllUser();
    response.status(SUCCESS).json(resController);
  } catch (error) {
    response.status(ERROR).json({ userSearch: false, message: error.message });
  }
};

const putUser = async (request, response) => {
  const { idUser, nameUser, emailUser, user, password, idArea } = request.body;
  try {
    const dataResponse = await updateUser(
      idUser,
      nameUser,
      emailUser,
      user,
      password,
      idArea
    );
    response.status(SUCCESS).json({
      user: true,
      message: "Usuario actualizado, exitosamente",
      dataResponse,
    });
  } catch (error) {
    response.status(ERROR).json({ user: false, error: error.message });
  }
};

const deleteUser = async (request, response) => {
  const { idUser } = request.params;
  try {
    const deleteUser = await deleteDataUser(idUser);
    response.status(SUCCESS).json({
      user: true,
      message: "Usuario eliminado, exitosamente",
      deleteUser,
    });
  } catch (error) {
    response.status(ERROR).json({ user: false, error: error.message });
  }
};

module.exports = {
  postUser,
  getUserId,
  getUserName,
  putUser,
  deleteUser,
};
