import { useState } from 'react';
import LoadIndicator from '@src/components/LoadIndicator';
import { IndicatorSize } from '@src/components/LoadIndicator/types';

import Filters from './components/Filters';
import GamesList from './components/GamesList';
import Pagination from './components/Pagination';
import { useTransformGamesData } from './hooks/useTransformGamesData';
import { TransformedGameData } from './types';

import { Empty, MainPageWrapper } from './styled';

export default function MainPage(): JSX.Element {
  const [displayedGames, setDisplayedGames] = useState<TransformedGameData[]>();
  const [filteredGames, setFilteredGames] = useState<TransformedGameData[]>([]);
  const { isLoading, gamesData } = useTransformGamesData();

  const displayedContent = () => {
    if (isLoading) {
      return <LoadIndicator size={IndicatorSize.xxl} />;
    }
    if (gamesData) {
      return (
        <>
          <Filters
            games={gamesData}
            setFilteredGames={setFilteredGames}
          />
          { displayedGames && <GamesList gamesList={displayedGames} /> }
          <Pagination
            gamesList={filteredGames}
            itemsPerPage={10}
            setPaginatedItems={setDisplayedGames}
          />
        </>
      );
    }
    return <Empty>Games list is empty</Empty>;
  };

  return (
    <MainPageWrapper>
      {displayedContent()}
    </MainPageWrapper>
  );
}
