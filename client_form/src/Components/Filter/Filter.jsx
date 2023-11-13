// COMPONET'S

// HOOK'S
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// REDUX
import {
  getAllProcedures,
  getAllState,
  getAllUserApi,
  searchFormData,
} from "../../Redux/actions";

// STYLESHEET'S

const Filter = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    procedure: "",
    state: "",
    userApi: "",
    dateStart: "",
    dateEnd: "",
  });
  const procedure = useSelector((state) => state.procedures);
  const state = useSelector((state) => state.stateForm);
  const userApi = useSelector((state) => state.userApi);

  const onChangeSearchFilter = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendInfo = (event) => {
    event.preventDefault();
    dispatch(searchFormData(data));
  };

  useEffect(() => {
    dispatch(getAllProcedures());
    dispatch(getAllState());
    dispatch(getAllUserApi());
  }, [dispatch]);

  return (
    <>
      <form onSubmit={sendInfo}>
        <div>
          <label htmlFor="procedure">Proceso:</label>
          <select name="procedure" onChange={onChangeSearchFilter}>
            <option></option>
            {procedure.map(({ name }, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="state">Estado: </label>
          <select name="state" onChange={onChangeSearchFilter}>
            <option></option>
            {state.map(({ name }, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="userApi">Usuario:</label>
          <select name="userApi" onChange={onChangeSearchFilter}>
            <option></option>
            {userApi.map(({ name, nroIdentification, email }, index) => (
              <option
                key={index}
                value={name}
              >{`${name} - ${nroIdentification} - ${email}`}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="dateStart"> Desde :</label>
          <input type="date" name="dateStart" onChange={onChangeSearchFilter} />
        </div>
        <div>
          <label htmlFor="dateEnd"> Hasta:</label>
          <input type="date" name="dateEnd" onChange={onChangeSearchFilter} />
        </div>

        <div>
          <button type="submit">Buscar</button>
        </div>
      </form>
    </>
  );
};

export default Filter;
