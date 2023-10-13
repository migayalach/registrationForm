// COMPONET'S
import { ButtonAccept } from "../../../Components/ButtonAccept";
import EquipmentData from "../../../Components/EquipmentData/EquipmentData";
import CredentialData from "../../../Components/CredentialData/CredentialData";
import ServerPublic from "../../../Components/PublicServer/ServerPublic";

// HOOK'S
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// JAVASCRIP

// REDUX
import { postForm } from "../../../Redux/actions";

// STYLESHEET'S
import "./form-high.css";

const FormHigh = () => {
  const dispatch = useDispatch();

  const handleAccept = (event) => {
    dispatch(postForm(combinedData));
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

  console.log(combinedData);

  return (
    <form>
      <ServerPublic onDataUserApiChange={combineUserData} />
      <EquipmentData onDataUserApiChange={combineUserData} />
      <CredentialData onDataUserApiChange={combineUserData} />

      <ButtonAccept label={"Aceptar"} onClickAccept={handleAccept} />
    </form>
  );
};

export default FormHigh;
