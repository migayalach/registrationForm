// COMPONET'S

// HOOK'S
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// REDUX
import {
  getAllState,
  getAllProcedures,
  getAllEquipment,
  getAllArea,
  getAllUser,
  getAllCredential,
  getAllUserApi,
  getStateName,
} from "../../Redux/actions";

// STYLESHEET'S

const Filter = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const selectorState = useSelector((state) => state.stateForm || state.procedures);
  console.log(selectorState);

  const searchData = (event) => {};

  useEffect(() => {
    if (location.pathname === "state") {
      dispatch(getAllState());
    } else if (location.pathname === "procedures") {
      dispatch(getAllProcedures());
    } else if (location.pathname === "equipment") {
      dispatch(getAllEquipment());
    } else if (location.pathname === "area") {
      dispatch(getAllArea());
    } else if (location.pathname === "user") {
      dispatch(getAllUser());
    } else if (location.pathname === "credential") {
      dispatch(getAllCredential());
    } else if (location.pathname === "userApi") {
      dispatch(getAllUserApi);
    }
    console.log(location.pathname);
  }, []);

  return (
    <form>
      <div>
        <label htmlFor="nombre">Nombre: </label>
        <select name="" onChange={searchData}>
          <option></option>
          {selectorState.map(({ name }, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default Filter;
