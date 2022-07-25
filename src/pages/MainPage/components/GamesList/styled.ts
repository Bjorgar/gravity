import styled from 'styled-components';

import { CARD_WIDTH } from './components/GameCard/constants';

export const GamesCardsWrapper = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(${CARD_WIDTH}, ${CARD_WIDTH}));
`;
