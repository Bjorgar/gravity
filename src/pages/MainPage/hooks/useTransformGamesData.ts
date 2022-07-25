import { useEffect, useState } from 'react';
import { useGameContext } from '@src/contexts/GamesContext';
import { GamesRes } from '@src/types/response';

import { ReturnedUseTransformGamesData, TransformedGameData } from '../types';

export function useTransformGamesData(): ReturnedUseTransformGamesData {
  const [
    transformedGamesData,
    setTransformedGamesData,
  ] = useState<TransformedGameData[]>();

  const { gamesList, isLoading } = useGameContext();

  function transformGameData(list: GamesRes): void {
    const transformedData = Object.entries(list)
      .reduce<TransformedGameData[]>((acc, [gameId, gameData]) => {
        const data: TransformedGameData = {
          id: gameId,
          title: gameData.title,
          provider: gameData.provider,
          demo: gameData.demo,
        };

        acc.push(data);

        return acc;
      }, []);

    setTransformedGamesData(transformedData);
  }

  useEffect(() => {
    if (gamesList) {
      transformGameData(gamesList);
    }
  }, [gamesList]);

  return {
    isLoading,
    gamesData: transformedGamesData,
  };
}
