import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import * as S from '../styles/Index.styled';
import TextBuilder from '../views/TextBuilder/TextBuilder';

const Home: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Improve Typing Skills</title>
      </Head>
      <TextBuilder />
    </S.Container>
  );
};

export default Home;
