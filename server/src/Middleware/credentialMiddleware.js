const ERROR = 400;

const validateCredentialData = (request, response, next) => {
  const { name, UserIdUser } = request.body;
  const minLength = 4;
  try {
    if (!name) throw Error(`Por favor ingrese un nombre`);
    if (name.length < minLength)
      throw Error(`El nombre es muy corto para poder ser valido`);
    if (!UserIdUser) throw Error(`Se necesita un usuario`);
    if (!Number.isInteger(+UserIdUser)) throw Error(`Revise el usuario existe`);
    return next();
  } catch (error) {
    return response
      .status(ERROR)
      .json({ credential: false, error: error.message });
  }
};

const validateCredentialDataPut = (request, response, next) => {
  const { idCredential, name } = request.body;
  try {
    if (!idCredential) throw Error(`Falta el identificador de lo que busca`);
    if (!Number.isInteger(+idCredential))
      throw Error(
        `Necesitamos saber el identificador unico para poder buscarlo`
      );
    if (!name) throw Error(`Por favor ingrese un nombre`);
    return next();
  } catch (error) {
    return response
      .status(ERROR)
      .json({ credential: false, error: error.message });
  }
};

module.exports = { validateCredentialData, validateCredentialDataPut };
