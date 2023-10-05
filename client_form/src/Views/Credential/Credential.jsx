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

// STYLESHEET'S

const Credential = () => {
  const dispatch = useDispatch();
  const selectorCredential = useSelector((state) => state.credential);

  useEffect(() => {
    dispatch(getAllCredential());
  }, [dispatch]);

  return (
    <>
      <Filter />
      <hr />
      <FormCredential />
      <hr />
      <Lists items={selectorCredential} text={"Credenciales"} />
    </>
  );
};

export default Credential;
