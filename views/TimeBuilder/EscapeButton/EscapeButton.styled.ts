import Color from 'color';
import styled from 'styled-components';
import { textColor } from '../../../utils/styles';

export const Container = styled.div`
  position: absolute;
  right: 0px;
  top: -5px;
  color: ${textColor};
  cursor: pointer;
  &:hover {
    color: ${Color('red').lighten(0.4).toString()};
  }
`;

export const ClearIcon = styled.div<any>`
  transform: scaleX(0.4) scaleY(0.35);
  margin-right: 3px;
  margin-top: 3px;
`;
