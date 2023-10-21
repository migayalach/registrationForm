// COMPONET'S
import FormUser from "../Forms/FormUser/FormUser";
import Filter from "../../Components/Filter/Filter";
import Lists from "../../Components/Lists";

// HOOK'S
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// JAVASCRIP

// REDUX
import { getAllUser } from "../../Redux/actions";

// STYLESHEET'S

const User = () => {
  const dispatch = useDispatch();
  const selectorUser = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <>
      <Filter />
      <hr />
      <FormUser />
      <hr />
      <Lists items={selectorUser} text={"Usuarios"} flag={"user"}/>
    </>
  );
};

export default User;
