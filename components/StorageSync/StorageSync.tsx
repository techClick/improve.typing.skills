import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadFromStorage } from '../../views/TextBuilder/redux';
import { loadFromStorage as loadFromStorage_TmB } from '../../views/TimeBuilder/redux';
import { loadFromStorage as loadFromStorage_Ch } from '../../views/Challenge/redux';
import { setHasSyncedWithStorage } from '../../redux/store';
import * as S from './StorageSync.styled';

const StorageSync = function StorageSync({ children }:{ children: any }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFromStorage_Ch());
    dispatch(loadFromStorage_TmB());
    dispatch(loadFromStorage());
    dispatch(setHasSyncedWithStorage(true));
  }, []);

  return (
    <S.Container>
      {children}
    </S.Container>
  );
};

export default StorageSync;
