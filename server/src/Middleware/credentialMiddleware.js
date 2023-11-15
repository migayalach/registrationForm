const ERROR = 400;

const validateCredentialData = (request, response, next) => {
  const { name, UserIdUser } = request.body;
  console.log(UserIdUser);
  const minLength = 4;
  if (!name)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre` });
  if (name.length < minLength)
    return response
      .status(ERROR)
      .json({ error: `El nombre es muy corto para poder ser valido` });
  if (!UserIdUser)
    return response.status(ERROR).json({ error: `Se necesita un usuario` });
  if (!Number.isInteger(+UserIdUser))
    return response
      .status(ERROR)
      .json({ error: `Revise el usuario existe` });
  next();
};

const validateCredentialDataPut = (request, response, next) => {
  const { idCredential, name } = request.body;
  if (!idCredential)
    return response
      .status(ERROR)
      .json({ error: `Falta el identificador de lo que busca` });
  if (!Number.isInteger(+idCredential))
    return response.status(ERROR).json({
      error: `Necesitamos saber el identificador unico para poder buscarlo`,
    });
  if (!name)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre` });
  next();
};

module.exports = { validateCredentialData, validateCredentialDataPut };
