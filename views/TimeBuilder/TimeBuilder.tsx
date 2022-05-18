import Head from 'next/head';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Background, Container, MainContainer } from '../../utils/styles';
import Instructions from '../../components/Instructions/Instructions';
import TimeOptions from './TimeOptions/TimeOptions';
import * as S from './TimeBuilder.styled';
import BackButton from '../../components/BackButton/BackButton';
import StartButton from './StartButton/StartButton';
import { useAppSelector } from '../../redux/hooks';
import { selectShowPopup, setShowPopup } from './redux';
import { selectText } from '../TextBuilder/redux';
import { selectHasSynced } from '../../redux/store';

const TimeBuilder = function TimeBuilder() {
  const showPopup = useAppSelector(selectShowPopup);
  const hasSyncedWithStorage = useAppSelector(selectHasSynced);
  const router = useRouter();
  const dispatch = useDispatch();
  const text = useAppSelector(selectText);

  if (hasSyncedWithStorage && !text) router.replace('/textbuilder');

  const instructions = (
    <>
      <S.Header>SET YOUR TIME LIMIT</S.Header>
      <S.Header2>This is the final step.</S.Header2>
      <S.Header3>Pick a time limit then press START!</S.Header3>
      <S.SmallText>NOTE: This will be the time limit for the challenge.</S.SmallText>
    </>
  );
  return (
    <>
      {showPopup.component
        && (
          <>
            <Background onClick={() => dispatch(setShowPopup({}))} />
            {showPopup.component}
          </>
        )}
      <MainContainer isTimeBuilder>
        <Container>
          <Head>
            <title>Improve Typing Skills</title>
          </Head>
          <Instructions instructions={instructions} />
          <TimeOptions />
          <S.ButtonDiv>
            <BackButton action={() => router.push('/')} />
            <StartButton />
          </S.ButtonDiv>
        </Container>
      </MainContainer>
    </>
  );
};

export default TimeBuilder;
