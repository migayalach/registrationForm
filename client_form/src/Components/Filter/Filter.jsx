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
    area: "",
    nombre: "",
    location: "",
    order: "",
  });
  const location = useLocation();
  const selectorState = useSelector((state) => state.user);
  const selectorUnit = useSelector((state) => state.area);
  const onChangeData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
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
        <select name="nombre" onChange={onChangeData}>
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
        <select name="area" onChange={onChangeData}>
          <option></option>
          {selectorUnit.map(({ nameUnit }, index) => (
            <option key={index} value={nameUnit}>
              {nameUnit}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="ordenar-">Ordenar: </label>
        <select name="order" onChange={onChangeData}>
          <option value=""></option>
          <option value="ASC">A-Z</option>
          <option value="DESC">Z-A</option>
        </select>
      </div>
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Filter;
