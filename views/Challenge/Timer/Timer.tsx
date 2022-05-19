import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import { selectHasSynced } from '../../../redux/store';
import { cancelTimeout, selectMinsLeft, selectSecsLeft, setMinsLeft, setSecsLeft, setShowPopup, setTimer } from '../redux';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import * as S from './Timer.styled';

const Timer = () => {
  const hasSyncedWithStorage = useAppSelector(selectHasSynced);
  const minsLeft = useAppSelector(selectMinsLeft);
  const secsLeft = useAppSelector(selectSecsLeft);
  const dispatch = useDispatch();

  useEffect(() => {
    if (hasSyncedWithStorage && (minsLeft > 0 || secsLeft > 0)) {
      dispatch(setTimer(setTimeout(() => {
        if (secsLeft > 0) {
          dispatch(setSecsLeft(secsLeft - 1));
        }
        if (secsLeft === 0) {
          if (minsLeft === 0) {
            dispatch(cancelTimeout());
            dispatch(setShowPopup({
              component: <ScoreBoard />,
            }));
          } else {
            dispatch(setMinsLeft(minsLeft - 1));
            dispatch(setSecsLeft(59));
          }
        }
      }, 1000)));
      return () => {
        dispatch(cancelTimeout());
      };
    }
  });

  return (
    <S.Container isLowTime={hasSyncedWithStorage && minsLeft === 0 && secsLeft <= 10}>
      {`${minsLeft}:`}
      {secsLeft < 10 ? `0${secsLeft}` : secsLeft}
    </S.Container>
  );
};

export default Timer;
