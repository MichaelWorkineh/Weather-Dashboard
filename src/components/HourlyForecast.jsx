import React from 'react';

function HourlyForecast({ hourly }) {
  return (
    <div className="grid gap-4 grid-cols-3 lg:grid-cols-12 md:grid-cols-6 w-fit">
      {hourly.map((hour) => (
        <div key={hour.dt} className="bg-white rounded-lg shadow-md p-4">
          <h4 className="text-lg font-semibold">
            {new Date(hour.dt * 1000).toLocaleTimeString([], { hour: 'numeric', hour12: true })}
          </h4>
          <p className="text-2xl font-bold">{Math.round(hour.main.temp)}°C</p>
          <p className="text-sm text-gray-500 capitalize">{hour.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}

export default HourlyForecast;

