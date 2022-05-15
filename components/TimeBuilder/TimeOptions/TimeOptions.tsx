import React from 'react';
import * as S from './TimeOptions.styled';

const TimeOptions = function TimeOptions() {
  const timeOptions: any = [{
    duration: '1 min',
  }, {
    duration: '2 mins',
  }, {
    duration: '5 mins',
  }, {
    duration: 'Custom',
  }];

  return (
    <S.Container>
      {
        timeOptions.map((option: any, i: number) => (
          <S.TimeButton isLast={i === 3}>
            {option.duration}
          </S.TimeButton>
        ))
      }
    </S.Container>
  );
};

export default TimeOptions;
