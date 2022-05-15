import Head from 'next/head';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Background, Container } from '../../utils/styles';
import Instructions from '../shared/Instructions';
import TimeOptions from './TimeOptions/TimeOptions';
import * as S from './TimeBuilder.styled';
import BackButton from '../BackButton/BackButton';
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
      Pick a time limit then press START!
      <S.SmallText>NOTE: This will be the time limit for the challenge.</S.SmallText>
    </>
  );
  return (
    <>
      {showPopup.component
        && (
          <>
            <Background onClick={() => {
              if (showPopup.exitOnBgClick) {
                dispatch(setShowPopup({}));
              }
            }}
            />
            {showPopup.component}
          </>
        )}
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
    </>
  );
};

export default TimeBuilder;
