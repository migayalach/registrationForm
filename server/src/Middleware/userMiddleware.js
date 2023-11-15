const ERROR = 400;
const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const minLengthUser = 4;
const maxLengthUser = 15;

const validateUserData = (request, response, next) => {
  const { nameUser, emailUser, user, password, idArea } = request.body;
  const minLength = 4;
  if (!nameUser)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre` });
  if (nameUser.length < minLength)
    return response
      .status(ERROR)
      .json({ error: `El nombre es muy corto para poder ser valido` });

  if (!emailUser.length)
    return response.status(ERROR).json({ error: `Por favor ingrese un email` });

  if (!emailRegex.test(emailUser))
    return response.status(ERROR).json({
      error: `El email: ${emailUser}, no cumple con las caractetisticas de un email`,
    });

  if (!user.length)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre para el usuario` });

  if (user.length < minLengthUser)
    return response.status(ERROR).json({
      error: `Este es un nombre muy corto para poder considerarse un nombre de usuario`,
    });

  if (user.length > maxLengthUser)
    return response.status(ERROR).json({
      error: `Este es un nombre muy largo para poder considerarse un nombre de usuario`,
    });

  if (!password.length)
    return response.status(ERROR).json({
      error: `La contraseña no puede estar vacio`,
    });

  if (!idArea)
    return response.status(ERROR).json({ error: `Se necesita una área` });
  if (!Number.isInteger(+idArea))
    return response.status(ERROR).json({ error: `Revise el área existe` });
  next();
};

const validateUserDataPut = (request, response, next) => {
  const { idUser, nameUser, emailUser, user, password, idArea } = request.body;
  if (!idUser)
    return response
      .status(ERROR)
      .json({ error: `Falta el identificador de lo que busca` });
  if (!Number.isInteger(+idUser))
    return response.status(ERROR).json({
      error: `Necesitamos saber el identificador unico para poder buscarlo`,
    });
  if (!nameUser)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre` });

  if (!emailRegex.test(emailUser))
    return response.status(ERROR).json({
      error: `El email: ${emailUser}, no cumple con las caractetisticas de un email`,
    });

  if (!user.length)
    return response
      .status(ERROR)
      .json({ error: `Por favor ingrese un nombre para el usuario` });

  if (user.length < minLengthUser)
    return response.status(ERROR).json({
      error: `Este es un nombre muy corto para poder considerarse un nombre de usuario`,
    });

  if (user.length > maxLengthUser)
    return response.status(ERROR).json({
      error: `Este es un nombre muy largo para poder considerarse un nombre de usuario`,
    });

  if (!password.length)
    return response.status(ERROR).json({
      error: `La contraseña no puede estar vacio`,
    });

  if (!idArea)
    return response.status(ERROR).json({ error: `Se necesita una área` });
  if (!Number.isInteger(+idArea))
    return response.status(ERROR).json({ error: `Revise el área existe` });
  next();
};

module.exports = { validateUserData, validateUserDataPut };
