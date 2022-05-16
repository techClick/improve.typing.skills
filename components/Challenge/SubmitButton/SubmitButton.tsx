import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import { selectAnswer, setShowPopup } from '../redux';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import * as S from './SubmitButton.styled';

const SubmitButton = function SubmitButton() {
  const answer = useAppSelector(selectAnswer);
  const dispatch = useDispatch();

  return (
    <S.Button
      isClickable={Boolean(answer)}
      onClick={() => {
        dispatch(setShowPopup({ component: <ScoreBoard /> }));
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
