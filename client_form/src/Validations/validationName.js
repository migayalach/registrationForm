const validationName = ({ name }) => {
  const errorName = {};

  if (name.length > 35) {
    errorName.name = `El nombre no puede tener mas de 35 caracteres`;
  }
  if (name.length === 0) {
    errorName.name = `El nombre no puede estar vacio`;
  }

  return errorName;
};

export default validationName;
