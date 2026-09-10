import { usePagination } from "../hooks/usePagination";

function PaginationDemo() {
  const items = Array.from(
    { length: 100 },
    (_, index) => `Item ${index + 1}`
  );

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination({
    totalItems: items.length,
    itemsPerPage: 10,
    initialPage: 1,
  });

  const currentItems = items.slice(startIndex, endIndex + 1);

  return (
    <section className="pagination-demo">
      <h2>Pagination Demo</h2>

      <div className="pagination-info">
        <p>
          Page {currentPage} of {totalPages}
        </p>

        <p>
          Showing {itemsOnCurrentPage} items
        </p>
      </div>

      <ul className="items">
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="pagination-controls">
        <button
          onClick={prevPage}
          disabled={!canPrevPage}
        >
          Previous
        </button>

        {Array.from(
          { length: totalPages },
          (_, index) => index + 1
        ).map((page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default PaginationDemo;