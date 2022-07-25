import styled, { css } from 'styled-components';

const textCommon = css`
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight[300]};
  color: ${({ theme }) => theme.palette.grey[0]};
`;

export const Heading1 = styled.h1`
  ${textCommon};
  font-size: 32px;
`;

export const Heading2 = styled.h2`
  ${textCommon};
  font-size: 24px;
`;

export const Paragraph = styled.p`
  ${textCommon};
  font-size: 20px;
`;

export const ListItem = styled.p`
  ${textCommon};
  font-size: 14px;
`;
