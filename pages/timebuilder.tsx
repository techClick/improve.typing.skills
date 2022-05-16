import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import * as S from '../styles/Index.styled';
import TimeBuilder from '../views/TimeBuilder/TimeBuilder';

const TimeBuilder_Home: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Improve Typing Skills</title>
      </Head>
      <TimeBuilder />
    </S.Container>
  );
};

export default TimeBuilder_Home;
