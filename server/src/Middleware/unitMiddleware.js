const ERROR = 400;

const validateUnitData = (request, response, next) => {
  const { nameUnit } = request.body;
  const minLength = 4;
  try {
    if (!nameUnit) throw Error(`Por favor ingrese un nombre`);
    if (nameUnit.length < minLength)
      throw Error(`El nombre es muy corto para poder ser valido`);
    return next();
  } catch (error) {
    return response.status(ERROR).json({ unit: false, error: error.message });
  }
};

const validateUnitDataPut = (request, response, next) => {
  const { idUnit, nameUnit } = request.body;
  try {
    if (!idUnit) throw Error(`Falta el identificador de lo que busca`);
    if (!Number.isInteger(+idUnit))
      throw Error(
        `Necesitamos saber el identificador unico para poder buscarlo`
      );
    if (!nameUnit) throw Error(`Por favor ingrese un nombre`);
    return next();
  } catch (error) {
    return response.status(ERROR).json({ unit: false, error: error.message });
  }
};

module.exports = { validateUnitData, validateUnitDataPut };
