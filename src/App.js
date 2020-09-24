import React from 'react';
import logo from './logo.svg';
import './App.css';

const API_KEY = "4dac21171a72bb216190c6db9bb2ddb2";
const API_CITY = "479123";

const data = {
	city : '73',
	temp : undefined,
	wind : undefined	
}

const  getWeather = async () => {
	const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${API_CITY}&appid=${API_KEY}`);
	const api_data =  await api_url.json();
	data.city = api_data.name;
	data.temp = api_data.main.temp;
	data.wind = api_data.wind.speed;
	console.log(api_data);
};

function App() {
  return (
    <div className="App">	
		<div>
		  <button onClick={getWeather}>Get json</button>
		</div>		
    </div>
  );
}

export default App;
