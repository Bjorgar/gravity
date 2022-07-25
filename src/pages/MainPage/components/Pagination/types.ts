import { Dispatch, SetStateAction } from 'react';

import { TransformedGameData } from '../../types';

export interface PaginationProps {
  gamesList: TransformedGameData[];
  itemsPerPage: number;
  setPaginatedItems: Dispatch<
    SetStateAction<
      TransformedGameData[] | undefined
    >
  >;
}

export interface onPageChangeProp {
  selected: number;
}
