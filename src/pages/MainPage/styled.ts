import { MARGIN_TOP } from '@src/theme/constants';
import { Heading1 } from '@src/theme/pagesElements';
import styled from 'styled-components';

export const MainPageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: ${MARGIN_TOP};
`;

export const Empty = styled(Heading1)`
  text-align: center;
`;
