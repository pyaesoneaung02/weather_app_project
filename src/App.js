import React, { useEffect, useState, useCallback } from "react";
import Form from "./components/Form";
import Card from "./components/Card";
import { api, api_key } from "./api/api";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [country, setCountry] = useState("Magway");
  const [data, setData] = useState({});

  const fetchWeather = useCallback(
    async (country_name) => {
      const city = country_name || country;

      if (country_name) {
        setCountry(country_name);
      }

      try {
        const res = await api.get(
          `/weather?q=${city}&appid=${api_key}&units=metric`,
        );
        setData(res.data);
      } catch (error) {
        console.log("Error fetching weather");
      }
    },
    [country],
  );

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return (
    <div className="w-100 min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="shadow p-4 rounded bg-white">
        <h2 className="text-center mb-3">Weather App</h2>

        <Form fetchWeather={fetchWeather} />

        <Card data={data} />
      </div>
    </div>
  );
};

export default App;
