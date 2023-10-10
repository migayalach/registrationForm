// COMPONET'S
import { ButtonAccept } from "../../../Components/ButtonAccept";
import EquipmentData from "../../../Components/EquipmentData/EquipmentData";
import CredentialData from "../../../Components/CredentialData/CredentialData";

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
    // dispatch(getAllEquipment());
    dispatch(getAllCredential());
    dispatch(getAllProcedures());
    dispatch(getAllState());
  }, []);

  const [errors, setErrors] = useState({});

  const [addequipment, setEquipment] = useState([]);

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    // setErrors(
    //   validationUser({ ...userData, [event.target.name]: event.target.value })
    // );handleResta
  };

  const handleAddEquipment = () => {
    alert("agregando");
  };

  const handleAccept = (event) => {
    dispatch(postForm(userData));
  };

  return (
    <>
      <p>1.- Datos del sevidor publico</p>
      <label htmlFor="fecha">Fecha de inicio:</label>
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
      <EquipmentData />
      <CredentialData />
      {!errors.name && (
        <ButtonAccept label={"Aceptar"} onClickAccept={handleAccept} />
      )}{" "}
    </>
  );
};

export default FormHigh;
