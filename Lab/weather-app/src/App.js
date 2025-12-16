import React, { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const API_KEY ="ee3542e898002f11969310dca357defd"; 

  const getWeather = async () => {
    if (!city) return;

    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(url);
      const data = response.data;

      const forecast = data.list[0];
      const temp = forecast.main.temp;
      const description = forecast.weather[0].description;
      const date = new Date(forecast.dt_txt).toLocaleString();

      setWeather(`Forecast for ${city} on ${date}: ${temp}°C, ${description}`);
    } catch (err) {
      setWeather("City not found or error fetching data.");
    }
  };

  return (
    <div style={{
      padding: 20,
      maxWidth: 500,
      margin: "50px auto",
      fontFamily: "Arial",
      border: "1px solid gray",
      borderRadius: 10
    }}>
      <h2>Weather Forecast App</h2>

      <input
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: 8, marginRight: 10 }}
      />
      


      <button onClick={getWeather} style={{
        padding: 8,
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: 5
      }}>
        Get Forecast
      </button>

      <p style={{ marginTop: 20 }}>{weather}</p>
    </div>
  );
}

export default App;
