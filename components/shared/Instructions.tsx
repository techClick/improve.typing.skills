import React, { ReactElement } from 'react';
import * as S from './Instructions.styled';

const Instructions = function Instructions(
  { instructions }
  :
  { instructions: string | ReactElement },
) {
  return (
    <S.Container>
      {instructions}
    </S.Container>
  );
};

export default Instructions;
