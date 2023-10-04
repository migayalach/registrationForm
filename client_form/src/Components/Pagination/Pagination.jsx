// COMPONET'S

// HOOK'S

// STYLESHEET'S

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <span key={i} className={i === currentPage ? "active" : ""}>
          <button onClick={() => onPageChange(i)}>{i}</button>
        </span>
      );
    }
    return pageNumbers;
  };

  return (
    <nav>
      <ul className="pagination">{renderPageNumbers()}</ul>
    </nav>
  );
};

export default Pagination;
