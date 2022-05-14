import React from 'react';
import type { NextPage } from 'next';
import TestBuilder from '../Components/TestBuilder';
import * as S from '../styles/Index.styled';

const Home: NextPage = () => {
  return (
    <S.Container>
      <TestBuilder />
    </S.Container>
  );
};

export default Home;
