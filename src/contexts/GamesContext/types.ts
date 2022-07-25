import { ReactNode } from 'react';
import { GamesRes } from '@src/types/response';

export interface GameContextProps {
  children: ReactNode;
}

export interface ValueData {
  isLoading: boolean;
  gamesList?: GamesRes;
  errorInfo?: string;
}
