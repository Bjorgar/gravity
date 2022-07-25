import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { ImgArgs } from './types';

function applySize({
  height,
  width,
}: ImgArgs): FlattenSimpleInterpolation {
  return css`
    height: ${height}px;
    width: ${width}px;
  `;
}

export const Img = styled.img`
  ${applySize};
`;
