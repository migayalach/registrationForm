// COMPONET'S
import { ButtonAccept } from "../../../Components/ButtonAccept";
import EquipmentData from "../../../Components/EquipmentData/EquipmentData";
import CredentialData from "../../../Components/CredentialData/CredentialData";
import ServerPublic from "../../../Components/PublicServer/ServerPublic";

// HOOK'S
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// REDUX
import { postForm, getAllProcedures } from "../../../Redux/actions";

// JAVASCRIP
import { clearDataHigh } from "../../../Utils/clearFunctions";

// STYLESHEET'S
import "./form-high.css";

const FormHigh = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const handleAccept = (event) => {
    dispatch(postForm(clearDataHigh(combinedData)));
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
    dispatch(getAllProcedures());
  }, []);

  return (
    <form>
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
