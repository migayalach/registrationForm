// COMPONET'S
import FormHigh from "../Forms/FormHigh/FormHigh";
import Filter from "../../Components/Filter/Filter";
import Lists from "../../Components/Lists";

// HOOK'S
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// JAVASCRIP

// REDUX
import { getAllForm } from "../../Redux/actions";

// STYLESHEET'S

const High = () => {
  const dispatch = useDispatch();
  const selectorForm = useSelector((state) => state.form);

  useEffect(() => {
    dispatch(getAllForm());
  }, [dispatch]);

  return (
    <>
      <Filter />
      <hr />
      <h1>soy high</h1>
      <FormHigh />
      <hr />
      <Lists items={selectorForm} text={"Altas"} flag={"alta"} />
    </>
  );
};

export default High;
