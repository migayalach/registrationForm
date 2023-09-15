const SUCCESS = 200;
const ERROR = 400;

const { createUser, updateUser } = require("../controllers/userController");

const postUser = async (request, response) => {
  const { name, ChargeIdCharges } = request.body;
  try {
    const { nameLevel } = await createUser(name, ChargeIdCharges);
    response.status(SUCCESS).json({ create: true, name, nameLevel });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putUser = async (request, response) => {
  const { idUser, name, ChargeIdCharges } = request.body;
  try {
    const dataResponse = await updateUser(idUser, name, ChargeIdCharges);
    response
      .status(SUCCESS)
      .json({
        update: true,
        name: dataResponse.name,
        charges: dataResponse.charges,
      });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postUser,
  putUser,
};
