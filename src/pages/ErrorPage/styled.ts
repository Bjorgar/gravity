import styled from 'styled-components';

export const ErrorPageWrapper = styled.div`
  min-height: 100vh;
  color: ${({ theme }): string => theme.palette.grey[50]};
  font-family: ${({ theme }): string => theme.typography.fontFamily.secondary};
  font-weight: ${({ theme }): string => theme.typography.fontWeight[600]};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ErrorMessage = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }): string => spacing(3)};
`;

export const Status = styled.h1`
  text-align: center;
  color: ${({ theme }): string => theme.palette.primary[50]};
  font-size: 72px;
`;
