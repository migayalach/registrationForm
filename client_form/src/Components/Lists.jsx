// COMPONET'S
import List from "./List";
import Pagination from "./Pagination/Pagination";

// HOOK'S
import { useState } from "react";

// STYLESHEET'S

const Lists = ({ items, text, flag }) => {
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
            dateEnd,
            procedure,
            state,
            procedures,
            name,
            nameUser,
            nameUnit,
            emailUser,
            user,
            nroIdentification,
            phone,
            email,
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
              dateEnd={dateEnd}
              procedure={procedure}
              state={state}
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
              flag={flag}
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
