import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUserApi } from "../Redux/actions";

const DataServerPrublic = () => {
  const dispatch = useDispatch();
  const selectorUser = useSelector((state) => state.userApi);
  const [userData, setUserData] = useState([]);

  const handleChange = (event) => {
    const userId = event.target.value;
    if (!userId) setUserData([]);
    else {
      const aux = selectorUser.find(({ idUser }) => idUser === +userId);
      setUserData([
        {
          idUser: aux.idUser,
          name: aux.name,
          charge: aux.charge,
        },
      ]);
    }
  };

  useEffect(() => {
    dispatch(getAllUserApi());
  }, []);

  return (
    <>
      <label htmlFor="usuario">Seleccione un usuario: </label>
      <select name="idUser" onChange={handleChange}>
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
