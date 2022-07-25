import Image from '@src/components/Image';

import { GameCardProps } from './types';

import {
  CardWrapper, CustomLink, LinkWrapper, Title,
} from './styled';

export default function GameCard({ game }: GameCardProps): JSX.Element {
  const isDemoAvailable = !!game.demo;

  return (
    <CardWrapper>
      <Image
        width={300}
        height={300}
        imageId={game.id}
      />
      <Title>{game.title}</Title>
      <LinkWrapper
        isDemoAvailable={isDemoAvailable}
      >
        <CustomLink
          to={game.demo || ''}
          state={game.title}
        >
          Play
        </CustomLink>
      </LinkWrapper>
    </CardWrapper>
  );
}
