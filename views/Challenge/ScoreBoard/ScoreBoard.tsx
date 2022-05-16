import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import { selectText } from '../../TextBuilder/redux';
import { selectSelectedTiming, selectTimings, setSelectedTiming } from '../../TimeBuilder/redux';
import {
  cancelTimeout, selectAnswer, selectMinsLeft, selectSecsLeft, setAnswer,
  setMinsLeft, setSecsLeft, setShowPopup,
} from '../redux';
import * as S from './ScoreBoard.styled';

const ScoreBoard = function ScoreBoard() {
  const selectedTiming = useAppSelector(selectSelectedTiming);
  const totalMins = useAppSelector(selectTimings)[selectedTiming || 0] || 0;
  const minsLeft = useAppSelector(selectMinsLeft);
  const secsLeft = useAppSelector(selectSecsLeft);
  const text = useAppSelector(selectText);
  const answer = useAppSelector(selectAnswer);
  const dispatch = useDispatch();
  const router = useRouter();

  const minsUsed = secsLeft === 0 ? totalMins - minsLeft : (totalMins - 1) - minsLeft;
  const secsUsed = secsLeft === 0 ? 0 : 60 - secsLeft;

  const allWords = text.match(/[\w\d]+/gi) as string[];
  const failedWords = [...allWords];
  const wordsInAnswer = answer.match(/[\w\d]+/gi);
  wordsInAnswer?.map((word) => {
    const index = failedWords.indexOf(word);
    if (index > -1) failedWords.splice(index, 1);
  });
  const correctWords = allWords.length - failedWords.length;

  useEffect(() => {
    dispatch(cancelTimeout());
  }, []);

  return (
    <S.Container>
      <S.Header>RESULT</S.Header>
      <S.Header2>ACCURACY</S.Header2>
      <S.Score id="scrollContainer">
        {correctWords}
        <S.Slash>/</S.Slash>
        {allWords.length}
      </S.Score>
      <S.Label>
        You wrote
        <S.WhiteSpan>
          {` ${Math.round((correctWords / allWords.length) * 100)}% `}
        </S.WhiteSpan>
        of all words correctly.
      </S.Label>
      <S.Header3>SPEED</S.Header3>
      <S.Speed id="scrollContainer">
        {`${minsUsed}:`}
        {secsUsed < 10 ? `0${secsUsed}` : secsUsed}
        <S.SecSpan>s</S.SecSpan>
      </S.Speed>
      <S.ButtonDiv>
        <S.RetryButton onClick={() => {
          dispatch(setMinsLeft(totalMins || 0));
          dispatch(setSecsLeft(0));
          dispatch(setAnswer(''));
          dispatch(setShowPopup({}));
        }}
        >
          RETRY
        </S.RetryButton>
        <S.NewButton
          onClick={() => {
            dispatch(setSelectedTiming(null));
            dispatch(setAnswer(''));
            dispatch(setShowPopup({}));
            router.push('/?refresh=1');
          }}
        >
          NEW
        </S.NewButton>
      </S.ButtonDiv>
    </S.Container>
  );
};

export default ScoreBoard;
