import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import StorageSync from '../components/StorageSync/StorageSync';

if (typeof window !== 'undefined') {
  // localStorage.clear();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <StorageSync>
        <Component {...pageProps} />
      </StorageSync>
    </Provider>
  );
}

export default MyApp;
