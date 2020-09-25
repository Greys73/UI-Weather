import React, { useEffect, useState } from 'react';
import Temperature from '../temperature';

const API_KEY = '4dac21171a72bb216190c6db9bb2ddb2';
const API_CITY = '479123';

function App() {
  const [wdata, setwData] = useState({ isLoading: true });
  useEffect(() => {
    const getWeather = async () => {
      try {
        const apiUrl = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${API_CITY}&appid=${API_KEY}`);
        const data = await apiUrl.json();
        setwData({ data });
      } catch (error) {
        setwData({ error });
      }
    };
    getWeather();
  }, []);
  const { data, error, isLoading } = wdata;

  if (isLoading) return 'Загрузка...';
  if (error) return `Ошибка: ${error.message}`;
  if (data) {
    return (
      <div className="App">
        <p>
          Город:
          {data.name}
        </p>
        <p>
          Скорость ветра:
          {data.wind.speed}
        </p>
        <Temperature value={data.main.temp} />
      </div>
    );
  }
  return null;
}
export default App;
