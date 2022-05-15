import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectAnswer } from '../redux';
import * as S from './SubmitButton.styled';

const SubmitButton = function SubmitButton() {
  const answer = useAppSelector(selectAnswer);
  const router = useRouter();

  return (
    <S.Button
      isClickable={Boolean(answer)}
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

export default SubmitButton;
