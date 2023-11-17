const ERROR = 400;
const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const minLengthUser = 4;
const maxLengthUser = 15;

const validateUserData = (request, response, next) => {
  const { nameUser, emailUser, user, password, idArea } = request.body;
  const minLength = 4;
  try {
    if (!nameUser) throw Error(`Por favor ingrese un nombre`);
    if (nameUser.length < minLength)
      throw Error(`El nombre es muy corto para poder ser valido`);
    if (!emailUser.length) throw Error(`Por favor ingrese un email`);
    if (!emailRegex.test(emailUser))
      throw Error(
        `El email: ${emailUser}, no cumple con las caractetisticas de un email`
      );
    if (!user.length)
      throw Error(`Por favor ingrese un nombre para el usuario`);
    if (user.length < minLengthUser)
      throw Error(
        `Este es un nombre muy corto para poder considerarse un nombre de usuario`
      );
    if (user.length > maxLengthUser)
      throw Error(
        `Este es un nombre muy largo para poder considerarse un nombre de usuario`
      );
    if (!password.length) throw Error(`La contraseña no puede estar vacio`);
    if (!idArea) throw Error(`Se necesita una área`);
    if (!Number.isInteger(+idArea)) throw Error(`Revise el área existe`);
    return next();
  } catch (error) {
    return response.status(ERROR).json({ user: false, error: error.message });
  }
};

const validateUserDataPut = (request, response, next) => {
  const { idUser, nameUser, emailUser, user, password, idArea } = request.body;
  const minLength = 4;
  try {
    if (!idUser) throw Error(`Falta el identificador de lo que busca`);
    if (!Number.isInteger(+idUser))
      throw Error(
        `Necesitamos saber el identificador unico para poder buscarlo`
      );
    if (!nameUser) throw Error(`Por favor ingrese un nombre`);
    if (nameUser.length < minLength)
      throw Error(`El nombre es muy corto para poder ser valido`);
    if (!emailUser.length) throw Error(`Por favor ingrese un email`);
    if (!emailRegex.test(emailUser))
      throw Error(
        `El email: ${emailUser}, no cumple con las caractetisticas de un email`
      );
    if (!user.length)
      throw Error(`Por favor ingrese un nombre para el usuario`);
    if (user.length < minLengthUser)
      throw Error(
        `Este es un nombre muy corto para poder considerarse un nombre de usuario`
      );
    if (user.length > maxLengthUser)
      throw Error(
        `Este es un nombre muy largo para poder considerarse un nombre de usuario`
      );
    if (!password.length) throw Error(`La contraseña no puede estar vacio`);
    if (!idArea) throw Error(`Se necesita una área`);
    if (!Number.isInteger(+idArea)) throw Error(`Revise el área existe`);
    return next();
  } catch (error) {
    return response.status(ERROR).json({ user: false, error: error.message });
  }
};

module.exports = { validateUserData, validateUserDataPut };
