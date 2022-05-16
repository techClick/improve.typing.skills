import React from 'react';
import { useDispatch } from 'react-redux';
import EscapeButton from '../../TimeBuilder/EscapeButton/EscapeButton';
import { setShowPopup } from '../redux';
import * as S from './TimeUp.styled';

const TimeUp = function TimeUp() {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Header>TIME UP!</S.Header>
      <EscapeButton setShowPopup={setShowPopup} />
      <S.Header2>You will be shown your score now</S.Header2>
      <S.ButtonDiv>
        <S.OkButton onClick={() => {
          dispatch(setShowPopup({}));
        }}
        >
          OK
        </S.OkButton>
      </S.ButtonDiv>
    </S.Container>
  );
};

export default TimeUp;
