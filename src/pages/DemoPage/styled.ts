import { Link } from 'react-router-dom';
import Back from '@src/assets/back.svg';
import { MARGIN_TOP } from '@src/theme/constants';
import styled from 'styled-components';

export const DemoPageWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${MARGIN_TOP};
`;

export const GameName = styled.h1`
  color: ${({ theme }): string => theme.palette.primary[70]};
  font-family: ${({ theme }): string => theme.typography.fontFamily.secondary};
  font-weight: ${({ theme }): string => theme.typography.fontWeight[600]};
  font-size: 48px;
  text-align: center;
  margin-top: ${({ theme: { spacing } }): string => spacing(10)};
`;

export const BackArrow = styled(Back)`
  height: 50px;
  fill: ${({ theme }): string => theme.palette.grey[100]};
  transition-duration: ${({ theme }): string => (
    theme.transitionDuration.normal
  )};
`;

export const BackLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 50px;
  background-color: ${({ theme }): string => theme.palette.primary[70]};
  font-family: ${({ theme }): string => theme.typography.fontFamily.primary};
  font-size: 18px;
  border-radius: ${({ theme }): string => theme.shape.borderRadius.xl};
  color: ${({ theme }): string => theme.palette.grey[100]};
  text-decoration: none;
  padding: 0 ${({ theme: { spacing } }): string => spacing()};
  overflow: hidden;

  &:hover ${BackArrow} {
    transform: translateX(-5px);
  }
`;

export const ButtonText = styled.span`
  display: contents;
`;

export const ProviderInfo = styled.p`
  font-family: ${({ theme }): string => theme.typography.fontFamily.primary};
  font-size: 14px;
  padding: ${({ theme: { spacing } }): string => spacing()} 0;
  margin-top: ${({ theme: { spacing } }): string => spacing(3)};
  border-bottom: 1px solid ${({ theme }): string => theme.palette.primary[70]};
`;

export const IframeWrapper = styled.div``;

export const Iframe = styled.iframe`
  border: 5px solid ${({ theme }): string => theme.palette.primary[70]};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;
