// COMPONET'S
import FormProcedures from "../Forms/FormProcedures/FormProcedures";
import Filter from "../../Components/Filter/Filter";
import Lists from "../../Components/Lists";

// HOOK'S
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import { getAllProcedures } from "../../Redux/actions";

// STYLESHEET'S

const Procedures = () => {
  const dispatch = useDispatch();
  const selectorProcedures = useSelector((state) => state.procedures);

  useEffect(() => {
    dispatch(getAllProcedures());
  }, [dispatch]);

  return (
    <>
      {/* <Filter />
      <hr /> */}
      <FormProcedures />
      <hr />
      <Lists items={selectorProcedures} text={"Procedimientos"} flag={"procedures"}/>
    </>
  );
};

export default Procedures;
