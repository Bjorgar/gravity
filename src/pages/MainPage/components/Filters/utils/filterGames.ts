import { TransformedGameData } from '@src/pages/MainPage/types';

import { FilterGamesArgs } from '../types';

export function filterGame({
  gamesList,
  filterData,
}: FilterGamesArgs): TransformedGameData[] {
  return gamesList.filter(({ title, provider }) => (
    title.toLocaleLowerCase()
      .includes(filterData.searchValue.toLocaleLowerCase())
      && provider.includes(filterData.provider)
  ));
}
