import styled, { keyframes } from 'styled-components';
import Color from 'color';

export const blueColor = '#1685ec';
export const baseColor = '#071542';
export const greyColor = '#c9c9c9';
export const orange = Color('#DC4D18').darken(0.05).toString();
export const textColor = Color('white').darken(0.2).toString();
export const textColor2 = Color('white').darken(0.45).toString();
export const textColor3 = Color('#AFB5CA').darken(0.6).toString();

const resizeIn = keyframes`
  0% {
    height: 30%;
    width: 30%;
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    width: 100%;
    opacity: 1;
    height: 90%;
  }
`;

const opacityIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.85;
  }
`;

export const MainContainer = styled.div<any>`
  width: 100%;
  max-width: 700px;
  min-width: 15px; // 325px;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  animation: ${(props) => props.isAnimation1 ? resizeIn : opacityIn} 0.15s ease-in;
`;

export const Container = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
`;

export const Background = styled.div<any>`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  background: black;
  opacity: 0.85;
  animation: ${opacityIn} 0.1s ease-in;
`;
