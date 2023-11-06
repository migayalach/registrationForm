// COMPONET'S
// import Filter from "../../../Components/Filter/Filter";
import { ButtonAccept } from "../../../Components/ButtonAccept";

// HOOK'S
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// REDUX
import { getAllArea, postUser, editUser } from "../../../Redux/actions";

// JAVASCRIP
import { validationUser } from "../../../Validations/validationUser";

// STYLESHEET'S
import "./form-user.css";

const FormUser = () => {
  const dispatch = useDispatch();
  const selectorArea = useSelector((state) => state.area);
  const selectorAux = useSelector((state) => state.aux);
  // const selectorUser = useSelector((state) => state.user);
  const [errors, setErrors] = useState({});

  let initialnameUser = "";
  let initialemailUser = "";
  let initialuser = "";
  let initialpassword = "";
  let initialidArea = "";

  if (selectorAux.length > 0) {
    initialnameUser = selectorAux[0]?.nameUser;
    initialemailUser = selectorAux[0]?.emailUser;
    initialuser = selectorAux[0]?.user;
    initialpassword = selectorAux[0]?.password;
    initialidArea = selectorAux[0]?.UnitIdUnit;
  }
  // initialnameUser = selectorUser[0]?.nameUser;
  // initialemailUser = selectorUser[0]?.emailUser;
  // initialuser = selectorUser[0]?.user;
  // initialpassword = selectorUser[0]?.password;
  // initialidArea = selectorUser[0]?.UnitIdUnit;

  const [userData, setUserData] = useState({
    nameUser: initialnameUser,
    emailUser: initialemailUser,
    user: initialuser,
    password: initialpassword,
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
  };

  const handleAccept = (event) => {
    selectorAux.length
      ? dispatch(editUser({ ...userData, idUser: selectorAux[0]?.idUser }))
      : dispatch(postUser(userData));
    // dispatch(editUser({ ...userData, idUser: selectorUser[0]?.idUser }));

    event.preventDefault();
  };

  useEffect(() => {
    dispatch(getAllArea());
  }, []);

  useEffect(() => {
    setUserData({
      nameUser: initialnameUser,
      emailUser: initialemailUser,
      user: initialuser,
      password: initialpassword,
      idArea: initialidArea,
    });
  }, [
    initialnameUser,
    initialemailUser,
    initialuser,
    initialpassword,
    initialidArea,
  ]);

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
      <select name="idArea" value={userData.idArea} onChange={handleChange}>
        <option> </option>
        {selectorArea.map(({ idUnit, nameUnit }, index) => (
          <option key={index} value={idUnit}>
            {nameUnit}
          </option>
        ))}
      </select>
      {errors.idArea && <p className="error">{errors.idArea}</p>}

      {Object.keys(errors).length < 1  && (
      <ButtonAccept label={"Aceptar"} onClickAccept={handleAccept} />
      )}
    </form>
  );
};

export default FormUser;
