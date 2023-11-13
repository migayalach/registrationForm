// COMPONET'S

// HOOK'S
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// REDUX
import {
  getAllProcedures,
  getAllState,
  getAllUserApi,
} from "../../Redux/actions";

// STYLESHEET'S

const Filter = () => {
  const dispatch = useDispatch();
  const procedure = useSelector((state) => state.procedures);
  const state = useSelector((state) => state.stateForm);
  const userApi = useSelector((state) => state.userApi);

  const searchFilter = (event) => {
    const action = event.target.name;
    const value = event.target.value;
    if (procedure === action) {
    } else if (state === action) {
    } else if (userApi === action) {
    } else {
    }
  };

  useEffect(() => {
    dispatch(getAllProcedures());
    dispatch(getAllState());
    dispatch(getAllUserApi());
  }, []);

  return (
    <>
      <span>Proceso: </span>
      <select name="procedure" onClick={searchFilter}>
        <option></option>
        {procedure.map(({ name }, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>

      <span>Estado: </span>
      <select name="state" onClick={searchFilter}>
        <option></option>
        {state.map(({ name }, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>

      <span>
        Usuario:
        <select name="userApi" onClick={searchFilter}>
          <option></option>
          {userApi.map(({ name, nroIdentification, email }, index) => (
            <option
              key={index}
              value={name}
            >{`${name} - ${nroIdentification} - ${email}`}</option>
          ))}
        </select>
      </span>
    </>
  );
};

export default Filter;
