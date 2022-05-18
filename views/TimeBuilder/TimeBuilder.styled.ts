import styled from 'styled-components';
import { textColor, textColor2 } from '../../styles/styled';

const bigRes = '503px';
const minRes = '386px';
export const Header = styled.div`
  color: ${textColor};
  font-weight: 700;
  @media(max-width: ${minRes}){
    font-size: 17px;
  }
`;

export const Header2 = styled.div`
  font-size: 16px;
  color: ${textColor2};
  margin-bottom: 30px;
  @media(max-width: ${minRes}){
    font-size: 12px;
  }
`;

export const Header3 = styled.div`
  font-size: 24px;
  @media(max-width: ${bigRes}){
    font-size: 17px;
  }
  @media(max-width: ${minRes}){
    font-size: 13px;
  }
`;

export const SmallText = styled.div`
  color: ${textColor2};
  font-size: 15px;
  @media(max-width: ${bigRes}){
    font-size: 11px;
  }
  @media(max-width: ${minRes}){
    font-size: 9px;
  }
`;

export const ButtonDiv = styled.div`
  margin-top: 14px;
  display: flex;
`;
