import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import CustomBuilder from '../CustomBuilder/CustomBuilder';
import { selectSelectedTiming, selectTimings, setSelectedTiming, setShowPopup } from '../redux';
import * as S from './TimeOptions.styled';

const TimeOptions = function TimeOptions() {
  const selectedTiming = useAppSelector(selectSelectedTiming);
  const customTime = useAppSelector(selectTimings)[3];
  const dispatch = useDispatch();

  const showCustomTimePopup = () => {
    if (selectedTiming !== 3) dispatch(setSelectedTiming(null));
    dispatch(setShowPopup({
      component: <CustomBuilder />,
      exitOnBgClick: true,
    }));
  };

  const timeOptions: any = [{
    duration: '1 min',
    select: () => dispatch(setSelectedTiming(0)),
    unselect: () => dispatch(setSelectedTiming(null)),
  }, {
    duration: '2 mins',
    select: () => dispatch(setSelectedTiming(1)),
    unselect: () => dispatch(setSelectedTiming(null)),
  }, {
    duration: '5 mins',
    select: () => dispatch(setSelectedTiming(2)),
    unselect: () => dispatch(setSelectedTiming(null)),
  }, {
    duration: 'Custom',
    select: () => showCustomTimePopup(),
    unselect: () => showCustomTimePopup(),
  }];

  return (
    <S.Container>
      {
        timeOptions.map((option: any, i: number) => (
          <S.TimeButton
            key={`timeoption_${i}`}
            isLast={i === 3}
            isSelected={i === selectedTiming}
            onClick={() => {
              if (i === selectedTiming) {
                option.unselect();
                return;
              }
              option.select();
            }}
          >
            <S.TimeLabel>
              {option.duration}
              {
                i === 3 && selectedTiming === 3 && (
                  <S.CustomTime>
                    (
                    {customTime}
                    mins)
                  </S.CustomTime>
                )
              }
            </S.TimeLabel>
          </S.TimeButton>
        ))
      }
    </S.Container>
  );
};

export default TimeOptions;
