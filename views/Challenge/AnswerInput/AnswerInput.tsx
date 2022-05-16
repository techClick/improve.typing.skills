import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import { selectAnswer, selectIsInputError, setAnswer, setIsInputError } from '../redux';
import * as S from './AnswerInput.styled';

const AnswerInput = function AnswerInput() {
  const isInputError = useAppSelector(selectIsInputError);
  const answer = useAppSelector(selectAnswer);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.TextArea
        spellCheck={false}
        isInputError={isInputError}
        value={answer}
        onChange={(e: any) => {
          dispatch(setIsInputError(false));
          dispatch(setAnswer(e.target.value));
        }}
      />
    </S.Container>
  );
};

export default AnswerInput;
