export interface TransformedGameData {
  id: string;
  provider: string;
  title: string;
  demo?: string;
}

export interface ReturnedUseTransformGamesData {
  gamesData: TransformedGameData[] | undefined;
  isLoading: boolean;
}
