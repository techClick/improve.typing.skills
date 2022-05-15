import Color from 'color';
import styled from 'styled-components';
import { textColor, textColor3 } from '../../../utils/styles';

export const Container = styled.div`
  width: 100%;
  height: 250px;
`;

export const TextArea = styled.textarea<any>`
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 22px;
  box-sizing: border-box;
  padding: 5px 13px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 1.35;
  color: ${textColor3};
  background: ${Color(textColor).lighten(0.2).toString()};
  border: ${(props) => props.isError && `2px solid ${Color('red').lighten(0.25).toString()}`};
`;
