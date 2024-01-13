import { useState } from "react";
import { OPENWEATHER_KEY } from "../utils/key";
import Form from "../assets/styles/SearchLocation";

const OPENWEATHER_URL_LOCATION = "http://api.openweathermap.org/geo/1.0/direct";

const SearchLocation = ({ getCoordinates }) => {
  const [nameLocation, setNameLocation] = useState("");

  const fetchCoordinates = async (location) => {
    try {
      const res = await fetch(
        `${OPENWEATHER_URL_LOCATION}?q=${location}&appid=${OPENWEATHER_KEY}`
      );

      if (!res.ok) throw new Error("Error, cannot fetch data");

      const data = await res.json();
      console.log(data);
      const { lat, lon } = data[0];
      const coordinates = {
        latitude: lat,
        longitude: lon,
      };

      return coordinates;
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const coordinates = await fetchCoordinates(nameLocation);
    console.log(coordinates);
    getCoordinates(coordinates.latitude, coordinates.longitude);
  };

  const handleChange = (e) => {
    setNameLocation(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Location"
        value={nameLocation}
        onChange={handleChange}
      />

      <button type="submit">Search Location</button>
    </Form>
  );
};

export default SearchLocation;
