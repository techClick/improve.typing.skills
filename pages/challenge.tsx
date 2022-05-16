import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import * as S from '../styles/Index.styled';
import Challenge from '../views/Challenge/Challenge';

const Challenge_Home: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Improve Typing Skills</title>
      </Head>
      <Challenge />
    </S.Container>
  );
};

export default Challenge_Home;
