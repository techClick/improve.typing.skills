import styled from 'styled-components';
import { baseColor, textColor2 } from '../../../utils/styles';

export const Container = styled.div<any>`
  width: 100%;
  height: 70px;
  display: flex;
  // margin-top: 40px;
`;

export const TimeButton = styled.div<any>`
  width: calc(100% / 3.5);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${textColor2};
  color: ${baseColor};
  font-size: 20px;
  font-weight: 700;
  margin-right: ${(props) => props.isLast ? '0px' : '15px'};
  cursor: pointer;
  &:hover {
    background: white;
  }
`;
