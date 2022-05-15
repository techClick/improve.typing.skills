import Color from 'color';
import styled from 'styled-components';
import { textColor2 } from '../../utils/styles';

export const Header2 = styled.div`
  font-size: 16px;
  color: ${textColor2};
  font-weight: 500;
  margin-bottom: 30px;
`;

export const SmallText = styled.div`
  margin-top: 5px;
  font-size: 15px;
`;

export const SmallText2 = styled.div`
  color: ${textColor2};
  font-size: 14px;
`;

export const Required = styled.div`
  font-size: 14px;
  margin-top: 3px;
  color: ${Color('red').lighten(0.35).toString()};
`;

export const ButtonDiv = styled.div`
  margin-top: 13px;
`;
