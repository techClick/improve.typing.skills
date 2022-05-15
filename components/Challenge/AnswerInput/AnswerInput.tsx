import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import { selectAnswer, selectIsError, setAnswer, setIsError } from '../redux';
import * as S from './AnswerInput.styled';

const AnswerInput = function AnswerInput() {
  const isError = useAppSelector(selectIsError);
  const answer = useAppSelector(selectAnswer);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.TextArea
        spellCheck={false}
        isError={isError}
        value={answer}
        onChange={(e: any) => {
          dispatch(setIsError(false));
          dispatch(setAnswer(e.target.value));
        }}
      />
    </S.Container>
  );
};

export default AnswerInput;
