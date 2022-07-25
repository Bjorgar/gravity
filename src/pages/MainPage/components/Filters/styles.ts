import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: ${({ theme: { spacing } }): string => spacing(5)};
`;

export const Input = styled.input`
  border: none;
  font-family: ${({ theme }): string => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }): string => theme.typography.fontWeight[400]};
  padding: ${({ theme }): string => theme.spacing()};
  font-size: 22px;
  width: 250px;
  background-color: ${({ theme }): string => theme.palette.primary[70]};
  color: ${({ theme }): string => theme.palette.grey[100]};
  border-radius: ${({ theme }): string => theme.shape.borderRadius.xl};

  &::placeholder {
    color: ${({ theme }): string => theme.palette.grey[70]};
  }
`;
