const ERROR = 400;

const validateEquipmentData = (request, response, next) => {
  const { name } = request.body;
  const minLength = 4;
  try {
    if (!name) throw Error(`Por favor ingrese un nombre`);
    if (name.length < minLength)
      throw Error(`El nombre es muy corto para poder ser valido`);
    return next();
  } catch (error) {
    return response
      .status(ERROR)
      .json({ equipment: false, error: error.message });
  }
};

const validateEquipmentDataPut = (request, response, next) => {
  const { idEquipment, name } = request.body;
  try {
    if (!idEquipment) throw Error(`Falta el identificador de lo que busca`);
    if (!Number.isInteger(+idEquipment))
      throw Error(
        `Necesitamos saber el identificador unico para poder buscarlo`
      );
    if (!name) throw Error(`Por favor ingrese un nombre`);
    return next();
  } catch (error) {
    return response
      .status(ERROR)
      .json({ equipment: false, error: error.message });
  }
};

module.exports = { validateEquipmentData, validateEquipmentDataPut };
