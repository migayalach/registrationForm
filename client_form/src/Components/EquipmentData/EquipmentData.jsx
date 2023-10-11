// COMPONET'S

// HOOK'S
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// JAVASCRIP

// REDUX
import { getAllEquipment } from "../../Redux/actions";

// STYLESHEET'S

const EquipmentData = ({ onDataUserApiChange }) => {
  const dispatch = useDispatch();
  const selectorEquipment = useSelector((state) => state.equipment);
  const [data, setData] = useState({
    
  })

  useEffect(() => {
    dispatch(getAllEquipment());
  }, []);

  const [equipmentFields, setEquipmentFields] = useState([]);
  
  console.log(equipmentFields);

  const handleAddEquipment = () => {
    const newIndex = equipmentFields.length + 1;
    const newEquipmentField = (
      <div key={newIndex}>
        <label htmlFor={`idEquipment${newIndex}`}>Tipo: </label>
        <select name={`idEquipment${newIndex}`}>
          <option> </option>
          {selectorEquipment.map(({ idEquipment, name }, index) => (
            <option key={index} value={idEquipment}>
              {name}
            </option>
          ))}
        </select>
        <label htmlFor="">Host: </label>
        <input type="text" />
        <label htmlFor="">DIreccion IP: </label>
        <input type="text" />
        <label htmlFor="">Etiqueta de control: </label>
        <input type="checkbox" name="" id="" />
        <button type="button" onClick={() => handleRemoveEquipment(newIndex)}>
          X
        </button>
      </div>
    );
    setEquipmentFields([...equipmentFields, newEquipmentField]);
  };

  const handleRemoveEquipment = (indexToRemove) => {
    const updatedFields = equipmentFields.filter(
      (_, index) => index + 1 !== indexToRemove
    );
    setEquipmentFields(updatedFields);
  };

  console.log(equipmentFields);

  return (
    <>
      <p>2.- Equipos de computación</p>
      {equipmentFields.map((field, index) => (
        <div key={index}>{field}</div>
      ))}
      <button type="button" onClick={handleAddEquipment}>
        Agregar nuevos equipos
      </button>
    </>
  );
};

export default EquipmentData;
