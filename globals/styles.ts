import styled from 'styled-components';
import Color from 'color';

export const bigRes = 899.9999;
export const minRes = 599.9999;

export const blueColor = '#1685ec';
export const baseColor = '#071542';
export const topBarHeight = '60px';
export const greyColor = '#c9c9c9';
export const containerPadding = '40px';
export const textColor = 'white';

export const Background = styled.div<any>`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 4;
  bottom: 0;
  left: 0;
  background: black;
  opacity: 0.3;
`;

export const MainButton = styled.div`
  color: ${blueColor};
  background: ${Color(blueColor).lighten(0.87).toString()};
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding: 7px 20px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 13px;
  width: max-content;
  height: max-content;
  cursor: pointer;
  &:hover {
    background: ${Color(blueColor).lighten(0.55).toString()};
    color: ${Color(blueColor).darken(0.35).toString()};
  }
`;
