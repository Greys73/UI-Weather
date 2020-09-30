import React from 'react';

function Sky({ value }) {
  let url = 'https://www.metaweather.com/static/img/weather/ico/c.ico';
  let text = '';
  switch (value) {
    case 'clear sky':
      url = 'https://www.metaweather.com/static/img/weather/ico/c.ico';
      text = 'ясно';
      break;
    case 'few clouds':
      url = 'https://www.metaweather.com/static/img/weather/ico/lc.ico';
      text = 'облачно с прояснениями';
      break;
    case 'scattered clouds':
      url = 'https://www.metaweather.com/static/img/weather/ico/hc.ico';
      text = 'облачно';
      break;
    case 'broken clouds':
      url = 'https://www.metaweather.com/static/img/weather/ico/hc.ico';
      text = 'пасмурно';
      break;
    case 'overcast clouds':
      url = 'https://www.metaweather.com/static/img/weather/ico/hc.ico';
      text = 'пасмурно';
      break;
    case 'shower rain':
      url = 'https://www.metaweather.com/static/img/weather/ico/lr.ico';
      text = 'небольшой дождь';
      break;
    case 'rain':
      url = 'https://www.metaweather.com/static/img/weather/ico/s.ico';
      text = 'сильный дождь';
      break;
    case 'thunderstorm':
      url = 'https://www.metaweather.com/static/img/weather/ico/t.ico';
      text = 'гроза';
      break;
    case 'snow':
      url = 'https://www.metaweather.com/static/img/weather/ico/sn.ico';
      text = 'снег';
      break;
    case 'mist':
      url = 'http://openweathermap.org/img/wn/50d@2x.png';
      text = 'туман';
      break;
    default:
      url = 'https://www.metaweather.com/static/img/weather/ico/c.ico';
      text = 'ясно';
      break;
  }
  return (
    <div className="Sky">
      <img src={url} alt={text} />
      <br />
      {text}
    </div>
  );
}
export default Sky;
