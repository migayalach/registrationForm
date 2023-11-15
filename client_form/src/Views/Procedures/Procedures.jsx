// COMPONET'S
import FormProcedures from "../Forms/FormProcedures/FormProcedures";
import Filter from "../../Components/Filter/Filter";
import Lists from "../../Components/Lists";

// HOOK'S
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import { getAllProcedures } from "../../Redux/actions";

// LIBRARY
import Swal from "sweetalert2";

// STYLESHEET'S

const Procedures = () => {
  const dispatch = useDispatch();
  const selectorProcedures = useSelector((state) => state.procedures);
  const errorValidate = useSelector((state) => state.errors);

  useEffect(() => {
    dispatch(getAllProcedures());
  }, [dispatch]);

  useEffect(() => {
    errorValidate &&
      errorValidate.procedure === false &&
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: errorValidate.error,
      });
  }, [errorValidate]);

  return (
    <>
      {/* <Filter />
      <hr /> */}
      <FormProcedures />
      <hr />
      <Lists
        items={selectorProcedures}
        text={"Procedimientos"}
        flag={"procedures"}
      />
    </>
  );
};

export default Procedures;
