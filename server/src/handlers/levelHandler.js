const SUCCESS = 200;
const ERROR = 400;
const {
  createLevel,
  updateLevel,
  delLevel,
} = require("../controllers/levelController");

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
  response.status(SUCCESS).send("consulta");
};

const putLevel = async (request, response) => {
  const { idCharges, nameLevel } = request.body;
  try {
    const updateData = await updateLevel(idCharges, nameLevel);
    response.status(SUCCESS).json(updateData);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteLevel = async (request, response) => {
  const { idCharges } = request.params;
  try {
    const resultDelete = await delLevel(idCharges);
    response.status(SUCCESS).json({ success: true, resultDelete });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postLevel,
  getLevel,
  putLevel,
  deleteLevel,
};
