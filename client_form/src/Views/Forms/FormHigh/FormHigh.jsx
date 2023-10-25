// COMPONET'S
import { ButtonAccept } from "../../../Components/ButtonAccept";
import EquipmentData from "../../../Components/EquipmentData/EquipmentData";
import CredentialData from "../../../Components/CredentialData/CredentialData";
import ServerPublic from "../../../Components/PublicServer/ServerPublic";

// HOOK'S
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// REDUX
import {
  postForm,
  getAllProcedures,
  getAllState,
  updateForm,
} from "../../../Redux/actions";

// JAVASCRIP
import { clearDataHigh } from "../../../Utils/clearFunctions";

// STYLESHEET'S
import "./form-high.css";

const FormHigh = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateForm);
  const selectorForm = useSelector((state) => state.auxExtra);
  const [errors, setErrors] = useState({});

  const handleAccept = (event) => {
    selectorForm.length
      ? dispatch(
          updateForm({
            idForm: selectorForm[0].idForm,
            idUser: selectorForm[0].idUser,
            idProcedures: selectorForm[0].idProcedures,
            combinedData,
            idState: selectorForm[0].idState,
          })
        )
      : dispatch(postForm(clearDataHigh(combinedData)));
    event.preventDefault();
  };

  // Define un estado para almacenar los datos combinados
  const [combinedData, setCombinedData] = useState({});

  // Función para combinar los datos de los componentes hijos
  const combineUserData = (data) => {
    setCombinedData((prevData) => {
      return {
        ...prevData,
        ...data,
      };
    });
  };

  useEffect(() => {
    dispatch(getAllState());
    dispatch(getAllProcedures());
  }, []);

  const handleChange = (event) => {
    const idState = event.target.value;
    setCombinedData((prevData) => {
      return {
        ...prevData,
        idState: idState,
      };
    });
  };

  return (
    <form>
      <label htmlFor="estado">Seleccione un estado: </label>
      <select
        name="idState"
        value={selectorForm[0]?.idProcedures}
        onChange={handleChange}
      >
        <option></option>
        {state.map(({ idState, name }, index) => (
          <option key={index} value={idState}>
            {name}
          </option>
        ))}
      </select>
      <ServerPublic onDataUserApiChange={combineUserData} />
      <EquipmentData onDataUserApiChange={combineUserData} />
      <CredentialData onDataUserApiChange={combineUserData} />
      {!errors.name && (
        <ButtonAccept label={"Aceptar"} onClickAccept={handleAccept} />
      )}{" "}
    </form>
  );
};

export default FormHigh;
