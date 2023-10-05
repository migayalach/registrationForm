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

  return (
    <>
      <Filter />
      <hr />
      <ButtonUpdate label={"Actualizar"} />
      <hr />
      {/* <Lists/> */}
    </>
  );
};

export default UserApi;
