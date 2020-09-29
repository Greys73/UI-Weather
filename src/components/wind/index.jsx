import React from 'react';
import Direction from './dir';

function Wind({speed, deg}) {  
  let pref="";
  if((speed>0)&&(speed<3)) pref = "слабый";
  if((speed>=3)&&(speed<6)) pref = "умеренный";
  if(speed>=6) pref = "сильный";
  return (
    <div>
      <p>Ветер <Direction value = "150" /> {pref} {speed} м/с </p>
    </div>
  );
}
export default Wind;
