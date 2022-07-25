import ReactPaginate from 'react-paginate';
import Back from '@src/assets/back.svg';
import Forward from '@src/assets/forward.svg';
import styled, { css } from 'styled-components';

const arrowCommon = css`
  fill: ${({ theme }): string => theme.palette.grey[50]};
  height: 44px;
  transition-duration: ${({ theme }): string => (
    theme.transitionDuration.normal
  )};
`;

export const Next = styled(Forward)`
  ${arrowCommon};
  &:hover {
    transform: translateX(5px);
  }
`;

export const Prev = styled(Back)`
  ${arrowCommon};
  &:hover {
    transform: translateX(-5px);
  }
`;

export const PaginationWrapper = styled.div`
  margin: ${({ theme: { spacing } }): string => spacing(6)} 0px;
  display: flex;
  justify-content: center;
`;

export const CustomPagination = styled(ReactPaginate)`
  list-style-type: none;
  display: flex;
  font-family: ${({ theme }): string => theme.typography.fontFamily.secondary};
  font-weight: ${({ theme }): string => theme.typography.fontWeight[400]};
  color: ${({ theme }): string => theme.palette.grey[50]};
  font-size: 28px;
  gap: ${({ theme }): string => theme.spacing(1.5)};
  line-height: 1;
  user-select: none;

  li > a {
    display: block;
    padding: ${({ theme: { spacing } }): string => (
    `${spacing()} ${spacing(2)}`
  )};
    border-radius: ${({ theme }): string => theme.shape.borderRadius.m};
    cursor: pointer;
  };

  .selected > a {
    background-color: ${({ theme }): string => theme.palette.primary[70]};
    color: ${({ theme }): string => theme.palette.grey[100]};
  };

  .next > a, .previous > a {
    padding: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  };
`;
