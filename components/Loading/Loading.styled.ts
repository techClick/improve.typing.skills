import styled from 'styled-components';
import { baseColor, textColor } from '../../styles/styled';

export const Container = styled.div<any>`
  min-width: 100vw;
  height: 100vh;
  width: max-content;
  background: ${baseColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${textColor};
  font-size: 17px;
  font-weight: 700;
  font-family: Poppins;
`;
