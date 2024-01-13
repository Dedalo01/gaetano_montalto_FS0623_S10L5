import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  SpecialH3,
  CardFooter,
} from "../assets/styles/WeatherWidget";

import {
  OPENWEATHER_URL,
  OPENWEATHER_KEY,
  WEATHER_ICON_URL,
} from "../utils/key";

const WeatherWidget = ({ coordinates }) => {
  const [fetchResult, setFetchResult] = useState(null);

  useEffect(() => {
    console.log("fired useEffect");

    getWeather();
  }, []);

  const getWeather = async () => {
    const actualWeather = await fetchWeather(coordinates);
    setFetchResult(actualWeather);
  };

  const fetchWeather = async ({ latitude, longitude }) => {
    try {
      const res = await fetch(
        `${OPENWEATHER_URL}/weather?appid=${OPENWEATHER_KEY}&lat=${latitude}&lon=${longitude}&units=metric`
      );
      console.log(res);

      if (!res.ok) throw new Error("Errore, cannot fetch data");

      const data = await res.json();
      console.log("data: ", data);
      const {
        weather,
        main,
        visibility,
        wind,
        clouds,
        dt: dayTime,
        sys: { sunrise, sunset, country },
        timezone,
        name,
      } = data;

      const iconURL = `${WEATHER_ICON_URL}/${weather[0].icon}@2x.png`;
      console.log(iconURL);
      const actualWeather = {
        weather: {
          id: weather[0].id,
          main: weather[0].main,
          description: weather[0].description,
          iconURL,
        },

        main,
        visibility,
        wind,
        clouds,
        dayTime,
        sunrise,
        sunset,
        country,
        timezone,
        name,
      };
      console.log("actual weather ", actualWeather);

      return actualWeather;
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  const calculateUNIXTime = (millisec) => {
    const date = new Date(millisec * 1000).toISOString();
    const actualDate = new Date(date);
    const hours = actualDate.getHours();
    const minutes =
      actualDate.getMinutes() < 10
        ? "0" + actualDate.getMinutes()
        : actualDate.getMinutes();
    return `${hours}:${minutes}`;
  };

  const calculateLastUpdate = (millisec) => {
    const date = new Date(millisec * 1000).toDateString();

    return date;
  };
  return (
    <div>
      <SpecialH3>Today</SpecialH3>
      {fetchResult && (
        <Card>
          {/* card header */}
          <CardHeader>
            <h3>
              {fetchResult.name}, {fetchResult.country}{" "}
            </h3>
            <img
              src={fetchResult.weather.iconURL}
              alt={fetchResult.weather.main}
            />
          </CardHeader>

          {/* card body */}
          <CardBody>
            <div>
              <p id="special-temp">{fetchResult.main.temp}°C</p>
              <h3>Today Highlights:</h3>
              <p>Max: {fetchResult.main.temp_max}°C</p>
              <p>Min: {fetchResult.main.temp_min}°C</p>
              <p>Sunrise: {calculateUNIXTime(fetchResult.sunrise)}</p>
              <p>Sunset: {calculateUNIXTime(fetchResult.sunset)}</p>
              <p>Timezone: {fetchResult.timezone}</p>
            </div>

            <div id="details-container">
              <h3>Detalis</h3>

              <p>Feels like: {fetchResult.main.feels_like}°C</p>
              <p>Wind: {fetchResult.wind.speed} m/s</p>
              <p>Humidity: {fetchResult.main.humidity}%</p>

              <p>Pressure: {fetchResult.main.pressure} hPa</p>
              <p>Clouds: {fetchResult.clouds.all}%</p>
            </div>
          </CardBody>

          {/* card footer */}
          <CardFooter>
            <p>
              Last updated at: <br /> {calculateLastUpdate(fetchResult.dayTime)}
            </p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default WeatherWidget;
