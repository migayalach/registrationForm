// COMPONET'S
import { ButtonUpdate } from "../../Components/ButtonUpdate";
import Filter from "../../Components/Filter/Filter";
import Lists from "../../Components/Lists";

// HOOK'S
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import { getAllUserApi } from "../../Redux/actions";

// STYLESHEET'S
import "./user-api.css";

const UserApi = () => {
  const dispatch = useDispatch();
  const selectorUserApi = useSelector((state) => state.userApi);
  const selectorFilter = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(getAllUserApi);
  }, [dispatch]);

  const handleUpdateData = () => {
    dispatch(getAllUserApi());
  };

  return (
    <>
      <ButtonUpdate label={"Actualizar"} onClickUpdate={handleUpdateData} />
      <hr />
      <Filter />
      <hr />
      <Lists
        items={selectorFilter ? selectorFilter : selectorUserApi}
        text={"Lista de usuarios"}
        flag={"userApi"}
      />
    </>
  );
};

export default UserApi;
