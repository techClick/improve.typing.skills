import Color from 'color';
import styled from 'styled-components';
import { baseColor, blueColor, orange, textColor, textColor2 } from '../../../utils/styles';

export const Container = styled.div`
  background: ${Color(baseColor).lighten(0.6).toString()};
  width: 295px;
  height: 307px;
  border-radius: 4px;
  position: fixed;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  z-index: 2;
  border: 2px solid ${Color(baseColor).lighten(1.8).toString()};
`;

export const Header = styled.div`
  font-size: 19px;
  font-weight: 700;
  padding: 15px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid ${Color(baseColor).lighten(1.8).toString()};
`;

export const Header2 = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  padding: 0px 20px;
  box-sizing: border-box;
  color: ${textColor2};
`;

export const Score = styled.div`
  margin-top: 0px;
  font-size: 42px;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin: 0px 20px;
  height: 42px;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const Slash = styled.div`
  font-size: 42px;
  font-weight: 700;
  margin-right: 6px;
  margin-left: 3px;
`;

export const Label = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-top: -1px;
  height: 10px;
  color: ${textColor2};
  padding: 0px 20px;
  box-sizing: border-box;
`;

export const WhiteSpan = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${textColor};
`;

export const Header3 = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  padding: 0px 20px;
  box-sizing: border-box;
  color: ${textColor2};
`;

export const Speed = styled.div`
  margin-top: -1px;
  font-size: 38px;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin: 0px 20px;
  box-sizing: border-box;
  overflow-x: auto;
  overflow-y: hidden;
  height: 40px;
`;

export const SecSpan = styled.span`
  font-size: 28px;
  margin-top: 5px;
`;

export const ButtonDiv = styled.div`
  margin-top: 10px;
  display: flex;
  padding: 0px 20px;
  box-sizing: border-box;
`;

export const RetryButton = styled.div`
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

export const NewButton = styled.div<any>`
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
  cursor: pointer;
  border: 2px solid ${Color(orange).lighten(0.3).toString()};
  &:hover {
    background: ${Color(orange).lighten(0.55).toString()};
    color: ${Color(orange).darken(0.35).toString()};
  }
`;
