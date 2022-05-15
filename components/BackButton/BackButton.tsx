import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as S from './BackButton.styled';

const BackButton = function BackButton({ action }:{ action: Function }) {
  return (
    <S.Button onClick={() => action()}>
      <S.IconContainer>
        <S.Icon>
          <FontAwesomeIcon icon={faArrowLeft} />
        </S.Icon>
      </S.IconContainer>
      BACK
    </S.Button>
  );
};

export default BackButton;
