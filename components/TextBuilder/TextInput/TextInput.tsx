import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import { selectIsError, selectText, setIsError, setText } from '../redux';
import * as S from './TextInput.styled';

const TextInput = function TextInput() {
  const isError = useAppSelector(selectIsError);
  const text = useAppSelector(selectText);
  const dispatch = useDispatch();
  const [rerender, setRerender] = useState<boolean>(false);

  useEffect(() => {
    setRerender(!rerender);
  }, []);

  return (
    <S.Container>
      <S.TextArea
        isError={isError}
        value={text}
        onChange={(e: any) => {
          dispatch(setIsError(false));
          dispatch(setText(e.target.value));
        }}
      />
    </S.Container>
  );
};

export default TextInput;
