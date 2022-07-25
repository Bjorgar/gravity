import styled from 'styled-components';

const HEADER_HEIGHT = '150px';

export const Nav = styled.nav`
  height: ${HEADER_HEIGHT};
  border-bottom: 1px solid black;
  position: fixed;
`;

export const HeaderHolder = styled.div`
  height: ${HEADER_HEIGHT};
`;
