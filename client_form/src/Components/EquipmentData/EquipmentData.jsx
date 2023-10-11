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
    host: "",
    direccionIP: "",
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
  };

  useEffect(() => {
    dispatch(getAllEquipment());
  }, []);

  const handleAddEquipment = () => {};

  console.log(equipment);

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
          name="host"
          value={equipment.host}
          onChange={handleChange}
        />
        <label htmlFor="ip">Direction IP: </label>
        <input
          type="text"
          name="direccionIP"
          value={equipment.direccionIP}
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
        <select name="idEquipment" onChange={handleChange}>
          <option></option>
          {selectorEquipment.map(({ idEquipment, name }, index) => (
            <option key={index} value={idEquipment}>
              {name}
            </option>
          ))}
        </select>

        <br />

        <label htmlFor="host">Host: </label>
        <input
          type="text"
          name="host"
          value={equipment.host}
          onChange={handleChange}
        />

        <br />

        <label htmlFor="ip">Direction IP: </label>
        <input
          type="text"
          name="direccionIP"
          value={equipment.direccionIP}
          onChange={handleChange}
        />

        <br />

        <label htmlFor="control">Etiqueta de control: </label>
        <input
          type="checkbox"
          name="etiquetaControl"
          checked={equipment.etiquetaControl}
          onChange={(event) => handleChange(event)}
        />

        <br />
      </div>

      <button type="button" onClick={handleAddEquipment}>
        Agregar nuevos equipos
      </button>
    </>
  );
};

export default EquipmentData;



// MAS CONPLEJO
// const EquipmentData = ({ onDataUserApiChange }) => {
//   const dispatch = useDispatch();
//   const selectorEquipment = useSelector((state) => state.equipment);
//   const [data, setData] = useState({
//     tipo: "",
//     host: "",
//     directionIp: "",
//     etiquetaControl: false,
//   });

//   const handleChange = (event) => {
//     setData({
//       ...data,
//       [event.target.name]: event.target.value,
//     });
//   };

//   console.log(data);

//   useEffect(() => {
//     dispatch(getAllEquipment());
//   }, []);

//   const [equipmentFields, setEquipmentFields] = useState([]);

//   const handleAddEquipment = () => {
//     const newIndex = equipmentFields.length + 1;
//     const newEquipmentField = (
//       <div key={newIndex}>
//         <label htmlFor={`idEquipment${newIndex}`}>Tipo: </label>
//         <select name={`idEquipment${newIndex}`}>
//           <option> </option>
//           {selectorEquipment.map(({ idEquipment, name }, index) => (
//             <option key={index} value={idEquipment}>
//               {name}
//             </option>
//           ))}
//         </select>

//         <br />

//         <label htmlFor="">Host: </label>
//         <input
//           type="text"
//           value={data.host}
//           name="host"
//           onChange={handleChange}
//         />

//         <br />

//         <label htmlFor="">DIreccion IP: </label>
//         <input
//           type="text"
//           checked={data.etiquetaControl}
//           name="etiquetaControl"
//           onChange={handleChange}
//         />

//         <br />

//         <label htmlFor="">Etiqueta de control: </label>
//         <input
//           type="checkbox"
//           value={data.etiquetaControl}
//           name="control"
//           onChange={handleChange}
//         />

//         <br />

//         <button type="button" onClick={() => handleRemoveEquipment(newIndex)}>
//           X
//         </button>
//       </div>
//     );
//     setEquipmentFields([...equipmentFields, newEquipmentField]);
//   };

//   const handleRemoveEquipment = (indexToRemove) => {
//     const updatedFields = equipmentFields.filter(
//       (_, index) => index + 1 !== indexToRemove
//     );
//     setEquipmentFields(updatedFields);
//   };

//   return (
//     <>
//       <p>2.- Equipos de computación</p>
//       {equipmentFields.map((field, index) => (
//         <div key={index}>{field}</div>
//       ))}
//       <button type="button" onClick={handleAddEquipment}>
//         Agregar nuevos equipos
//       </button>
//     </>
//   );
// };

// export default EquipmentData;
