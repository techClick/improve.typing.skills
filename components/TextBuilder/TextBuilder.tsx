import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Container } from '../../utils/styles';
import Instructions from '../shared/Instructions';
import NextButton from './NextButton/NextButton';
import { selectIsError } from './redux';
import * as S from './TextBuilder.styled';
import TextInput from './TextInput/TextInput';

const TextBuilder = function TextBuilder() {
  const isError = useAppSelector(selectIsError);
  const instructions = (
    <>
      <b>IMPROVE YOUR TYPING SKILLS</b>
      <S.Header2>WITH A SIMPLE CHALLENGE</S.Header2>
      Memorize the sentence then press NEXT!
      <S.SmallText>The challenge is to retype this exact sentence.</S.SmallText>
      <S.SmallText2>NOTE: You can copy/paste your own text.</S.SmallText2>
    </>
  );

  return (
    <Container>
      <Instructions instructions={instructions} />
      <TextInput />
      {
        isError && <S.Required>The text to memorize is required</S.Required>
      }
      <S.ButtonDiv>
        <NextButton />
      </S.ButtonDiv>
    </Container>
  );
};

export default TextBuilder;
