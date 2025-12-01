import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(null);

  const getWeather = async () => {
    if (city.trim() === "") return;

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=26d9cd5f04788516a36e81f4ee4a61f2&units=metric`;

    const res = await fetch(API);
    const data = await res.json();

    if (data.main) {
      setTemp(data.main.temp);
    } else {
      alert("City not found!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      {temp !== null && (
        <h2>Temperature: {temp}°C</h2>
      )}
    </div>
  );
}

export default Weather;
