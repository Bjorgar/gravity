import { usePagination } from './hooks/usePagination';
import { onPageChangeProp, PaginationProps } from './types';

import {
  CustomPagination,
  Next,
  PaginationWrapper,
  Prev,
} from './styled';

export default function Pagination({
  gamesList,
  itemsPerPage,
  setPaginatedItems,
}: PaginationProps): JSX.Element {
  const {
    pageCount,
    setOffSet,
  } = usePagination({
    gamesList,
    itemsPerPage,
    setPaginatedItems,
  });

  function pageChangeHandle({ selected }: onPageChangeProp): void {
    const newOffSet = selected * itemsPerPage;
    setOffSet(newOffSet);
  }

  return (
    <PaginationWrapper>
      {
        pageCount > 2 && (
          <CustomPagination
            pageCount={pageCount}
            onPageChange={pageChangeHandle}
            nextLabel={<Next />}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            previousLabel={<Prev />}
            breakLabel="..."
          />
        )
      }
    </PaginationWrapper>
  );
}
