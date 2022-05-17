import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setHasSynced, store } from '../redux/store';
import Challenge from '../views/Challenge/Challenge';
import { setAnswer, setIsShowResult, setMinsLeft, setSecsLeft } from '../views/Challenge/redux';
import { setText } from '../views/TextBuilder/redux';
import TimeBuilder from '../views/TimeBuilder/TimeBuilder';
import { setSelectedTiming } from '../views/TimeBuilder/redux';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

afterEach(cleanup);

describe('integration tests', () => {
  useRouter.mockImplementation(() => ({
    push: jest.fn(),
  }));
  describe('challenge set up is correct', () => {
    test('challenge will start', async () => {
      render(
        <Provider store={store}>
          <TimeBuilder />
        </Provider>,
      );
      store.dispatch(setSelectedTiming(0));
      await new Promise((r) => setTimeout(r, 50));
      const startButton: any = screen.queryByTestId('startButton');
      fireEvent.click(startButton);
      await new Promise((r) => setTimeout(r, 300));
      expect(store.getState().challenge.isShowResult).toBe(true);
    });
    test('challenge timer is set up correctly 1', async () => {
      render(
        <Provider store={store}>
          <TimeBuilder />
        </Provider>,
      );
      store.dispatch(setSelectedTiming(1));
      await new Promise((r) => setTimeout(r, 50));
      const startButton: any = screen.queryByTestId('startButton');
      fireEvent.click(startButton);
      await new Promise((r) => setTimeout(r, 300));
      expect(store.getState().challenge.minsLeft).toBe(2);
    });
    test('challenge timer is set up correctly 2', async () => {
      render(
        <Provider store={store}>
          <TimeBuilder />
        </Provider>,
      );
      store.dispatch(setSelectedTiming(2));
      await new Promise((r) => setTimeout(r, 50));
      const startButton: any = screen.queryByTestId('startButton');
      fireEvent.click(startButton);
      await new Promise((r) => setTimeout(r, 300));
      expect(store.getState().challenge.minsLeft).toBe(5);
    });
  });
  describe('the accuracy displayed is correct', () => {
    test('accuracy is correct 1', async () => {
      store.dispatch(setMinsLeft(0));
      store.dispatch(setSecsLeft(0));
      store.dispatch(setHasSynced(true));
      store.dispatch(setText('The rain in Spain falls mainly on the plain'));
      store.dispatch(setAnswer('The rain in Spain falls mainly on the'));
      store.dispatch(setIsShowResult(true));
      await new Promise((r) => setTimeout(r, 50));
      render(
        <Provider store={store}>
          <Challenge />
        </Provider>,
      );
      await new Promise((r) => setTimeout(r, 1200));
      const correctWords = screen.queryByTestId('correctWords');
      expect(correctWords?.innerHTML).toContain('8');
      const total = screen.queryByTestId('total');
      expect(total?.innerHTML).toContain('9');
    });
    test('accuracy is correct 2', async () => {
      store.dispatch(setHasSynced(true));
      store.dispatch(setText('The rain in Spain falls mainly on the plain.'));
      store.dispatch(setAnswer('The rain Spain falls plain.'));
      store.dispatch(setIsShowResult(true));
      await new Promise((r) => setTimeout(r, 50));
      render(
        <Provider store={store}>
          <Challenge />
        </Provider>,
      );
      await new Promise((r) => setTimeout(r, 1200));
      const correctWords = screen.queryByTestId('correctWords');
      expect(correctWords?.innerHTML).toContain('5');
      const total = screen.queryByTestId('total');
      expect(total?.innerHTML).toContain('9');
    });
    test('accuracy is correct 3 - case sensitive', async () => {
      store.dispatch(setHasSynced(true));
      store.dispatch(setText('The rain in Spain falls mainly on the plain.'));
      store.dispatch(setAnswer('The rain in spain falls mainly on the Plain.'));
      store.dispatch(setIsShowResult(true));
      await new Promise((r) => setTimeout(r, 50));
      render(
        <Provider store={store}>
          <Challenge />
        </Provider>,
      );
      await new Promise((r) => setTimeout(r, 1200));
      const correctWords = screen.queryByTestId('correctWords');
      expect(correctWords?.innerHTML).toContain('7');
      const total = screen.queryByTestId('total');
      expect(total?.innerHTML).toContain('9');
    });
  });
});
