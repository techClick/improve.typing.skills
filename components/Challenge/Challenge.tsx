import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectHasSynced } from '../../redux/store';
import { Background, Container } from '../../utils/styles';
import BackButton from '../BackButton/BackButton';
import Instructions from '../shared/Instructions';
import AnswerInput from './AnswerInput/AnswerInput';
import * as S from './Challenge.styled';
import { selectIsShowResult, selectShowPopup } from './redux';
import SubmitButton from './SubmitButton/SubmitButton';
import Timer from './Timer/Timer';

const Challenge = function Challenge() {
  const showPopup = useAppSelector(selectShowPopup);
  const hasSyncedWithStorage = useAppSelector(selectHasSynced);
  const isShowResult = useAppSelector(selectIsShowResult);
  const router = useRouter();

  if (hasSyncedWithStorage && !isShowResult) {
    router.replace('/timebuilder');
    return null;
  }

  const instructions = (
    <>
      <S.Header>CHALLENGE HAS STARTED</S.Header>
      <S.Header2>Type the memorized text below.</S.Header2>
      <S.Header3>Time left:</S.Header3>
      <S.TimeLeft><Timer /></S.TimeLeft>
    </>
  );
  return (
    <>
      {showPopup.component
        && (
          <>
            <Background />
            {showPopup.component}
          </>
        )}
      <Container>
        <Head>
          <title>Improve Typing Skills</title>
        </Head>
        <Instructions instructions={instructions} />
        <AnswerInput />
        <S.ButtonDiv>
          <BackButton action={() => router.push('/timebuilder')} />
          <SubmitButton />
        </S.ButtonDiv>
      </Container>
    </>
  );
};

export default Challenge;
