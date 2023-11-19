import {
  passwordRegexMay_AZ,
  passwordRegexMin_az,
  passwordRegexDigits,
  passwordRegexSpecialCaracter,
  passwordRegexLength,
} from "../Utils/regex";

export const validationPassword = (data) => {
  const error = {};
  if (!data.password) {
    return error;
  }

  // password
  if (!data.password) {
    error.password = "La contraseña no puede estar vacía";
  } else {
    if (!passwordRegexMay_AZ.test(data.password)) {
      error.password = "Debe contener al menos una letra mayúscula (A-Z)";
    }

    if (!passwordRegexMin_az.test(data.password)) {
      error.password = "Debe contener al menos una letra minúscula (a-z)";
    }

    if (!passwordRegexDigits.test(data.password)) {
      error.password = "Debe contener al menos un dígito (0-9)";
    }

    if (!passwordRegexSpecialCaracter.test(data.password)) {
      error.password =
        "Debe contener al menos uno de los siguientes caracteres especiales: @, #, $, %, ^, &, +, =, !, _ ";
    }

    if (!passwordRegexLength.test(data.password)) {
      error.password =
        "La longitud mínima de la contraseña debe ser de 8 caracteres.";
    }
  }
  return error;
};
