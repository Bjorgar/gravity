import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  keyframes,
  ThemeProps,
} from 'styled-components';

import { IndicatorProps, IndicatorSize } from './types';

function applySize({
  size,
}: IndicatorProps): FlattenInterpolation<ThemeProps<DefaultTheme>> {
  return size === IndicatorSize.m
    ? css`
        border-top: 3px solid rgba(255, 255, 255, 0.2);
        border-right: 3px solid rgba(255, 255, 255, 0.2);
        border-bottom: 3px solid rgba(255, 255, 255, 0.2);
        border-left: 3px solid #ffffff;

        &, &::after {
          border-radius: 50%;
          width: 25px;
          height: 25px;
        }
      `
    : css`
        border-top: 10px solid rgba(159, 14, 255, 0.2);
        border-right: 10px solid rgba(159, 14, 255, 0.2);
        border-bottom: 10px solid rgba(159, 14, 255, 0.2);
        border-left: 10px solid ${({ theme }) => (theme.palette.primary[50])};

        &, &::after {
          border-radius: 50%;
          width: 100px;
          height: 100px;
        }
    `;
}

const load = keyframes`
  0% {
    transform: rotate(0deg);
  };
  100% {
    transform: rotate(360deg);
  };
`;

export const Loading = styled.div`
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation: ${load} 1.1s infinite linear;

  ${applySize};
`;
