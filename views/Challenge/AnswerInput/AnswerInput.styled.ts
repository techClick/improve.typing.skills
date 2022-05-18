import Color from 'color';
import styled from 'styled-components';
import { orange, textColor, textColor3 } from '../../../styles/styled';

export const Container = styled.div`
  width: 100%;
  height: 250px;
`;

const orange2 = Color(orange).lighten(0.2).toString();
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
  border: ${(props) => props.isInputError && `2px solid ${Color('red').lighten(0.25).toString()}`};
  &:focus {
    border: 2px solid ${orange2};
    border-left: 4px solid ${orange2};
    border-right: 4px solid ${orange2};
    outline: 2px solid ${orange2};
    border-radius: 3px;
  }
`;
