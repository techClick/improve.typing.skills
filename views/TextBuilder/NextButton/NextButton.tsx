import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import { selectText, setIsError } from '../redux';
import * as S from './NextButton.styled';

const NextButton = function NextButton() {
  const text = useAppSelector(selectText);
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <S.Button
      onClick={() => {
        const allWords = text.match(/[\w\d]+/gi) as string[];
        if (!text || !allWords) {
          dispatch(setIsError(true));
          return;
        }
        router.push('/timebuilder');
      }}
    >
      <S.IconContainer>
        <S.Icon>
          <FontAwesomeIcon icon={faCheck} />
        </S.Icon>
      </S.IconContainer>
      NEXT
    </S.Button>
  );
};

export default NextButton;
