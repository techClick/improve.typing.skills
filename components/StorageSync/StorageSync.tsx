import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadFromStorage } from '../TextBuilder/redux';
import { loadFromStorage as loadFromStorage_TmB } from '../TimeBuilder/redux';

const StorageSync = function StorageSync({ children }:{ children: any }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFromStorage_TmB());
    dispatch(loadFromStorage());
  }, []);

  return (
    <>
      {children}
    </>
  );
};

export default StorageSync;
