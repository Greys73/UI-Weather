import React from 'react';

function Temperature({ value }) {
  const temp = value-273.15;
  let pref;
  if(temp>0) pref = "+";
  if(temp<0) pref = "-";
  return (
    <div>
      <p>
        {pref+temp}°C
      </p>
    </div>
  );
}
export default Temperature;
