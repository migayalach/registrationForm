// COMPONET'S
import { ButtonAccept } from "../../../Components/ButtonAccept";

// HOOK'S
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// REDUX
import { addState } from "../../../Redux/actions";

// JAVASCRIP
import { validationName } from "../../../Validations/validationName";

// STYLESHEET'S
import styles from './FormState.module.css'; 

const FormState = () => {
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
    dispatch(addState({ name }));
  };

  return (
    <form>
      <div>
      <label htmlFor="nombre">Nombre: </label>
      <input
        type="text"
        value={userData.name}
        name="name"
        onChange={handleChange}
      />
      </div>
      {errors.name && <p >{errors.name}</p>}
      <div className={styles['button-container']}>
        <button
          className={styles['button-accept']}
          onClick={handleAccept}
        >
          Aceptar
        </button>
      </div>
    </form>

    
  );
};

export default FormState;
