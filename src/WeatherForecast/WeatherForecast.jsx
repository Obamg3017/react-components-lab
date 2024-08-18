import React from 'react'
import WeatherData from './WeatherData';
import "./WeatherForecast.css"
import WeatherIcon from './WeatherIcon';

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
    <div>
      <h2>{day}</h2>
      <img src={img} alt={imgAlt} />
      <p><span>conditions:</span>{conditions}</p>
      <p><span>time:</span>{time}</p>
    </div>
  );
};

export default WeatherForecast