const clearResponseOne = ({ idUser, name, Charge: { dataValues } }) => ({
  idUser,
  name,
  levelUser: dataValues.name,
});

module.exports = {
  clearResponseOne,
};
