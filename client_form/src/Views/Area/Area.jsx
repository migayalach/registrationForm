// COMPONET'S
import FormArea from "../Forms/FormArea/FormArea";
import Filter from "../../Components/Filter/Filter";
import Lists from "../../Components/Lists";

// HOOK'S
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// JAVASCRIP
import { clearName } from "../../Utils/clearFunctions";

// REDUX
import { getAllArea } from "../../Redux/actions";

// STYLESHEET'S

const Area = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const selectorArea = useSelector((state) => state.area);

  const handleDataUpdate = (data) => {
    setData(data);
  };

  useEffect(() => {
    dispatch(getAllArea());
  }, [dispatch]);

  console.log(data);

  return (
    <>
      <Filter />
      <hr />
      <FormArea data={data} />
      <hr />
      <Lists
        items={clearName(selectorArea)}
        text={"Área"}
        // onEditData={handleDataUpdate}
      />
    </>
  );
};

export default Area;
