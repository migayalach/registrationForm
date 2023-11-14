// COMPONET'S
import Filter from "../../Components/Filter/Filter";
import Form from "../Forms/Form/Form";
import Lists from "../../Components/Lists";

// HOOK'S
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import { getAllForm } from "../../Redux/actions";

// LIBRARY
import Swal from "sweetalert2";

// JAVASCRIP

// STYLESHEET'S

const FormView = () => {
  const dispatch = useDispatch();
  const selecForm = useSelector((state) => state.form);

  useEffect(() => {
    dispatch(getAllForm());
  }, [dispatch]);

  useEffect(() => {
    selecForm[0]?.message === "No se encontraron datos" &&
      Swal.fire({
        icon: "info",
        title: "Oops...",
        text: "No se encontraron datos",
      });
  }, [selecForm]);

  return (
    <>
      <Form />
      <Filter />
      <Lists items={selecForm} text={"formularios"} flag={"form"} />
    </>
  );
};

export default FormView;
