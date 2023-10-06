// COMPONET'S
import { ButtonAccept } from "../../../Components/ButtonAccept";

// HOOK'S
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// JAVASCRIP

// REDUX
import {
  postForm,
  getAllUserApi,
  getAllEquipment,
  getAllCredential,
  getAllProcedures,
  getAllState,
} from "../../../Redux/actions";

// STYLESHEET'S
import "./form-high.css";

const FormHigh = () => {
  const dispatch = useDispatch();
  const selectorUserApi = useSelector((state) => state.userApi);
  const selectorEquipment = useSelector((state) => state.equipment);
  const selectorCredential = useSelector((state) => state.credential);
  const selectorState = useSelector((state) => state.stateForm);
  const selectorProcedures = useSelector((state) => state.procedures);

  const [userData, setUserData] = useState({
    // dateStart:"",
    idEquipment: "",
    idUserApi: "",
    idState: "",
    idProcedures: "",
    idCredential: "",
  });

  useEffect(() => {
    dispatch(getAllUserApi());
    dispatch(getAllEquipment());
    dispatch(getAllCredential());
    dispatch(getAllProcedures());
    dispatch(getAllState());
  }, []);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    // setErrors(
    //   validationUser({ ...userData, [event.target.name]: event.target.value })
    // );
  };

  const handleAccept = (event) => {
    dispatch(postForm(userData));
    event.preventDefault();
  };

  return (
    <form>
      <label htmlFor="fecha">Fecha:</label>
      <input type="date" id="fecha" name="dateStart" onChange={handleChange} />
      <label htmlFor="idUserApi">Usuario</label>
      <select name="idUserApi" onChange={handleChange}>
        <option> </option>
        {selectorUserApi.map(({ idUser, name }, index) => (
          <option key={index} value={idUser}>
            {name}
          </option>
        ))}
      </select>
      <label htmlFor="idEquipment">Equipo</label>
      <select name="idEquipment" onChange={handleChange}>
        <option> </option>
        {selectorEquipment.map(({ idEquipment, name }, index) => (
          <option key={index} value={idEquipment}>
            {name}
          </option>
        ))}
      </select>
      <label htmlFor="idCredential">Credencial</label>
      <select name="idCredential" onChange={handleChange}>
        <option> </option>
        {selectorCredential.map(({ idCredential, name }, index) => (
          <option key={index} value={idCredential}>
            {name}
          </option>
        ))}
      </select>
      <label htmlFor="idProcedures">Procedimientos</label>
      <select name="idProcedures" onChange={handleChange}>
        <option> </option>
        {selectorProcedures.map(({ idProcedures, name }, index) => (
          <option key={index} value={idProcedures}>
            {name}
            {idProcedures}
          </option>
        ))}
      </select>
      <label htmlFor="idState">Estado</label>
      <select name="idState" onChange={handleChange}>
        <option> </option>
        {selectorState.map(({ idState, name }, index) => (
          <option key={index} value={idState}>
            {name}
          </option>
        ))}
      </select>
      {!errors.name && (
        <ButtonAccept label={"Aceptar"} onClickAccept={handleAccept} />
      )}{" "}
    </form>
  );
};

export default FormHigh;
