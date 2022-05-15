import Color from 'color';
import styled from 'styled-components';
import { textColor, textColor3 } from '../../../utils/styles';

export const Container = styled.div`
  width: 100%;
  flex: 1;
  max-height: 250px;
`;

export const TextAreaDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Apostrophe = styled.div`
  width: 180px;
  height: 10px;
  position: absolute;
  left: -47px;
  top: -40px;
  font-family: Lucida Handwriting;
  font-weight: 600;
  color: ${textColor3};
  opacity: 0.225;
  font-size: 380px;
  pointer-events: none;
`;

export const TextArea = styled.textarea<any>`
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 22px;
  box-sizing: border-box;
  padding: 9px 15px;
  padding-left: 152px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 1.375;
  color: ${textColor3};
  background: ${Color(textColor).lighten(0.2).toString()};
  border: ${(props) => props.isError && `2px solid ${Color('red').lighten(0.25).toString()}`};
  border-radius: 1px;
`;
