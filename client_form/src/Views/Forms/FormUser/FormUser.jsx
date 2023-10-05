// COMPONET'S
// import Filter from "../../../Components/Filter/Filter";
import { ButtonAccept } from "../../../Components/ButtonAccept";

// HOOK'S
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// REDUX
import { getAllArea, postUser } from "../../../Redux/actions";

// JAVASCRIP
import { validationUser } from "../../../Validations/validationUser";

// STYLESHEET'S
import "./form-user.css";

const FormUser = () => {
  const dispatch = useDispatch();
  const selectorArea = useSelector((state) => state.area);

  const [userData, setUserData] = useState({
    nameUser: "",
    emailUser: "",
    user: "",
    password: "",
    idArea: "",
  });

  useEffect(() => {
    dispatch(getAllArea());
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
    dispatch(postUser(userData));
    event.preventDefault();
  };

  return (
    <form>
      <h1>FormUser</h1>
      <label htmlFor="nameUser">Nombre: </label>
      <input
        type="text"
        value={userData.nameUser}
        name="nameUser"
        onChange={handleChange}
      />
      {errors.nameUser && <p className="error">{errors.nameUser}</p>}

      <label htmlFor="emailUser">Email: </label>
      <input
        type="email"
        value={userData.emailUser}
        name="emailUser"
        onChange={handleChange}
      />
      {errors.emailUser && <p className="error">{errors.emailUser}</p>}

      <label htmlFor="user">Usuario: </label>
      <input
        type="text"
        value={userData.user}
        name="user"
        onChange={handleChange}
      />
      {errors.user && <p className="error">{errors.user}</p>}

      <label htmlFor="password">Contraseña: </label>
      <input
        type="text"
        value={userData.password}
        name="password"
        onChange={handleChange}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <label htmlFor="area">Area</label>
      <select name="idArea" onChange={handleChange}>
        <option> </option>
        {selectorArea.map(({ idUnit, nameUnit }, index) => (
          <option key={index} value={idUnit}>
            {nameUnit}
          </option>
        ))}
      </select>

      {!errors.name && (
        <ButtonAccept label={"Aceptar"} onClickAccept={handleAccept} />
      )}
    </form>
  );
};

export default FormUser;
