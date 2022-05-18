import styled from 'styled-components';
import { baseColor, textColor } from './styled';

export const Container = styled.div`
  min-width: 100vw;
  height: 100vh;
  width: max-content;
  background: ${baseColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${textColor};
  font-family: Poppins;
  padding: 20px;
  box-sizing: border-box;
`;
