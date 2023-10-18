// COMPONET'S
import List from "./List";
import Pagination from "./Pagination/Pagination";
import { ButtonEdit } from "../Components/ButtonEdit";

// HOOK'S
import { useState, useEffect } from "react";

// STYLESHEET'S

const Lists = ({ items, text }) => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h1>Lista de {text}:</h1>
      {currentItems.map(
        (
          {
            idState,
            idProcedures,
            idEquipment,
            idUnit,
            idUser,
            idCredential,
            idForm,
            dateStart,
            procedures,
            name,
            nameUser,
            nameUnit,
            emailUser,
            user,
            nroIdentification,
            phone,
            email,
            charge,
          },
          index
        ) => {
          return (
            <List
              key={index}
              index={index + 1}
              idState={idState}
              idProcedures={idProcedures}
              idEquipment={idEquipment}
              idUnit={idUnit}
              idCredential={idCredential}
              idForm={idForm}
              dateStart={dateStart}
              procedures={procedures}
              name={name}
              nameUser={nameUser}
              nameUnit={nameUnit}
              emailUser={emailUser}
              user={user}
              idUser={idUser}
              nroIdentification={nroIdentification}
              phone={phone}
              email={email}
              // edit={<ButtonEdit id={idUnit} />}
            />
          );
        }
      )}

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Lists;
