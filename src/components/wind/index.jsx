import React from 'react';
import Direction from './dir';

function Wind({ speed, deg }) {
  let pref = '';
  if ((speed > 0) && (speed < 3)) pref = 'слабый';
  if ((speed >= 3) && (speed < 6)) pref = 'умеренный';
  if (speed >= 6) pref = 'сильный';
  return (
    <div>
      <br />
      Ветер
      {' '}
      <Direction value={deg} />
      {' '}
      {pref}
      {' '}
      {speed}
      {' '}
      м/с
    </div>
  );
}
export default Wind;
