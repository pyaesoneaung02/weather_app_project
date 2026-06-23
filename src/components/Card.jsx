import Clock from "react-clock";
import { useEffect, useState } from "react";
import "react-clock/dist/Clock.css";

const Card = ({ data }) => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!data || !data.name) {
    return <h5 className="text-center mt-3">Loading...</h5>;
  }

  return (
    <div className="text-center mt-3">
      <Clock value={value} />

      <h3 className="mt-3">
        {data.name}, {data.sys.country}
      </h3>

      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
      />

      <h4>{data.main.temp}°C</h4>

      <p>{data.weather[0].main}</p>

      <p>Humidity: {data.main.humidity}%</p>

      <p>Visibility: {data.visibility / 1000} km</p>
    </div>
  );
};

export default Card;
