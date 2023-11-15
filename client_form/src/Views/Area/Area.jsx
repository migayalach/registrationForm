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

// LIBRARY
import Swal from "sweetalert2";

// STYLESHEET'S

const Area = () => {
  const dispatch = useDispatch();
  const selectorArea = useSelector((state) => state.area);
  const errorValidate = useSelector((state) => state.errors);

  useEffect(() => {
    dispatch(getAllArea());
  }, [dispatch]);

  useEffect(() => {
    errorValidate &&
      errorValidate.unit === false &&
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
      <FormArea />
      <hr />
      <Lists items={clearName(selectorArea)} text={"Área"} flag={"area"} />
    </>
  );
};

export default Area;
