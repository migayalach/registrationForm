// COMPONET'S
import DataServerPrublic from "../../../Components/DataServerPrublic";
import DataEquipment from "../../../Components/DataEquipment";
import DataCredential from "../../../Components/DataCredential";
import SelectState from "../../../Components/SelectState";
import SelectProcedures from "../../../Components/SelectProcedures";
import { ButtonAccept } from "../../../Components/ButtonAccept";

// HOOK'S
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// REDUX
import { postForm, updateForm } from "../../../Redux/actions";

// STYLESHEET'S

const Form = () => {
  const dispatch = useDispatch();
  const selectForm = useSelector((state) => state.auxExtra);
  const dataIdForm = selectForm[0]?.idForm;

  const [data, setData] = useState({
    idUser: "",
    idState: "",
    idProcedure: "",
    equipment: "",
    credential: "",
  });

  const handleData = (info, type) => {
    setData({
      ...data,
      [type]: info,
    });
  };

  const handleAccept = () => {
    dataIdForm
      ? dispatch(updateForm({ ...data, idForm: dataIdForm }))
      : dispatch(postForm(data));
  };

  useEffect(() => {
    const formData = selectForm[0];
    setData({
      idUser: formData?.idUser,
      idState: formData?.idState,
      idProcedure: formData?.idProcedure,
      equipment: formData?.equipment,
      credential: formData?.credential,
    });
  }, [selectForm, dataIdForm]);

  return (
    <>
      <h4>Seleccione un estado:</h4>
      <SelectState handleData={handleData} />
      <h4>Seleccione un proceso:</h4>
      <SelectProcedures handleData={handleData} />
      <h4>1.- Datos del servidor publico:</h4>
      <DataServerPrublic handleData={handleData} />
      <h4>2.- Equipos de computación:</h4>
      <DataEquipment handleData={handleData} />
      <h4>3.- Credenciales de acceso:</h4>
      <DataCredential handleData={handleData} />
      <ButtonAccept label={"Aceptar"} onClickAccept={handleAccept} />
    </>
  );
};

export default Form;
