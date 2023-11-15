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

// LIBRARY
import Swal from "sweetalert2";

// STYLESHEET'S

const User = () => {
  const dispatch = useDispatch();
  const selectorUser = useSelector((state) => state.user);
  const errorValidate = useSelector((state) => state.errors);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  useEffect(() => {
    errorValidate &&
      errorValidate.user === false &&
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: `Por favor ingresa datos`,
      });
  }, [errorValidate]);

  return (
    <>
      {/* <Filter />
      <hr /> */}
      <FormUser />
      <hr />
      <Lists items={selectorUser} text={"Usuarios"} flag={"user"} />
    </>
  );
};

export default User;
