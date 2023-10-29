// COMPONET'S

// HOOK'S
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllState } from "../Redux/actions";

// REDUX

// STYLESHEET'S

const SelectState = ({ handleData }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  const selectState = useSelector((state) => state.stateForm);
  const selectAux = useSelector((state) => state.auxExtra);
  const dataState = selectAux[0]?.idState;

  const handleChange = (event) => {
    setState(event.target.value);
  };

  useEffect(() => {
    dispatch(getAllState());
  }, []);

  useEffect(() => {
    handleData(state, "idState");
  }, [state]);

  useEffect(() => {
    dataState !== undefined && setState(dataState);
  }, [dataState]);

  return (
    <>
      <select name="idState" value={state} onChange={handleChange}>
        <option></option>
        {selectState.map(({ idState, name }, index) => (
          <option key={index} value={idState}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectState;