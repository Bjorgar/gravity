import { TransformedGameData } from '../../../../types';

export interface GameCardProps {
  game: TransformedGameData
}

export interface PlayButtonArgs {
  isDemoAvailable: boolean;
}
