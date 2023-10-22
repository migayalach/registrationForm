// COMPONET'S
// import Filter from "../../../Components/Filter/Filter";
import { ButtonAccept } from "../../../Components/ButtonAccept";

// HOOK'S
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// REDUX
import {
  getAllUser,
  postCredential,
  updataCredential,
} from "../../../Redux/actions";

// JAVASCRIP
import { validationUser } from "../../../Validations/validationUser";

// STYLESHEET'S
import "./form-credential.css";

const FormCredential = () => {
  const dispatch = useDispatch();
  const selectorUser = useSelector((state) => state.user);
  const selectorAux = useSelector((state) => state.aux);
  let initialname = "";
  let initialIdUser = "";

  console.log(selectorAux);
  if (selectorAux) {
    initialname = selectorAux.name;
    initialIdUser = selectorAux.UserIdUser;
  }

  const [userData, setUserData] = useState({
    name: initialname,
    UserIdUser: initialIdUser,
  });

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
    selectorAux
      ? dispatch(
          updataCredential({
            ...userData,
            idCredential: selectorAux.idCredential,
          })
        )
      : dispatch(postCredential(userData));
    event.preventDefault();
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  useEffect(() => {
    setUserData({
      name: initialname,
      UserIdUser: initialIdUser,
    });
  }, [initialname, initialIdUser]);

  return (
    <form>
      <h1>FormUser</h1>
      <label htmlFor="name">Nombre: </label>
      <input
        type="text"
        value={userData.name}
        name="name"
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <label htmlFor="area">Area</label>
      <select
        name="UserIdUser"
        value={userData.UserIdUser}
        onChange={handleChange}
      >
        <option> </option>
        {selectorUser.map(({ idUser, nameUser }, index) => (
          <option key={index} value={idUser}>
            {nameUser}
          </option>
        ))}
      </select>

      {!errors.name && (
        <ButtonAccept label={"Aceptar"} onClickAccept={handleAccept} />
      )}
    </form>
  );
};

export default FormCredential;
