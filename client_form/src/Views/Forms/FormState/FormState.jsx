// COMPONET'S
import { ButtonAccept } from "../../../Components/ButtonAccept";

// HOOK'S
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// REDUX
import { addState, putState } from "../../../Redux/actions";

// JAVASCRIP
import { validationName } from "../../../Validations/validationName";

// STYLESHEET'S
import styles from "./FormState.module.css";

const FormState = () => {
  const dispatch = useDispatch();
  const selectorState = useSelector((state) => state.aux);
  const initialName = selectorState.length ? selectorState[0].name : "";
  const [userData, setUserData] = useState({
    name: initialName,
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
    selectorState[0]?.idState
      ? dispatch(putState({ idState: selectorState[0].idState, name }))
      : dispatch(addState({ name }));
  };

  useEffect(() => {
    setUserData({ name: initialName });
  }, [initialName]);

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
      {errors.name && <p>{errors.name}</p>}
      <div className={styles["button-container"]}>
        <button className={styles["button-accept"]} onClick={handleAccept}>
          Aceptar
        </button>
      </div>
    </form>
  );
};

export default FormState;
