import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';
import * as S from './BackButton.styled';

const BackButton = function BackButton() {
  const router = useRouter();
  return (
    <S.Button
      onClick={() => {
        router.push('/');
      }}
    >
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
