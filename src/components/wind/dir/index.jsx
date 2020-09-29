import React from 'react';

function Direction({value}) {  
  let pref="";
  console.log(value);
  if((value>=337.5)&&(value<=22.5)) pref = "C ↑";
  if((value>=22.5)&&(value<=67.5)) pref = "CВ ↗";
  if((value>=67.5)&&(value<=112.5)) pref = "В →";
  if((value>=112.5)&&(value<=157.5)) pref = "ЮВ ↘";
  if((value>=157.5)&&(value<=202.5)) pref = "Ю ↓";
  if((value>=202.5)&&(value<=247.5)) pref = "ЮЗ ↙";
  if((value>=247.5)&&(value<=292.5)) pref = "З ←";
  if((value>=292.5)&&(value<=337.5)) pref = "СЗ ↖";
  return (
    <div>{pref}</div>
  );
}
export default Direction;
