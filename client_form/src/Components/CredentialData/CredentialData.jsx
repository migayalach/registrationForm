// COMPONET'S

// HOOK'S
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// JAVASCRIP

// REDUX
import { getAllCredential } from "../../Redux/actions";

// STYLESHEET'S

const CredentialData = () => {
  const dispatch = useDispatch();
  const selectorCredential = useSelector((state) => state.credential);

  useEffect(() => {
    dispatch(getAllCredential());
  }, []);

  const [data, setData] = useState({
    idCredential: "",
    check: false,
  });

  const handleChage = (event) => {
    console.log(event);
    setData({
      ...data,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };


  

  
  return (
    <>
      <p>3.- Credenciales de acceso</p>
    
    </>
  );
};

export default CredentialData;
