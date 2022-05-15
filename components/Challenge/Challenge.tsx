import Head from 'next/head';
import React from 'react';
import { Container } from '../../utils/styles';
import Instructions from '../shared/Instructions';
import * as S from './Challenge.styled';
import StartButton from './SubmitButton/SubmitButton';

const Challenge = function Challenge() {
  const instructions = (
    <>
      <S.Header>TEST HAS STARTED</S.Header>
      <S.Header2>Time left:</S.Header2>
    </>
  );
  return (
    <Container>
      <Head>
        <title>Improve Typing Skills</title>
      </Head>
      <Instructions instructions={instructions} />
      <S.ButtonDiv>
        <StartButton />
      </S.ButtonDiv>
    </Container>
  );
};

export default Challenge;
