// COMPONET'S
import Filter from "../../Components/Filter/Filter";
import Form from "../Forms/Form/Form";
import Lists from "../../Components/Lists";

// HOOK'S
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import { getAllForm } from "../../Redux/actions";

// JAVASCRIP

// STYLESHEET'S

const FormView = () => {
  const dispatch = useDispatch();
  const selecForm = useSelector((state) => state.form);

  useEffect(() => {
    dispatch(getAllForm());
  }, [dispatch]);

  return (
    <>
      <Form />
      <Filter />
      <Lists items={selecForm} text={"Lista de formularios"} flag={"form"} />
    </>
  );
};

export default FormView;
