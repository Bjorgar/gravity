import {
  createContext,
  useContext,
} from 'react';
import { useFetch } from '@src/hooks/useFetch';
import { GamesRes } from '@src/types/response';

import { ERROR_MESSAGE, GAMES_URL } from './constants';
import { GameContextProps, ValueData } from './types';

const GamesContext = createContext<ValueData | null>(null);

export function GameContextProvider({
  children,
}: GameContextProps): JSX.Element {
  const { isLoading, resData, errorInfo } = useFetch<GamesRes>(GAMES_URL);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value: ValueData = {
    isLoading,
    errorInfo,
    gamesList: resData,
  };

  return (
    <GamesContext.Provider value={value}>
      {children}
    </GamesContext.Provider>
  );
}

export function useGameContext(): ValueData {
  const value = useContext(GamesContext);
  if (!value) throw new Error(ERROR_MESSAGE);
  return value;
}
