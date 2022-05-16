import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import { setAnswer, setMinsLeft, setSecsLeft, setIsShowResult, setShowPopup } from '../../Challenge/redux';
import { selectSelectedTiming, selectTimings } from '../redux';
import * as S from './StartButton.styled';

const StartButton = function StartButton() {
  const selectedTiming = useAppSelector(selectSelectedTiming);
  const challengeTime = useAppSelector(selectTimings)[selectedTiming !== 0
    ? selectedTiming || 4 : 0];
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <S.Button
      isClickable={selectedTiming === 0 || Boolean(selectedTiming)}
      onClick={() => {
        if (selectedTiming === 0 || Boolean(selectedTiming)) {
          dispatch(setMinsLeft(challengeTime || 0));
          dispatch(setSecsLeft(0));
          dispatch(setAnswer(''));
          dispatch(setIsShowResult(true));
          dispatch(setShowPopup({}));
          router.push('/challenge');
        }
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
