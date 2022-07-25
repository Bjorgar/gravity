import Down from '@src/assets/down.svg';
import styled from 'styled-components';

import { IsActiveValue } from './types';

export const SelectorWrapper = styled.div`
  position: relative;
  font-family: ${({ theme }): string => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }): string => theme.typography.fontWeight[300]};
  font-size: 22px;
  width: 270px;
  background-color: ${({ theme }): string => theme.palette.primary[70]};
  color: ${({ theme }): string => theme.palette.grey[100]};
  border-radius: ${({ theme }): string => theme.shape.borderRadius.xl};
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const InfoText = styled.span`
  display: contents;
`;

export const SelectorButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  font-size: 22px;
  font-family: ${({ theme }): string => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }): string => theme.typography.fontWeight[300]};
  padding: ${({ theme }): string => theme.spacing()};
  color: ${({ theme }): string => theme.palette.grey[100]};
`;

export const SelectorBody = styled.ul<IsActiveValue>`
  display: ${({ isActive }): string => isActive ? 'block' : 'none'};
  width: 100%;
  height: 500px;
  z-index: 100;
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 1px;
  overflow-y: auto;
  border-radius: ${({ theme }): string => theme.shape.borderRadius.xl};
  list-style-type: none;
`;

export const Option = styled.li`
  cursor: pointer;
  border-top: 1px solid ${({ theme }): string => theme.palette.grey[100]};
  background-color: ${({ theme }): string => theme.palette.primary[70]};
  padding: ${({ theme }): string => theme.spacing()};
  transition-duration: ${({ theme }): string => (
    theme.transitionDuration.normal
  )};

  &:first-child {
    border: none;
  }

  &:hover {
    background-color: ${({ theme }): string => theme.palette.primary[50]};
  }
`;

export const ButtonText = styled.span``;

export const ArrowWrapper = styled.span<IsActiveValue>`
  display: flex;
  transform: ${({ isActive }): string => (
    isActive ? 'rotateX(0deg)' : 'rotateX(180deg)'
  )};
  transition-duration: ${({ theme }): string => (
    theme.transitionDuration.normal
  )};
`;

export const Arrow = styled(Down)`
  height: 24px;
  fill: ${({ theme }): string => theme.palette.grey[100]};
`;
