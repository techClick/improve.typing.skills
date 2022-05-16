import Color from 'color';
import styled from 'styled-components';
import { baseColor, blueColor, orange, textColor, textColor2 } from '../../../utils/styles';

export const Container = styled.div`
  background: ${Color(baseColor).lighten(0.6).toString()};
  width: 252px;
  height: 220px;
  border-radius: 4px;
  position: fixed;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  z-index: 2;
  padding: 15px 20px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const Header2 = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: 1px;
  color: ${textColor2};
`;

export const Input = styled.input`
  height: 45px;
  width: 100%;
  font-size: 20px;
  font-family: Poppins;
  padding-left: 7px;
  box-sizing: border-box;
`;

export const ButtonDiv = styled.div`
  margin-top: 9px;
  display: flex;
`;

export const BackButton = styled.div`
  color: ${textColor};
  background: ${Color(baseColor).lighten(1.07).toString()};
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
  border: 2px solid ${Color(baseColor).lighten(1.4).toString()};
  &:hover {
    background: ${Color(blueColor).lighten(0.55).toString()};
    color: ${Color(blueColor).darken(0.35).toString()};
  }
`;

export const SaveButton = styled.div<any>`
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
  margin-left: 9px;
  display: flex;
  opacity: ${(props) => !props.isClickable && '0.2'};
  cursor: ${(props) => props.isClickable ? 'pointer' : 'not-allowed'};
  border: 2px solid ${Color(orange).lighten(0.3).toString()};
  &:hover {
    background: ${(props) => props.isClickable && Color(orange).lighten(0.55).toString()};
    color: ${(props) => props.isClickable && Color(orange).darken(0.35).toString()};
  }
`;
