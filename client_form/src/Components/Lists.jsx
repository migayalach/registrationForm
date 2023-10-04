// COMPONET'S
import List from "./List";

// HOOK'S

// STYLESHEET'S

const Lists = ({ items, view, editState, deleteState, text }) => {
  return (
    <>
      <h1>Lista de {text}</h1>
      {items?.map(({ idState, name }, index) => {
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
    </>
  );
};

export default Lists;
