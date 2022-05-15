import Color from 'color';
import styled from 'styled-components';
import { baseColor, textColor } from '../../../utils/styles';

export const Container = styled.div`
  width: 100%;
  flex: 1;
`;

export const TextArea = styled.textarea<any>`
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 25px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-top: 15px;
  font-family: Poppins;
  color: ${baseColor};
  background: ${Color(textColor).lighten(0.2).toString()};
  border: ${(props) => props.isError && `2px solid ${Color('red').lighten(0.25).toString()}`};
`;
