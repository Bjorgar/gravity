export interface Provider {
  id: string;
  title: string;
}

export interface GameData {
  title: string;
  provider: string;
  collections: {
    [collection: string]: number;
  };
  real: {
    [currencyCode: string]: {
      id: number;
      jackpot: number;
    };
  };
  demo?: string;
}

export interface GamesRes {
  [gameId: string]: GameData;
}

export type ProviderRes = Provider[];
