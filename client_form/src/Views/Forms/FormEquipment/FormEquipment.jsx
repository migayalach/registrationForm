// COMPONET'S
import { ButtonAccept } from "../../../Components/ButtonAccept";

// HOOK'S
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// REDUX
import { addEquipment, putEquipment } from "../../../Redux/actions";

// JAVASCRIP
import { validationName } from "../../../Validations/validationName";

// STYLESHEET'S
import "./form-equipment.css";

const FormEquipment = () => {
  const dispatch = useDispatch();
  const selectEquipment = useSelector((state) => state.aux);
  const initialName = selectEquipment.length ? selectEquipment[0].name : "";

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
    selectEquipment[0]?.idEquipment
      ? dispatch(
          putEquipment({ idEquipment: selectEquipment[0].idEquipment, name })
        )
      : dispatch(addEquipment({ name }));
  };

  useEffect(() => {
    setUserData({ name: initialName });
  }, [initialName]);

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

export default FormEquipment;
