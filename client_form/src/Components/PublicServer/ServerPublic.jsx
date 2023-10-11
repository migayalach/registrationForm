// COMPONET'S

// HOOK'S
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// JAVASCRIP

// REDUX
import { getAllUserApi, getUserApiId } from "../../Redux/actions";

// STYLESHEET'S

const ServerPublic = ({ onDataUserApiChange }) => {
  const dispatch = useDispatch();
  const selectorUserApi = useSelector((state) => state.userApi);
  const selectorUserIdApi = useSelector((state) => state.aux);

  const [dataUserApi, setDataUserApi] = useState([]);

  useEffect(() => {
    dispatch(getAllUserApi());
  }, []);
  
  useEffect(() => {
    if (selectorUserIdApi.length > 0) {
      setDataUserApi(selectorUserIdApi);
      onDataUserApiChange(selectorUserIdApi);
    }
  }, [selectorUserIdApi]);

  const handleChange = (event) => {
    const idUserApi = event.target.value;
    dispatch(getUserApiId(idUserApi));
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

      <label htmlFor="cargo">Cargo: </label>
      {dataUserApi.length > 0 ? (
        dataUserApi.map(({ charge }, index) => (
          <input key={index} type="text" value={charge} readOnly />
        ))
      ) : (
        <input type="text" readOnly />
      )}

      <label htmlFor="fecha">Fecha de inicio:</label>
      <input type="date" id="fecha" name="dateStart" onChange={handleChange} />
      <label htmlFor="fecha">Fecha de archivo:</label>
      <input type="date" id="fecha" name="dateStart" onChange={handleChange} />
    </>
  );
};

export default ServerPublic;

// const handleChange = (event) => {
//   const idUserApi = event.target.value;
//   dispatch(getUserApiId(idUserApi));

//   // setUserData({
//   //   ...userData,
//   //   [event.target.name]: event.target.value,
//   // });
//   // setErrors(
//   //   validationUser({ ...userData, [event.target.name]: event.target.value })
//   // );handleResta
// };
