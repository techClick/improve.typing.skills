import Color from 'color';
import styled from 'styled-components';
import { textColor2 } from '../../styles/styled';

const bigRes = '584px';
const minRes = '484px';
export const Header = styled.div`
  font-size: 26px;
  font-weight: 700;
  @media(max-width: ${minRes}){
    font-size: 17px;
  }
`;

export const Header2 = styled.div`
  font-size: 16px;
  color: ${textColor2};
  font-weight: 500;
  margin-bottom: 30px;
  @media(max-width: ${minRes}){
    font-size: 14px;
  }
`;

export const Header3 = styled.div`
  font-size: 24px;
  @media(max-width: ${bigRes}){
    font-size: 16px;
  }
  @media(max-width: ${minRes}){
    font-size: 13px;
  }
`;

export const SmallText = styled.div`
  margin-top: 5px;
  font-size: 15px;
  @media(max-width: ${bigRes}){
    font-size: 12px;
  }
`;

export const SmallText2 = styled.div`
  color: ${textColor2};
  font-size: 14px;
  @media(max-width: ${bigRes}){
    font-size: 11px;
  }
`;

export const Required = styled.div`
  font-size: 14px;
  margin-top: 3px;
  color: ${Color('red').lighten(0.35).toString()};
`;

export const ButtonDiv = styled.div`
  margin-top: 13px;
`;
