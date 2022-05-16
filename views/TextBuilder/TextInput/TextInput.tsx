import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import { selectIsInputError, selectText, setIsInputError, setText } from '../redux';
import * as S from './TextInput.styled';

const TextInput = function TextInput() {
  const isInputError = useAppSelector(selectIsInputError);
  const text = useAppSelector(selectText);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.TextAreaDiv>
        <S.Apostrophe>&quot;</S.Apostrophe>
        <S.TextArea
          spellCheck={false}
          isInputError={isInputError}
          value={text}
          onChange={(e: any) => {
            dispatch(setIsInputError(false));
            dispatch(setText(e.target.value));
          }}
        />
      </S.TextAreaDiv>
    </S.Container>
  );
};

export default TextInput;
