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

  const [userData, setUserData] = useState({});

  const [errors, setErrors] = useState({});

  const handleAccept = (event) => {
    // dispatch(postForm(userData));
    alert("envio");
  };

  const handleUserDataChange = (data) => {
    setUserData(data);
  };

  // console.log(userData);

  return (
    <form>
      <ServerPublic onDataUserApiChange={handleUserDataChange} />
      <EquipmentData onDataUserApiChange={handleUserDataChange} />
      <CredentialData onDataUserApiChange={handleUserDataChange} />
      {!errors.name && (
        <ButtonAccept label={"Aceptar"} onClickAccept={handleAccept} />
      )}{" "}
    </form>
  );
};

export default FormHigh;

// const handleChange = (event) => {
//   setUserData({
//     ...userData,
//     [event.target.name]: event.target.value,
//   });
//   // setErrors(
//   //   validationUser({ ...userData, [event.target.name]: event.target.value })
//   // );handleResta
// };
