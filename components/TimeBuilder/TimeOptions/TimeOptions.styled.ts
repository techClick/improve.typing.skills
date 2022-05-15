import Color from 'color';
import styled from 'styled-components';
import { baseColor, textColor, textColor2 } from '../../../utils/styles';

export const Container = styled.div<any>`
  width: 100%;
  height: 70px;
  display: flex;
`;

export const TimeButton = styled.div<any>`
  width: calc(100% / 3.5);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${(props) => props.isSelected ? 'white' : textColor2}};
  color: ${baseColor};
  font-size: 20px;
  font-weight: 700;
  margin-right: ${(props) => props.isLast ? '0px' : '15px'};
  cursor: pointer;
  &:hover {
    background: ${(props) => !props.isSelected && Color(textColor).lighten(0).toString()};
  }
`;

export const TimeLabel = styled.div<any>`
  display: flex;
  flex-direction: column;
`;

export const CustomTime = styled.div<any>`
  margin: auto;
  margin-top: -8px;
  font-size: 14px;
  font-weight: 700;
  color: ${baseColor};
`;
