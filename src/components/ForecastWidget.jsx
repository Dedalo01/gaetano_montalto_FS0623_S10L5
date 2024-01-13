import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  FlexBox,
  SpecialH3,
  CardFooter,
} from "../assets/styles/ForecastWidget";
import {
  OPENWEATHER_URL,
  OPENWEATHER_KEY,
  WEATHER_ICON_URL,
} from "../utils/key";

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const ForecastWidget = ({ coordinates }) => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    console.log("fired useEffect");

    getForecast();
  }, []);

  const getForecast = async () => {
    const actualForecast = await fetchForecast(coordinates);
    setForecast(actualForecast);
  };

  const fetchForecast = async ({ latitude, longitude }) => {
    try {
      const res = await fetch(
        `${OPENWEATHER_URL}/forecast?appid=${OPENWEATHER_KEY}&lat=${latitude}&lon=${longitude}&units=metric`
      );
      console.log(res);

      if (!res.ok) throw new Error("Errore, cannot fetch data");

      const data = await res.json();
      console.log(data);
      return data.list;
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  return (
    <div>
      <SpecialH3>Forecast Prevision</SpecialH3>
      <FlexBox>
        {forecast &&
          forecast.map((weatherDay) => {
            const lastUpdate = new Date(weatherDay.dt_txt);
            const day = lastUpdate.getDate();
            const month = lastUpdate.getMonth() + 1;
            const year = lastUpdate.getFullYear();
            const hours = lastUpdate.getHours();
            const minutes = lastUpdate.getMinutes();

            const dayName = weekDays[lastUpdate.getDay()];
            const iconURL = `${WEATHER_ICON_URL}/${weatherDay.weather[0].icon}@2x.png`;

            return (
              <Card key={weatherDay.dt}>
                {/* card header */}
                <CardHeader>
                  <img src={iconURL} alt={weatherDay.weather[0].main} />
                  <h2>{dayName}</h2>
                  <p>
                    {day}/{month}/{year}
                  </p>
                  <p>
                    Weather At: <br /> {hours}:
                    {minutes < 10 ? "0" + minutes : minutes} <br /> o'clock
                  </p>
                  <div id="weather-desc">
                    <p>{weatherDay.weather[0].main}</p>
                    <p>{weatherDay.weather[0].description}</p>
                  </div>
                </CardHeader>

                {/* card body */}
                <CardBody>
                  <div id="temp-div">
                    <h3>Temperature</h3>
                    <p>Feels Like: {weatherDay.main.feels_like}°C</p>
                    <p>Max: {weatherDay.main.temp_max}°C</p>
                    <p>Min: {weatherDay.main.temp_min}°C</p>
                  </div>
                  <div id="wind-div">
                    <h3>Wind</h3>
                    <p>speed: {weatherDay.wind.speed}m/s</p>
                    <p>deg: {weatherDay.wind.deg}°</p>
                    <p>gust: {weatherDay.wind.gust}m/s</p>
                  </div>
                  <h3>Other infos</h3>
                  <p>Pressure: {weatherDay.main.pressure} hPa</p>
                  <p>Humidity: {weatherDay.main.humidity}%</p>
                  <p>Clouds: {weatherDay.clouds.all}%</p>
                  <p>Prob. of Precipitation: {weatherDay.pop}</p>
                </CardBody>

                {/* card footer */}
                <CardFooter>
                  <p>
                    Part of Day:{" "}
                    <span>{weatherDay.sys.pod === "n" ? "night" : "day"}</span>
                  </p>
                </CardFooter>
              </Card>
            );
          })}
      </FlexBox>
    </div>
  );
};

export default ForecastWidget;
