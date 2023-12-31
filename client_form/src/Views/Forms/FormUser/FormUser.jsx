// COMPONET'S
import { ButtonAccept } from "../../../Components/ButtonAccept";

// HOOK'S
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// REDUX
import { getAllArea, postUser, editUser } from "../../../Redux/actions";

// JAVASCRIP
import { validationUser } from "../../../Validations/validationUser";
import { validationPassword } from "../../../Validations/validationPassword";

// STYLESHEET'S
import "./form-user.css";

const FormUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const selectorArea = useSelector((state) => state.area);
  const selectorAux = useSelector((state) => state.aux);
  const selUserData = useSelector((state) => state.auxUser);
  const area = selUserData.map(({ unit }) => unit);
  const userArea = selUserData[0]?.unit;
  const resulData = area.find((index) => index === userArea);

  const [errors, setErrors] = useState({});
  const [error, setError] = useState({});

  let initialnameUser = "";
  let initialemailUser = "";
  let initialuser = "";
  let initialidArea = "";

  if (selectorAux.length > 0) {
    initialnameUser = selectorAux[0]?.nameUser;
    initialemailUser = selectorAux[0]?.emailUser;
    initialuser = selectorAux[0]?.user;
    initialidArea = selectorAux[0]?.UnitIdUnit;
  }

  const [userData, setUserData] = useState({
    nameUser: initialnameUser,
    emailUser: initialemailUser,
    user: initialuser,
    password: "",
    idArea: initialidArea,
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validationUser({ ...userData, [event.target.name]: event.target.value })
    );
    location.pathname !== "/user" &&
      setError(
        validationPassword({
          [event.target.name]: event.target.value,
        })
      );
  };

  const handleAccept = (event) => {
    event.preventDefault();
    selectorAux.length
      ? dispatch(editUser({ ...userData, idUser: selectorAux[0]?.idUser }))
      : dispatch(postUser(userData));
    setError((userData.password = ""));
  };

  useEffect(() => {
    dispatch(getAllArea());
  }, []);

  useEffect(() => {
    setUserData({
      nameUser: initialnameUser,
      emailUser: initialemailUser,
      user: initialuser,
      idArea: initialidArea,
    });
  }, [initialnameUser, initialemailUser, initialuser, initialidArea]);

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

      {location.pathname !== "/user" && (
        <>
          <label htmlFor="password">Contraseña: </label>
          <input
            type="text"
            value={userData.password}
            name="password"
            onChange={handleChange}
          />
          {error.password && <p className="error">{error.password}</p>}
        </>
      )}

      <label htmlFor="area">Area</label>
      <select
        name="idArea"
        value={userData.idArea}
        onChange={handleChange}
        disabled={resulData !== "UTIC"}
      >
        <option> </option>
        {selectorArea.map(({ idUnit, nameUnit }, index) => (
          <option key={index} value={idUnit}>
            {nameUnit}
          </option>
        ))}
      </select>
      {errors.idArea && <p className="error">{errors.idArea}</p>}

      {Object.keys(errors).length < 1 && Object.keys(error).length < 1 && (
        <ButtonAccept label={"Aceptar"} onClickAccept={handleAccept} />
      )}
    </form>
  );
};

export default FormUser;
