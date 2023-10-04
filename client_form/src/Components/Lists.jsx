// // COMPONET'S
// import List from "./List";
// import Pagintation from "./Pagination/Pagintation";

// // HOOK'S

// // STYLESHEET'S

// const Lists = ({ items, view, editState, deleteState, text }) => {
//   return (
//     <>
//       <h1>Lista de {text}</h1>
//       {items?.map(({ idState, name }, index) => {
//         return (
//           <List
//             key={index}
//             index={index + 1}
//             idState={idState}
//             name={name}
//             view={view}
//             edit={editState}
//             delete={deleteState}
//           />
//         );
//       })}
//     </>
//   );
// };

// export default Lists;

// COMPONET'S
import List from "./List";
import Pagintation from "./Pagination/Pagintation";

// HOOK'S
import { useState } from "react";

// STYLESHEET'S

const Lists = ({ items, view, editState, deleteState, text }) => {
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
      <h1>Lista de {text}</h1>
      {currentItems.map(({ idState, name }, index) => {
        return (
          <List
            key={index}
            index={index + 1}
            idState={idState}
            name={name}
            view={view}
            edit={editState}
            delete={deleteState}
          />
        );
      })}

      <Pagintation
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Lists;
