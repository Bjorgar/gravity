import GameCard from './components/GameCard';
import { GamesListProps } from './types';

import { GamesCardsWrapper } from './styled';

export default function GamesList({ gamesList }: GamesListProps) {
  return (
    <GamesCardsWrapper>
      {
        gamesList.map((game) => (
          <GameCard
            key={game.id}
            game={game}
          />
        ))
      }
    </GamesCardsWrapper>
  );
}
