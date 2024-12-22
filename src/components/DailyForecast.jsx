import React from 'react';

function DailyForecast({ daily }) {
  return (
    <div className="grid gap-4 grid-cols-3 md:grid-cols-5 w-fit">
      {daily.map((day) => (
        <div key={day.dt} className="bg-white rounded-lg shadow-md p-4">
          <h4 className="text-lg font-semibold">
            {new Date(day.dt * 1000).toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
          </h4>
          <p className="text-2xl font-bold">{Math.round(day.main.temp_max)}°C</p>
          <p className="text-sm text-gray-500">Low: {Math.round(day.main.temp_min)}°C</p>
          <p className="text-sm text-gray-500 capitalize">{day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}

export default DailyForecast;

