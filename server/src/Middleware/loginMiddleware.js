const ERROR = 400;
const validateLogin = (request, response, next) => {
  const { emailUser, password } = request.body;
  try {
    if (!emailUser && !password) throw Error(`Introduzca datos por favor`);
    if (!emailUser) throw Error(`Falta email`);
    if (!password) throw Error(`Flata la contraseña`);
    return next();
  } catch (error) {
    return response
      .status(ERROR)
      .json({ access: false, message: error.message });
  }
};

module.exports = { validateLogin };
