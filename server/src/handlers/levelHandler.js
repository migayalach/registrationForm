const SUCCESS = 200;
const ERROR = 400;
const {
  createLevel,
  getLevelSearchId,
  getLevelSearchName,
  getAllLevel,
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

const getLevelId = async (request, response) => {
  const { idCharges } = request.params;
  try {
    const searchId = await getLevelSearchId(idCharges);
    response.status(SUCCESS).json(searchId);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getLevelName = async (request, response) => {
  const { nameLevel } = request.query;
  try {
    const resultLevel = nameLevel
      ? await getLevelSearchName(nameLevel)
      : await getAllLevel();
    response.status(SUCCESS).json(resultLevel);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
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
  getLevelId,
  getLevelName,
  putLevel,
  deleteLevel,
};
