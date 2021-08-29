import {useState} from 'react';

import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

function App() {
  const [city, setCity] = useState<string>('');
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch('https://api.weatherapi.com/v1/current.json?key=22b72bbfe59f475dbdf33559212908&q=London&aqi=no')
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="App">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results />
    </div>
  );
}

export default App;
