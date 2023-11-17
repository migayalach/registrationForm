// COMPONET'S
import FormProcedures from "../Forms/FormProcedures/FormProcedures";
import Lists from "../../Components/Lists";

// HOOK'S
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import { getAllProcedures } from "../../Redux/actions";

// JAVASCRIP
import { swalMessage, toastSuccess } from "../../Utils/messageAler";

// LIBRARY
import { ToastContainer } from "react-toastify";

// STYLESHEET'S

const Procedures = () => {
  const dispatch = useDispatch();
  const selectorProcedures = useSelector((state) => state.procedures);
  const stateProcedure = useSelector((state) => state.errors || state.success);

  useEffect(() => {
    dispatch(getAllProcedures());
  }, [dispatch]);

  useEffect(() => {
    if (stateProcedure) {
      if (stateProcedure.procedure === false) {
        swalMessage(stateProcedure.error, "warning");
      } else if (stateProcedure.procedure === true) {
        toastSuccess(stateProcedure.message, "success");
      }
    }
  }, [stateProcedure]);

  return (
    <>
      <FormProcedures />
      <hr />
      <Lists
        items={selectorProcedures}
        text={"Procedimientos"}
        flag={"procedures"}
      />
      <ToastContainer
        position="bottom-right"
        className="toast-container"
        autoClose={1500}
      />
    </>
  );
};

export default Procedures;
