import Head from 'next/head';
import React from 'react';
import { Container } from '../../utils/styles';
import Instructions from '../shared/Instructions';
import TimeOptions from './TimeOptions/TimeOptions';
import * as S from './TimeBuilder.styled';
import BackButton from './BackButton/BackButton';

const TimeBuilder = function TimeBuilder() {
  const instructions = (
    <>
      <S.Header>SET YOUR TIME LIMIT</S.Header>
      <S.Header2>This is the final step.</S.Header2>
      Pick a time limit then press START!
      <S.SmallText>NOTE: This will be the time limit for the challenge.</S.SmallText>
    </>
  );
  return (
    <Container>
      <Head>
        <title>Improve Typing Skills</title>
      </Head>
      <Instructions instructions={instructions} />
      <TimeOptions />
      <S.ButtonDiv>
        <BackButton />
      </S.ButtonDiv>
    </Container>
  );
};

export default TimeBuilder;
