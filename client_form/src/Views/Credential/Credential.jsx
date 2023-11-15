// COMPONET'S
import FormCredential from "../Forms/FormCredential/FormCredential";
import Filter from "../../Components/Filter/Filter";
import Lists from "../../Components/Lists";

// HOOK'S
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// JAVASCRIP

// REDUX
import { getAllCredential } from "../../Redux/actions";

// LIBRARY
import Swal from "sweetalert2";

// STYLESHEET'S

const Credential = () => {
  const dispatch = useDispatch();
  const selectorCredential = useSelector((state) => state.credential);
  const errorValidate = useSelector((state) => state.errors);

  useEffect(() => {
    dispatch(getAllCredential());
  }, [dispatch]);

  useEffect(() => {
    errorValidate &&
      errorValidate.credential === false &&
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
      <FormCredential />
      <hr />
      <Lists
        items={selectorCredential}
        text={"Credenciales"}
        flag={"credential"}
      />
    </>
  );
};

export default Credential;
