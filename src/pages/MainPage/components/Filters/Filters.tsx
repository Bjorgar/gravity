import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from '@src/hooks/useDebounce';
import { trimString } from '@src/utils/trimString';

import Selector from './components/Selector';
import { FiltersWrapper, Input } from './styles';
import { FilterData, FiltersProps } from './types';
import { filterGame } from './utils/filterGames';

export default function Filters({
  games,
  setFilteredGames,
}: FiltersProps): JSX.Element {
  const [value, setValue] = useState('');
  const [filterData, setFilterData] = useState<FilterData>({
    searchValue: '',
    provider: '',
  });

  useDebounce({
    value,
    ms: 1000,
    cb: () => setFilterData((s) => ({
      ...s,
      searchValue: trimString(value),
    })),
  });

  useEffect(() => {
    const filteredGames = filterGame({
      gamesList: games,
      filterData,
    });

    setFilteredGames(filteredGames);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterData, games]);

  function onChangeHandle(event: ChangeEvent<HTMLInputElement>): void {
    const typingValue = event.target.value;
    setValue(typingValue);
  }

  return (
    <FiltersWrapper>
      <Input
        type="text"
        value={value}
        onChange={onChangeHandle}
        placeholder="Search..."
      />
      <Selector
        setFilterData={setFilterData}
      />
    </FiltersWrapper>
  );
}
