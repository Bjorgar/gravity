import styled from 'styled-components';

export const CommonWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing(5)};
  margin-left: ${({ theme }) => theme.spacing(5)};
`;

export const Paper = styled.div`
  width: 100%;
  max-width: 1280px;
`;
