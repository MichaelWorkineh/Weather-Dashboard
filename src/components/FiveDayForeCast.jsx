import React from "react";

export default function FiveDayForeCast({forecast}) {
  return <>
    <h2>5-Day Forecast</h2>
          {forecast.length > 0 && (<ul>
            {forecast.map((entry, index) => (
              <li key={index}>
                <p>Time: {new Date(entry.dt * 1000).toLocaleString()}</p>
                <p>Temperature: {entry.main.temp}°C</p>
                <p>Weather: {entry.weather[0].description}</p>
              </li>
            ))}
          </ul>)}
  </>;
}
