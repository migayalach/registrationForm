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
  const [equipment, setEquipment] = useState({
    idEquipment: "",
    dataHos: "",
    dataP: "",
    etiquetaControl: false,
  });

  const handleChange = (event) => {
    setEquipment({
      ...equipment,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });

    onDataUserApiChange({
      equipment,
      equipment2,
    });
  };

  // DOS
  const selectorEquipment2 = useSelector((state) => state.equipment);
  const [equipment2, setEquipment2] = useState({
    idEquipment: "",
    dataHos: "",
    dataP: "",
    etiquetaControl: false,
  });

  const handleChange2 = (event) => {
    setEquipment2({
      ...equipment2,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
    onDataUserApiChange({
      equipment,
      equipment2,
    });
  };

  useEffect(() => {
    dispatch(getAllEquipment());
  }, []);

  return (
    <>
      <p>2.- Equipos de computación</p>
      <div>
        <select name="idEquipment" onChange={handleChange}>
          <option></option>
          {selectorEquipment.map(({ idEquipment, name }, index) => (
            <option key={index} value={idEquipment}>
              {name}
            </option>
          ))}
        </select>
        <label htmlFor="host">Host: </label>
        <input
          type="text"
          name="dataHos"
          value={equipment.dataHos}
          onChange={handleChange}
        />
        <label htmlFor="ip">Direction IP: </label>
        <input
          type="text"
          name="dataP"
          value={equipment.dataP}
          onChange={handleChange}
        />
        <label htmlFor="control">Etiqueta de control: </label>
        <input
          type="checkbox"
          name="etiquetaControl"
          checked={equipment.etiquetaControl}
          onChange={(event) => handleChange(event)}
        />
      </div>

      <hr />

      <div>
        <select name="idEquipment" onChange={handleChange2}>
          <option></option>
          {selectorEquipment2.map(({ idEquipment, name }, index) => (
            <option key={index} value={idEquipment}>
              {name}
            </option>
          ))}
        </select>
        <label htmlFor="host">Host: </label>
        <input
          type="text"
          name="dataHos"
          value={equipment2.dataHos}
          onChange={handleChange2}
        />
        <label htmlFor="ip">Direction IP: </label>
        <input
          type="text"
          name="dataP"
          value={equipment2.dataP}
          onChange={handleChange2}
        />
        <label htmlFor="control">Etiqueta de control: </label>
        <input
          type="checkbox"
          name="etiquetaControl"
          checked={equipment2.etiquetaControl}
          onChange={(event) => handleChange2(event)}
        />
      </div>
      <span>¿Esta seguro de esta información?: </span>
      <input type="checkbox" onChange={(event) => handleChange2(event)} />
    </>
  );
};

export default EquipmentData;
