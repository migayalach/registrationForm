// COMPONET'S

// HOOK'S
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProcedures } from "../Redux/actions";

// REDUX

// STYLESHEET'S

const SelectProcedures = ({ handleData }) => {
  const dispatch = useDispatch();
  const [procedures, setProcedures] = useState("");
  const selectProcedures = useSelector((state) => state.procedures);
  const selectAux = useSelector((state) => state.auxExtra);
  const dataProcedure = selectAux[0]?.idProcedure;

  const handleChange = (event) => {
    setProcedures(event.target.value);
  };

  useEffect(() => {
    dispatch(getAllProcedures());
  }, []);

  useEffect(() => {
    handleData(procedures, "idProcedure");
  }, [procedures]);

  useEffect(() => {
    dataProcedure !== undefined && setProcedures(dataProcedure);
  }, [dataProcedure]);

  return (
    <>
      <select name="idProcedure" value={procedures} onChange={handleChange}>
        <option></option>
        {selectProcedures.map(({ idProcedures, name }, index) => (
          <option key={index} value={idProcedures}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectProcedures;

