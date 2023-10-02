// COMPONET'S
import FormState from "../Forms/FormState/FormState";
import Filter from "../../Components/Filter/Filter";
// HOOK'S

// STYLESHEET'S

const State = () => {
  return (
    <>
      <Filter />
      <hr />
      <h3>ACA VA EL FORMULARIO</h3>
      <FormState />
      <hr />
      <h3>ACA SE MUESTRA LOS STADOS</h3>
      <h1>State</h1>
    </>
  );
};

export default State;
