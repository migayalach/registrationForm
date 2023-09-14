const SUCCESS = 200;
const ERROR = 400;
const { createLevel, updateLevel } = require("../controllers/levelController");

const postLevel = async (request, response) => {
  const { nameLevel } = request.body;
  try {
    const newLevel = await createLevel({ nameLevel });
    response.status(SUCCESS).json({ create: true, newLevel: nameLevel });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getLevel = (request, response) => {
  response.status(200).send("consulta");
};

const putLevel = async (request, response) => {
  const { idCharges, nameLevel } = request.body;
  try {
    const updateData = await updateLevel(idCharges, nameLevel);
    response.status(200).json(updateData);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteLevel = (request, response) => {
  response.status(200).send("eliminar");
};

module.exports = {
  postLevel,
  getLevel,
  putLevel,
  deleteLevel,
};
