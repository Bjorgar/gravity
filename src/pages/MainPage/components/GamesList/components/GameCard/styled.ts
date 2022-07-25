import { Link } from 'react-router-dom';
import { Heading2 } from '@src/theme/pagesElements';
import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import { CARD_WIDTH } from './constants';
import { PlayButtonArgs } from './types';

const applyPlayButtonStyle = ({
  isDemoAvailable,
}: PlayButtonArgs): FlattenInterpolation<
    ThemeProps<DefaultTheme>
> => (isDemoAvailable
  ? css`
      background-color: ${({ theme }): string => theme.palette.primary[50]};
      cursor: pointer;

      &:hover {
        color: ${({ theme }): string => theme.palette.grey[0]};
        background-color: ${({ theme }): string => theme.palette.primary[90]};
      };
    `
  : css`
      background-color: ${({ theme }): string => theme.palette.grey[70]};
      pointer-events: none;
    `
);

export const CardWrapper = styled.div`
  position: relative;
  width: ${CARD_WIDTH};
  height: 450px;
  border-radius: ${({ theme }): string => theme.shape.borderRadius.l};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const Title = styled(Heading2)`
  padding: 10px;
  text-align: center;
`;

export const LinkWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  color: ${({ theme }): string => theme.palette.grey[100]};
  font-size: 24px;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  transition-duration: ${({ theme }): string => (
    theme.transitionDuration.normal
  )};
  
  ${applyPlayButtonStyle};
`;

export const CustomLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;
