import { Dispatch, SetStateAction } from 'react';

import { TransformedGameData } from '../../types';

export interface FiltersProps {
  games: TransformedGameData[];
  setFilteredGames: Dispatch<SetStateAction<TransformedGameData[]>>;
}

export interface FilterData {
  searchValue: string;
  provider: string;
}

export interface FilterGamesArgs {
  filterData: FilterData;
  gamesList: TransformedGameData[];
}
