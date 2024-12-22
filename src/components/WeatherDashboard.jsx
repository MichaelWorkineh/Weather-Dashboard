import React from 'react';
import WeatherCard from './WeatherCard';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';

function WeatherDashboard({ weather }) {
  if (!weather || !weather.current) {
    return <div className="text-red-500">Weather data is incomplete or missing.</div>;
  }
  let url;

  switch(weather.current.weather[0].main){
    case "Clear":
      url = "/Clear.jpg";
      break;
    case "Clouds":
      url = "/Clouds.jpg";
      break;
    case "Ash":
      url = "/Ash.jpg";
      break;
    case "Rain":
      url = "/Drizzle.jpg";
      break;
    case "Dust":
      url = "/Dust.jpg";
      break;
    case "Fog":
      url = "/Fog.jpg";
      break;
    case "Haze":
      url = "/Haze.jpg";
      break;
    case "Heavy rainfall":
      url = "/Heavy rainfall.jpg";
      break;
    case "Mist":
      url = "/Mist.jpg";
      break;
    case "Sand":
      url = "/Sand.jpg";
      break;
    case "Smoke":
      url = "/Smoke.jpg";
      break;
    case "Snow":
      url = "/Snow.jpg";
      break;
    case "Squall":
      url = "/Squall.jpg";
      break;
    case "Thounder":
      url = "/thounder.jpg";
      break;
    case "Tornado":
      url = "/Tornado.jpg";
      break;
    default:
      url = "/Clear.jpg";
  }

  return (
    <div className="container m-0  space-y-4 ">
    <div className='flex items-center justify-center w-screen h-screen' style={{ backgroundImage: `url(${url})`, backgroundSize: 'cover' }}>
        <div className='flex flex-col items-center gap-10 p-10 bg-[rgba(29,41,52,0.6)] rounded-lg'>
          <h1 className='text-6xl md:text-9xl font-bold text-white'>{weather.current.name}</h1>
          <hr className='w-full border-2 border-white'></hr>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-fit">
              <WeatherCard
              title="Temperature"
              value={`${weather.current.main.temp}°C`}
              description={`Feels like ${Math.round(weather.current.main.temp)}°C`}
              icon="thermometer"
              />
              <WeatherCard
              title="Wind Speed"
              value={`${weather.current.wind.speed} m/s`}
              icon="wind"
              />
              <WeatherCard
              title="Humidity"
              value={`${weather.current.main.humidity}%`}
              icon="droplet"
              />
              <WeatherCard
              title="Conditions"
              value={weather.current.weather[0].main}
              description={weather.current.weather[0].description}
              icon="cloud"
              />
          </div>
        </div>
        </div>
      {weather.hourly && (
        <div className="space-y-4 p-4">
          <h2 className="text-2xl font-bold text-white">Hourly Forecast</h2>
          <HourlyForecast hourly={weather.hourly.slice(1, 12)} />
        </div>
      )}

      {weather.daily && (
        <div className="space-y-4 p-4">
          <h2 className="text-2xl font-bold text-white">Daily Forecast</h2>
          <DailyForecast daily={weather.daily}/>
        </div>
      )}
    </div>
  );
}


export default WeatherDashboard;