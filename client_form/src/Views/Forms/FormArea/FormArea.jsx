// COMPONET'S
import { ButtonAccept } from "../../../Components/ButtonAccept";

// HOOK'S
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// REDUX
import { addArea, putArea } from "../../../Redux/actions";

// JAVASCRIP
import { validationName } from "../../../Validations/validationName";

// STYLESHEET'S
import "./form-area.css";

const FormArea = () => {
  const dispatch = useDispatch();
  const selecInfo = useSelector((state) => state.aux);

  const initialName = selecInfo.length ? selecInfo[0].nameUnit : "";

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
    selecInfo[0]?.idUnit
      ? dispatch(putArea({ idUnit: selecInfo[0].idUnit, nameUnit: name }))
      : dispatch(addArea({ nameUnit: name }));
  };

  useEffect(() => {
    setUserData({ name: initialName });
  }, [initialName]);

  // useEffect(() => {
  //   return () => {
  //     setUserData({ name: "" });
  //   };
  // }, []);

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

export default FormArea;
