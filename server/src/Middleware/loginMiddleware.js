const ERROR = 400;
const validateLogin = (request, response, next) => {
  const { emailUser, password } = request.body;
  if (!emailUser) return response.status(ERROR).json({ error: `Falta email` });
  if (!password)
    return response.status(ERROR).json({ error: `Flata la contraseña` });
  next();
};

module.exports = { validateLogin };
