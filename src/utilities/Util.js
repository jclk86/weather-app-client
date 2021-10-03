import { Image } from "@chakra-ui/react";
import weatherIconsJSON from "../shared/constants/weather-codes-icon-map.json";

export const getDay = (date) => {
  const options = {
    weekday: "long",
    // year: "numeric",
    // month: "long",
    // day: "numeric",
  };
  return new Date(date).toLocaleString("en-US", options);
};

export const extractFiveDays = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i += 8) {
    result.push(arr[i]);
  }
  return result;
};

export const getIcon = (iconCode) => {
  return (
    <Image
      src={`assets/${weatherIconsJSON[iconCode]}`}
      alt={weatherIconsJSON[iconCode]}
      boxSize="70px"
      objectFit="cover"
    />
  );
};

export const convertKelvinToFahrenheit = (kUnit) => {
  // (K − 273.15) × 9/5 + 32 = °F
  let fahrenheit = Math.floor(((kUnit - 273.15) * 9) / 5 + 32);
  return fahrenheit;
};

export const convertMetersPerSectoMilesPerHour = (metersPerSecond) => {
  return Math.floor(metersPerSecond / 0.44704);
};
