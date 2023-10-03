export const validationName = (userName) => {
  const errorName = {};

  if (userName.name.length > 35) {
    errorName.name = `El nombre de usuario no puede tener mas de 35 caracteres`;
  }

  return errorName;
};
