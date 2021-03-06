import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks';
import { Container, MainContainer } from '../../styles/styled';
import { setIsShowResult } from '../Challenge/redux';
import Instructions from '../../components/Instructions/Instructions';
import NextButton from './NextButton/NextButton';
import { selectIsInputError } from './redux';
import * as S from './TextBuilder.styled';
import TextInput from './TextInput/TextInput';

const TextBuilder = function TextBuilder() {
  const isInputError = useAppSelector(selectIsInputError);
  const dispatch = useDispatch();
  const { refresh } = useRouter().query;
  const instructions = (
    <>
      <S.Header>IMPROVE YOUR TYPING SKILLS</S.Header>
      <S.Header2>WITH A SIMPLE CHALLENGE</S.Header2>
      <S.Header3>Memorize the sentence then press NEXT!</S.Header3>
      <S.SmallText>The challenge is to type this exact sentence.</S.SmallText>
      <S.SmallText2>NOTE: You can copy/paste your own text here.</S.SmallText2>
    </>
  );

  useEffect(() => {
    if (refresh) {
      dispatch(setIsShowResult(false));
    }
  });

  return (
    <MainContainer>
      <Container>
        <Instructions instructions={instructions} />
        <TextInput />
        {
          isInputError && <S.Required>Words to memorize are required</S.Required>
        }
        <S.ButtonDiv>
          <NextButton />
        </S.ButtonDiv>
      </Container>
    </MainContainer>
  );
};

export default TextBuilder;
