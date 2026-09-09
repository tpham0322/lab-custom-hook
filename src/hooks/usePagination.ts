import { useMemo, useState } from "react";

interface UsePaginationOptions {
  totalItems: number;
  itemsPerPage?: number;
  initialPage?: number;
}

export function usePagination({
  totalItems,
  itemsPerPage = 10,
  initialPage = 1,
}: UsePaginationOptions) {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const [currentPage, setCurrentPage] = useState(() =>
    Math.min(Math.max(initialPage, 1), totalPages)
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = Math.min(
    startIndex + itemsPerPage - 1,
    Math.max(totalItems - 1, 0)
  );

  const itemsOnCurrentPage =
    totalItems === 0
      ? 0
      : endIndex - startIndex + 1;

  const setPage = (pageNumber: number) => {
    const validPage = Math.min(
      Math.max(pageNumber, 1),
      totalPages
    );

    setCurrentPage(validPage);
  };

  const nextPage = () => {
    setCurrentPage((page) =>
      Math.min(page + 1, totalPages)
    );
  };

  const prevPage = () => {
    setCurrentPage((page) =>
      Math.max(page - 1, 1)
    );
  };

  const canNextPage = currentPage < totalPages;
  const canPrevPage = currentPage > 1;

  return useMemo(
    () => ({
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
    }),
    [
      currentPage,
      totalPages,
      startIndex,
      endIndex,
      itemsOnCurrentPage,
      canNextPage,
      canPrevPage,
    ]
  );
}