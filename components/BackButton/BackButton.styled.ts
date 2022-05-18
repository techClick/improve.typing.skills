import Color from 'color';
import styled from 'styled-components';
import { baseColor, blueColor, textColor } from '../../styles/styled';

export const Button = styled.div`
  color: ${textColor};
  background: ${Color(baseColor).lighten(0.37).toString()};
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding: 7px 20px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 20px;
  width: max-content;
  height: max-content;
  display: flex;
  cursor: pointer;
  border: 2px solid ${Color(baseColor).lighten(0.6).toString()};
  &:hover {
    background: ${Color(blueColor).lighten(0.55).toString()};
    color: ${Color(blueColor).darken(0.35).toString()};
  }
`;

export const IconContainer = styled.div`
  width: 26px;
  height: 30px;
`;

export const Icon = styled.div`
  transform: scale(0.9);
`;
