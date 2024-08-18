import React from 'react'

const WeatherIcon =({img, imgAlt,}) => {
  return (
    <div>
      <img src={img} alt={imgAlt} />
    </div>
  );
}

export default WeatherIcon