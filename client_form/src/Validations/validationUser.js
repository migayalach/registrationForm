import {
  nameRegex,
  emailRegex,
  passwordRegexMay_AZ,
  passwordRegexMin_az,
  passwordRegexDigits,
  passwordRegexSpecialCaracter,
  passwordRegexLength,
} from "../Utils/regex";

export const validationUser = (userData) => {
  const errors = {};

  if (!userData) {
    return errors;
  }

  // name
  const minLengthName = 10;
  const maxLengthName = 30;

  if (!userData.nameUser) {
    errors.nameUser = `El nombre no puede estar vacío`;
  } else {
    if (!nameRegex.test(userData.nameUser)) {
      errors.nameUser = `La primera letra no puede ser caracter especial ni número`;
    }

    if (userData.nameUser.length < minLengthName) {
      errors.nameUser = `El nombre no puede tener menos de ${minLengthName} caracteres`;
    }

    if (userData.nameUser.length > maxLengthName) {
      errors.nameUser = `El nombre no puede tener más de ${maxLengthName} caracteres`;
    }
  }

  // email
  if (!userData.emailUser) {
    errors.emailUser = "Por favor ingrese un correo de contacto";
  } else {
    if (!emailRegex.test(userData.emailUser)) {
      errors.emailUser = "Ingrese una dirección de correo válida";
    }

    if (userData.emailUser.length > 35) {
      errors.emailUser =
        "El nombre de usuario no puede tener más de 35 caracteres :C";
    }
  }

  // usuario
  const minLengthUser = 4;
  const maxLengthUser = 15;

  if (!userData.user) {
    errors.user = `El nombre no puede estar vacío`;
  } else {
    if (userData.user.length < minLengthUser) {
      errors.user = `El nombre no puede tener menos de ${minLengthUser} caracteres`;
    }

    if (userData.user.length > maxLengthUser) {
      errors.user = `El nombre no puede tener más de ${maxLengthUser} caracteres`;
    }
  }

  // password
  if (!userData.password) {
    errors.password = "La contraseña no puede estar vacía";
  } else {
    if (!passwordRegexMay_AZ.test(userData.password)) {
      errors.password = "Debe contener al menos una letra mayúscula (A-Z)";
    }

    if (!passwordRegexMin_az.test(userData.password)) {
      errors.password = "Debe contener al menos una letra minúscula (a-z)";
    }

    if (!passwordRegexDigits.test(userData.password)) {
      errors.password = "Debe contener al menos un dígito (0-9)";
    }

    if (!passwordRegexSpecialCaracter.test(userData.password)) {
      errors.password =
        "Debe contener al menos uno de los siguientes caracteres especiales: @, #, $, %, ^, &, +, =, !, _ ";
    }

    if (!passwordRegexLength.test(userData.password)) {
      errors.password =
        "La longitud mínima de la contraseña debe ser de 8 caracteres.";
    }
  }

  // área
  if (!userData.idArea) {
    errors.idArea = "Por favor seleccione un área";
  }

  return errors;
};
