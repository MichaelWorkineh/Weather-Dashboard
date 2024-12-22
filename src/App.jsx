import React, { useState, useEffect } from 'react';
import WeatherDashboard from './components/WeatherDashboard';
import './App.css';
import { Select } from 'flowbite-react';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Addis Ababa,Ethiopia');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        if (!apiKey) {
          throw new Error('API key is not set. Please check your .env file.');
        }

        // Fetch current weather data
        const currentResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}.0060&units=metric&appid=${apiKey}`
        );

        if (!currentResponse.ok) {
          const errorText = await currentResponse.text();
          throw new Error(`HTTP error! status: ${currentResponse.status}, message: ${errorText}`);
        }

        const currentData = await currentResponse.json();

        // Fetch 5-day forecast data
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}.0060&units=metric&appid=${apiKey}`
        );

        if (!forecastResponse.ok) {
          const errorText = await forecastResponse.text();
          throw new Error(`HTTP error! status: ${forecastResponse.status}, message: ${errorText}`);
        }

        const forecastData = await forecastResponse.json();

        // Combine data to mimic One Call API structure
        const combinedData = {
          current: currentData,
          daily: forecastData.list.filter((entry, index) => index % 8 === 0), // Mimic daily forecasts by picking every 8th entry
          hourly: forecastData.list.slice(0, 24), // Mimic hourly forecasts by taking the first 24 entries
        };

        setWeather(combinedData);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setError(err.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);
  
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">
          <h2 className="text-xl font-bold mb-2">Error:</h2>
          <p>{error}</p>
          <p className="mt-2 text-sm">Please check your network connection.</p>
        </div>
      </div>
    );
  }
  //write weather data into the console
  console.log('Weather data:', weather);
  return (
    <div className="bg-slate-400  overflow-x-clip">
      <WeatherDashboard weather={weather} />
      <Select className='fixed top-2 right-1' onChange={(e)=>setCity(e.target.value)}>
        <option value={"Addis Ababa,Ethiopia"}>Addis Ababa</option>
        <option value={"New York,USA"}>New York</option>
        <option value={"London,UK"}>London</option>
        <option value={"Tokyo,Japan"}>Tokyo</option>
        <option value={"Sydney,Australia"}>Sydney</option>
        <option value={"Rio de Janeiro,Brazil"}>Rio de Janeiro</option>
        <option value={"Mumbai,India"}>Mumbai</option>
        <option value={"Beijing,China"}>Beijing</option>
        <option value={"Moscow,Russia"}>Moscow</option>
      </Select>
    </div>
  );
}

export default App;