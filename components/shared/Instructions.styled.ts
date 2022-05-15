import Color from 'color';
import styled from 'styled-components';
import { baseColor, textColor } from '../../utils/styles';

export const Container = styled.div`
  max-height: 250px;
  background: ${Color('blue').darken(0.4).toString()};
  width: 100%;
  margin-bottom: 15px;
  padding: 20px 30px;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 24px;
`;
