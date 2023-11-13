// COMPONET'S
import FormUser from "../Forms/FormUser/FormUser";
import { ButtonEdit } from "../../Components/ButtonEdit";

// HOOK'S
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//REDUX
import { getNameUser, editUser } from "../../Redux/actions";

// JAVASCRIP

// STYLESHEET'S

const About = () => {
  const dispatch = useDispatch();
  const selectUser = useSelector((state) => state.auxUser);
  const userInfo = useSelector((state) => state.user);
  const nameUser = selectUser[0]?.name;
  const idUser = userInfo[0]?.idUser;

  useEffect(() => {
    dispatch(getNameUser(nameUser));
  }, [nameUser]);
  return (
    <>
      <FormUser />
      <h3>Mi informacion personal</h3>
      <span>{nameUser}</span>
      <span>Actualizar datos: </span>
      <ButtonEdit idUser={idUser} flag="user" />
    </>
  );
};

export default About;
