import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';
import * as S from './SubmitButton.styled';

const StartButton = function StartButton() {
  const router = useRouter();

  return (
    <S.Button
      onClick={() => {
        router.push('/');
      }}
    >
      <S.IconContainer>
        <S.Icon>
          <FontAwesomeIcon icon={faCheck} />
        </S.Icon>
      </S.IconContainer>
      SUBMIT
    </S.Button>
  );
};

export default StartButton;
