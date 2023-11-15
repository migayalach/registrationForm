const ERROR = 400;
const validateLogin = (request, response, next) => {
  const { emailUser, password } = request.body;
  try {
    if (!emailUser) throw Error(`Falta email`);
    if (!password) throw Error(`Flata la contraseña`);
    return next();
  } catch (error) {
    return response
      .status(ERROR)
      .json({ loginForm: false, error: error.message });
  }
};

module.exports = { validateLogin };
