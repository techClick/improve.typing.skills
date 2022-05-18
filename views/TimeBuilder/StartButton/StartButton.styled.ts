import Color from 'color';
import styled from 'styled-components';
import { orange, textColor } from '../../../styles/styled';

export const Button = styled.div<any>`
  color: ${Color(textColor).lighten(0.1).toString()};
  background: ${orange};
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding: 7px 20px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 20px;
  width: max-content;
  height: max-content;
  margin-left: 13px;
  display: flex;
  opacity: ${(props) => !props.isClickable && '0.2'};
  cursor: ${(props) => props.isClickable ? 'pointer' : 'not-allowed'};
  border: 2px solid ${Color(orange).lighten(0.3).toString()};
  &:hover {
    background: ${(props) => props.isClickable && Color(orange).lighten(0.55).toString()};
    color: ${(props) => props.isClickable && Color(orange).darken(0.35).toString()};
  }
`;

export const IconContainer = styled.div`
  width: 26px;
  height: 30px;
`;

export const Icon = styled.div`
  transform: scale(1);
`;
