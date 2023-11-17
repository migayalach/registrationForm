// COMPONET'S
import FormCredential from "../Forms/FormCredential/FormCredential";
import Filter from "../../Components/Filter/Filter";
import Lists from "../../Components/Lists";

// HOOK'S
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// JAVASCRIP
import { swalMessage, toastSuccess } from "../../Utils/messageAler";

// REDUX
import { getAllCredential } from "../../Redux/actions";

// LIBRARY
import { ToastContainer } from "react-toastify";

// STYLESHEET'S

const Credential = () => {
  const dispatch = useDispatch();
  const selectorCredential = useSelector((state) => state.credential);
  const selectStateCredential = useSelector(
    (state) => state.errors || state.success
  );

  useEffect(() => {
    dispatch(getAllCredential());
  }, [dispatch]);

  useEffect(() => {
    if (selectStateCredential) {
      if (selectStateCredential.credential === false) {
        swalMessage(selectStateCredential.error, "warning");
      } else if (selectStateCredential.credential === true) {
        toastSuccess(selectStateCredential.message, "success");
      }
    }
  }, [selectStateCredential]);

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
      <ToastContainer
        position="bottom-right"
        className="toast-container"
        autoClose={1500}
      />
    </>
  );
};

export default Credential;
