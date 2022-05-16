import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import EscapeButton from '../EscapeButton/EscapeButton';
import { selectTimings, setCustomTime, setSelectedTiming, setShowPopup } from '../redux';
import * as S from './CustomBuilder.styled';

const CustomBuilder = function CustomBuilder() {
  const customTime = useAppSelector(selectTimings)[3];
  const [time, setTime] = useState<string>(customTime?.toString() || '');
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Header>SET CUSTOM TIME</S.Header>
      <EscapeButton setShowPopup={setShowPopup} />
      <S.Header2>Time in mins</S.Header2>
      <S.Input
        value={time}
        type="number"
        onChange={(e) => setTime(e.target.value)}
      />
      <S.ButtonDiv>
        <S.BackButton onClick={() => {
          dispatch(setCustomTime(null));
          dispatch(setSelectedTiming(null));
          dispatch(setShowPopup({}));
        }}
        >
          CLEAR
        </S.BackButton>
        <S.SaveButton
          isClickable={Boolean(Number(time))}
          onClick={() => {
            dispatch(setCustomTime(Math.ceil(Number(time))));
            dispatch(setSelectedTiming(3));
            dispatch(setShowPopup({}));
          }}
        >
          SAVE
        </S.SaveButton>
      </S.ButtonDiv>
    </S.Container>
  );
};

export default CustomBuilder;
