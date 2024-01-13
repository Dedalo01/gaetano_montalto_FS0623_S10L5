import { useState } from "react";
import FlexBox from "../assets/styles/WeatherInfoBox";
import ForecastWidget from "./ForecastWidget";
import SearchLocation from "./SearchLocation";
import WeatherWidget from "./WeatherWidget";

const WeatherInfoBox = () => {
  const [coordinates, setCoordinates] = useState(null);

  const getCoordinates = (latitude, longitude) => {
    setCoordinates({ latitude, longitude });
  };
  return (
    <div>
      <SearchLocation getCoordinates={getCoordinates} />
      {coordinates && (
        <FlexBox>
          <WeatherWidget coordinates={coordinates} />

          <ForecastWidget coordinates={coordinates} />
        </FlexBox>
      )}
    </div>
  );
};

export default WeatherInfoBox;
