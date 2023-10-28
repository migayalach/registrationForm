import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProcedures } from "../Redux/actions";

const SelectProcedures = ({ handleData }) => {
  const dispatch = useDispatch();
  const [procedures, setProcedures] = useState("");
  const selectProcedures = useSelector((state) => state.procedures);

  const handleChange = (event) => {
    setProcedures(event.target.value);
  };

  useEffect(() => {
    dispatch(getAllProcedures());
  }, []);

  useEffect(() => {
    handleData(procedures, "idProcedure");
  }, [procedures]);

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
