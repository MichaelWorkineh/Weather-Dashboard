import React from 'react';
import { Thermometer, Wind, Droplet, Cloud } from 'react-feather';

const icons = {
  thermometer: Thermometer,
  wind: Wind,
  droplet: Droplet,
  cloud: Cloud,
};

function WeatherCard({ title, value, description, icon }) {
  const Icon = icons[icon] || Cloud;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Icon className="w-6 h-6 text-gray-500" />
      </div>
      <p className="text-2xl font-bold">{value || 'N/A'}</p>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  );
}

export default WeatherCard;

