import React from 'react';
import './App.css';
import { useAsync } from 'react-async';

const API_KEY = "4dac21171a72bb216190c6db9bb2ddb2";
const API_CITY = "479123";

const  Getweather = async () => {
	const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${API_CITY}&appid=${API_KEY}`);		
	return await api_url.json();	
};

function App() {
	const { data, error, isLoading } = useAsync({ promiseFn: Getweather })
	console.log(data);	
  if (isLoading) return "Загрузка..."
  if (error) return `Ошибка: ${error.message}`
  if (data)
  return (
    <div className="App">	
			<p>Город: {data.name}</p>
			<p>Скорость ветра: {data.wind.speed}</p>
			<p>Температура: {data.main.temp}</p>		
    </div>
  );
}
export default App;
