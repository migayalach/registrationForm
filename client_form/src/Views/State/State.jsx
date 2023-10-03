// COMPONET'S
import FormState from "../Forms/FormState/FormState";
import Filter from "../../Components/Filter/Filter";
import Lists from "../../Components/Lists";

// HOOK'S
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//REDUX
import { getAllState } from "../../Redux/actions";

// STYLESHEET'S
import "./state.css";

const State = () => {
  const dispatch = useDispatch();
  const selectorState = useSelector((state) => state.state);
  const [items, setItems] = useState(selectorState);

  useEffect(() => {
    dispatch(getAllState);
  }, [dispatch]);

  useEffect(() => {
    setItems(selectorState);
  }, [selectorState]);

  return (
    <>
      <Filter />
      <hr />
      <h3>ACA VA EL FORMULARIO</h3>
      <FormState />
      <hr />
      <h3>ACA SE MUESTRA LOS STADOS</h3>
      <h1>State</h1>
      <Lists items={items} />
    </>
  );
};

export default State;
