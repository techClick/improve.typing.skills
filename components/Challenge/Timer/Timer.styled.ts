import Color from 'color';
import styled from 'styled-components';

export const Container = styled.div<any>`
  color: ${(props) => props.isLowTime && Color('red').lighten(0.25).toString()};
`;
