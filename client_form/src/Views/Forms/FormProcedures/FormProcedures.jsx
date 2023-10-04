// COMPONET'S
import { ButtonAccept } from "../../../Components/ButtonAccept";

// HOOK'S
import { useState } from "react";
import { useDispatch } from "react-redux";

// REDUX
import { addProcedures } from "../../../Redux/actions";

// JAVASCRIP
import { validationName } from "../../../Validations/validationName";

// STYLESHEET'S
import "./form-procedures.css";

const FormProcedures = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validationName({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleAccept = (event) => {
    const name = userData.name;
    event.preventDefault();
    dispatch(addProcedures({ nameProcedures: name }));
  };

  return (
    <form className="form-component">
      <label htmlFor="nombre">Nombre: </label>
      <input
        type="text"
        value={userData.name}
        name="name"
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}
      {!errors.name && (
        <ButtonAccept label={"Aceptar"} onClickAccept={handleAccept} />
      )}
    </form>
  );
};

export default FormProcedures;
