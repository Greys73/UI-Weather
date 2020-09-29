import React from 'react';

function Sky({ value }) {  
  let pref;
  if(value>0) pref = "+";
  if(value<0) pref = "-";
  return (
    <div>
      <p>
        {pref+temp}°C
      </p>
    </div>
  );
}
export default Sky;
