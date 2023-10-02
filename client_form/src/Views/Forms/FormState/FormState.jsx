// COMPONET'S

// HOOK'S
import { useState } from "react";

// JAVASCRIP
import validationName from "../../../Validations/validationName";

// STYLESHEET'S

const FormState = () => {
  return (
    <form className="form-component">
      <label htmlFor="nombre">Nombre: </label>
      <input type="text" />
    </form>
  );
};

export default FormState;
