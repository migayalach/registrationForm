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
  const selUserData = useSelector((state) => state.auxUser);
  const selArea = useSelector((state) => state.area);
  const area = selArea.map(({ nameUnit }) => nameUnit);
  const userArea = selUserData[0]?.unit;
  const resulData = area.find((index) => index === userArea);

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
      <select
        name="idProcedure"
        value={procedures}
        onChange={handleChange}
        disabled={resulData !== "UTIC"}
      >
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
