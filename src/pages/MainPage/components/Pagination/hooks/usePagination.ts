import { useCallback, useEffect, useState } from 'react';

import { PaginationProps } from '../types';

export function usePagination({
  itemsPerPage,
  gamesList,
  setPaginatedItems,
}: PaginationProps) {
  const [offSet, setOffSet] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const createPaginationData = useCallback((): void => {
    const lastPageItem = offSet + itemsPerPage;
    const pageItems = gamesList.slice(offSet, lastPageItem);

    setPaginatedItems(pageItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offSet, gamesList, itemsPerPage]);

  useEffect(() => {
    setPageCount(Math.ceil(gamesList.length / itemsPerPage));
  }, [itemsPerPage, gamesList]);

  useEffect(() => {
    createPaginationData();
  }, [offSet, createPaginationData]);

  return {
    pageCount,
    setOffSet,
  };
}
