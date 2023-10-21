// COMPONET'S
import { ButtonUpdate } from "../../Components/ButtonUpdate";
import Filter from "../../Components/Filter/Filter";
import Lists from "../../Components/Lists";

// HOOK'S
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import { addUserApi, getAllUserApi } from "../../Redux/actions";

// STYLESHEET'S
import "./user-api.css";

const UserApi = () => {
  const dispatch = useDispatch();
  const selectorUserApi = useSelector((state) => state.userApi);

  useEffect(() => {
    dispatch(getAllUserApi);
  }, [dispatch]);

  const handleUpdateData = () => {
    dispatch(getAllUserApi());
  };

  return (
    <>
      <Filter />
      <hr />
      <ButtonUpdate label={"Actualizar"} onClickUpdate={handleUpdateData} />
      <hr />
      <Lists items={selectorUserApi} text={"Lista de usuarios"} flag={"userApi"} />
    </>
  );
};

export default UserApi;
