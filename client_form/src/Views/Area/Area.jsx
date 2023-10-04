// COMPONET'S
import FormArea from "../Forms/FormArea/FormArea";
import Filter from "../../Components/Filter/Filter";
import Lists from "../../Components/Lists";

// HOOK'S
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// JAVASCRIP
import { clearName } from "../../Utils/clearFunctions";

// REDUX
import { getAllArea } from "../../Redux/actions";

// STYLESHEET'S

const Area = () => {
  const dispatch = useDispatch();
  const selectorArea = useSelector((state) => state.area);

  useEffect(() => {
    dispatch(getAllArea());
  }, [dispatch]);

  return (
    <>
      <Filter />
      <hr />
      <FormArea />
      <hr />
      <Lists items={clearName(selectorArea)} text={"Área"} />
    </>
  );
};

export default Area;
