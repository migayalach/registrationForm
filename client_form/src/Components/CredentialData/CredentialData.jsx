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

  const [credentialFields, setCredentialFields] = useState([]);

  const handleAddCredential = () => {
    const newIndex = credentialFields.length + 1;
    const newCredentialField = (
      <div key={newIndex}>
        <select name={`idCredential${newIndex}`}>
          <option> </option>
          {selectorCredential.map(({ idCredential, name }, index) => (
            <option key={index} value={idCredential}>
              {name}
            </option>
          ))}
        </select>
        <input type="checkbox" name="" id="" />
        <button type="button" onClick={() => handleRemoveCredential(newIndex)}>
          X
        </button>
      </div>
    );
    setCredentialFields([...credentialFields, newCredentialField]);
  };

  const handleRemoveCredential = (indexToRemove) => {
    const updatedFields = credentialFields.filter(
      (_, index) => index + 1 !== indexToRemove
    );
    setCredentialFields(updatedFields);
  };

  return (
    <>
      <p>3.- Credenciales de acceso</p>
      {credentialFields.map((field, index) => (
        <div key={index}>{field}</div>
      ))}
      <button type="button" onClick={handleAddCredential}>
        Agregar nuevas credenciales
      </button>
    </>
  );
};

export default CredentialData;
