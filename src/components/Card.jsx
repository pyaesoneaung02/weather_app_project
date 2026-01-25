import Clock from "react-clock";
import { useEffect, useState } from "react";
import "react-clock/dist/Clock.css";

const Card = ({ data }) => {

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  
  if (JSON.stringify(data) !== '{}') {

     return (
       <div className="d-flex flex-column align-items-center gap-2 mt-2">
         <Clock value={value}  className="my-2"/>
         <h1>
           {data.name}, {data.sys.country}
         </h1>
         <h1>
           <img
             src={`https://api.openweathermap.org//img/w/${data.weather[0].icon}.png`}
           />
           {data.main.temp}°C
         </h1>
         <p>{data.weather[0].main}</p>
         <p>Humidity: {data.main.humidity}%</p>
         <p>Visibility: {data.visibility / 1000}km</p>
       </div>
     );
    
  } else {
    return (
      <h1 className='text-center'>Loading...</h1>
    );
  }
 
}

export default Card
