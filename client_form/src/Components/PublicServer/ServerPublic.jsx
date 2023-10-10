// COMPONET'S

// HOOK'S
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// JAVASCRIP

// REDUX
import { getAllUserApi } from "../../Redux/actions";
// STYLESHEET'S

const ServerPublic = () => {
  const dispatch = useDispatch();
  const selectorUserApi = useSelector((state) => state.userApi);

  const [dataUserApi, setDataUserApi] = useState([]);

  useEffect(() => {
    dispatch(getAllUserApi());
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    // setUserData({
    //   ...userData,
    //   [event.target.name]: event.target.value,
    // });
    // setErrors(
    //   validationUser({ ...userData, [event.target.name]: event.target.value })
    // );handleResta
  };

  return (
    <>
      <p>1.- Datos del sevidor publico</p>
      <label htmlFor="idUserApi">Usuario</label>
      <select name="idUserApi" onChange={handleChange}>
        <option> </option>
        {selectorUserApi.map(({ idUser, name, charge }, index) => (
          <option key={index} value={idUser}>
            {name}
          </option>
        ))}
      </select>

      <label htmlFor="fecha">Fecha de inicio:</label>
      <input type="date" id="fecha" name="dateStart" onChange={handleChange} />
      <label htmlFor="fecha">Fecha de archivo:</label>
      <input type="date" id="fecha" name="dateStart" onChange={handleChange} />
    </>
  );
};

export default ServerPublic;
