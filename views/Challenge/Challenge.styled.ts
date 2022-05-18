import styled from 'styled-components';
import { textColor2 } from '../../utils/styles';

const bigRes = '405px';
export const Header = styled.div`
  font-weight: 700;
  @media(max-width: ${bigRes}){
    font-size: 17px;
  }
`;

export const Header2 = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${textColor2};
  margin-top: -2px;
  margin-bottom: 30px;
  @media(max-width: ${bigRes}){
    font-size: 11px;
  }
`;

export const Header3 = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${textColor2};
`;

export const TimeLeft = styled.div`
  font-size: 35px;
  font-weight: 700;
  margin-top: -8px;
  height: 45px;
`;

export const ButtonDiv = styled.div`
  margin-top: 14px;
  display: flex;
`;
