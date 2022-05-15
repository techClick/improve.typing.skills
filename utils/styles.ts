import styled from 'styled-components';
import Color from 'color';

export const bigRes = 899.9999;
export const minRes = 599.9999;

export const blueColor = '#1685ec';
export const baseColor = '#071542';
export const greyColor = '#c9c9c9';
export const orange = Color('#DC4D18').darken(0.05).toString();
export const textColor = Color('white').darken(0.2).toString();
export const textColor2 = Color('white').darken(0.45).toString();

export const Container = styled.div`
  width: 90%;
  max-width: 700px;
  min-width: 460px;
  height: 80%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Background = styled.div<any>`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;
