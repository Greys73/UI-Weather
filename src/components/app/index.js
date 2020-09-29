import React, { useEffect, useState } from 'react';
import City from '../city';
import Wind from '../wind';
import Temperature from '../temperature';
import './App.css';
import Paper from '@material-ui/core/Paper';

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
    console.log(data)
    return (
      <div className="App" alig>
        <Paper className="Form" elevation={3}>                 
          <p>
            <City value={data.name} />
          </p>
          <p>
            <Wind speed={data.wind.speed}  deg={data.wind.deg}/>            
          </p>
          <Temperature value={data.main.temp} />
        </Paper>
      </div>
    );
  }
  return null;
}
export default App;
