// COMPONET'S
import FilterForm from "../../Components/FilterForm/FilterForm";
import Form from "../Forms/Form/Form";
import Lists from "../../Components/Lists";

// HOOK'S
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import { getAllForm } from "../../Redux/actions";

// JAVASCRIP
import { swalMessage, toastSuccess } from "../../Utils/messageAler";

// LIBRARY
import { ToastContainer } from "react-toastify";

// STYLESHEET'S

const FormView = () => {
  const dispatch = useDispatch();
  const selecForm = useSelector((state) => state.form);
  const selecStateForm = useSelector((state) => state.errors || state.success);

  useEffect(() => {
    dispatch(getAllForm());
  }, [dispatch]);

  useEffect(() => {
    selecForm[0]?.message === "No se encontraron datos" &&
      swalMessage("No se encontraron datos", "info");
  }, [selecForm]);

  useEffect(() => {
    if (selecStateForm) {
      if (selecStateForm.form === false) {
        swalMessage(`Por favor ingresa datos`, "warning");
      } else if (selecStateForm.form === true) {
        toastSuccess(selecStateForm.message, "success");
      }
    }
  }, [selecStateForm]);

  return (
    <>
      <Form />
      <FilterForm />
      <Lists items={selecForm} text={"formularios"} flag={"form"} />
      <ToastContainer
        position="bottom-right"
        className="toast-container"
        autoClose={1500}
      />
    </>
  );
};

export default FormView;
