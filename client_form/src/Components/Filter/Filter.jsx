// COMPONET'S

// HOOK'S
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// REDUX
import {
  getAllUser,
  getAllCredential,
  getAllUserApi,
  filterData,
} from "../../Redux/actions";

// STYLESHEET'S

const Filter = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    route: "",
    value: "",
    location: "",
  });
  const location = useLocation();
  const selectorState = useSelector((state) => state.user);

  const onChangeData = (event) => {
    setData({
      [event.target.name]: event.target.value,
      route: event.target.id,
    });
  };

  const searchData = (event) => {
    event.preventDefault();
    dispatch(filterData({ ...data, location: location.pathname }));
  };

  useEffect(() => {
    if (location.pathname === "/user") {
      dispatch(getAllUser());
    } else if (location.pathname === "/credential") {
      dispatch(getAllCredential());
    } else if (location.pathname === "/userApi") {
      dispatch(getAllUserApi);
    }
  }, [dispatch]);

  return (
    <form onSubmit={searchData}>
      <div>
        <label htmlFor="name">Nombre: </label>
        <select name="value" onChange={onChangeData} id="nameUser">
          <option></option>
          {selectorState.map(({ nameUser }, index) => (
            <option key={index} value={nameUser}>
              {nameUser}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="area">Área: </label>
        <select name="value" onChange={onChangeData} id="nameUnit">
          <option></option>
          {selectorState.map(({ nameUnit }, index) => (
            <option key={index} value={nameUnit}>
              {nameUnit}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="orden-A-Z">A-Z</label>
      </div>
      <div>
        <label htmlFor="orden-Z-A">Z-A</label>
      </div>
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Filter;
