import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadFromStorage } from '../TextBuilder/redux';
import { loadFromStorage as loadFromStorage_TmB } from '../TimeBuilder/redux';
import { loadFromStorage as loadFromStorage_Ch } from '../Challenge/redux';
import { setHasSynced } from '../../redux/store';

const StorageSync = function StorageSync({ children }:{ children: any }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFromStorage_Ch());
    dispatch(loadFromStorage_TmB());
    dispatch(loadFromStorage());
    dispatch(setHasSynced(true));
  }, []);

  return (
    <>
      {children}
    </>
  );
};

export default StorageSync;
