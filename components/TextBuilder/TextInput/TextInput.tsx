import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import { selectIsError, selectText, setIsError, setText } from '../redux';
import * as S from './TextInput.styled';

const TextInput = function TextInput() {
  const isError = useAppSelector(selectIsError);
  const text = useAppSelector(selectText);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.TextAreaDiv>
        <S.Apostrophe>&quot;</S.Apostrophe>
        <S.TextArea
          spellCheck={false}
          isError={isError}
          value={text}
          onChange={(e: any) => {
            dispatch(setIsError(false));
            dispatch(setText(e.target.value));
          }}
        />
      </S.TextAreaDiv>
    </S.Container>
  );
};

export default TextInput;
