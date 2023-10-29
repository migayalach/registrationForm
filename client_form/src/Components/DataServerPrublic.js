// COMPONET'S

// HOOK'S
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUserApi } from "../Redux/actions";

// REDUX

// STYLESHEET'S

const DataServerPrublic = ({ handleData }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const selectorUser = useSelector((state) => state.userApi);
  const selectAux = useSelector((state) => state.auxExtra);
  const dataUser = selectAux[0]?.idUser;

  // FUNCION ENCARGADA DE BUSCAR EL USUARIO POR SU ID, DENTRO DEL ARRAY QUE SE OBTIENE DE REDUX
  // PARA POSTERIORMENTE AGREGAR AL ESTADO LOCAL.
  const searchUser = (userId) => {
    const aux = selectorUser.find(({ idUser }) => idUser === +userId);
    setUserData([
      {
        idUser: aux.idUser,
        name: aux.name,
        charge: aux.charge,
      },
    ]);
  };

  const handleChange = (event) => {
    const userId = event.target.value;
    if (!userId) setUserData([]);
    else {
      searchUser(userId);
    }
  };

  useEffect(() => {
    dispatch(getAllUserApi());
  }, []);

  useEffect(() => {
    userData[0]?.idUser && handleData(userData[0]?.idUser, "idUser");
  }, [userData]);

  useEffect(() => {
    dataUser !== undefined && searchUser(dataUser);
  }, [dataUser]);

  return (
    <>
      <label htmlFor="usuario">Seleccione un usuario: </label>
      <select name="idUser" value={dataUser} onChange={handleChange}>
        <option></option>
        {selectorUser.map(({ idUser, name }, index) => (
          <option key={index} value={idUser}>
            {name}
          </option>
        ))}
      </select>

      {userData.length ? (
        <table border="1px" style={{ width: "500px", height: "40px" }}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cargo</th>
            </tr>
          </thead>
          <tbody>
            {userData.length
              ? userData.map(({ name, charge }) => (
                  <tr key={name}>
                    <td style={{ width: "150px" }}>{name}</td>
                    <td style={{ width: "150px" }}>{charge}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      ) : null}
    </>
  );
};

export default DataServerPrublic;
