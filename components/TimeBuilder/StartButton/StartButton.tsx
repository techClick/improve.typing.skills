import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectSelectedTiming } from '../redux';
import * as S from './StartButton.styled';

const StartButton = function StartButton() {
  const router = useRouter();
  const selectedTiming = useAppSelector(selectSelectedTiming);

  return (
    <S.Button
      isClickable={selectedTiming === 0 || Boolean(selectedTiming)}
      onClick={() => {
        if (selectedTiming === 0 || Boolean(selectedTiming)) router.push('/challenge');
      }}
    >
      <S.IconContainer>
        <S.Icon>
          <FontAwesomeIcon icon={faCheck} />
        </S.Icon>
      </S.IconContainer>
      START
    </S.Button>
  );
};

export default StartButton;
