import { TransformedGameData } from '@src/pages/MainPage/types';

export interface GameCardProps {
  game: TransformedGameData
}

export interface PlayButtonArgs {
  isDemoAvailable: boolean;
}
