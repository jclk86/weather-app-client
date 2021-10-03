import React from "react";
import {
  AccordionItem,
  AccordionButton,
  Box,
  Flex,
  AccordionPanel,
} from "@chakra-ui/react";
import {
  getDay,
  getIcon,
  convertKelvinToFahrenheit,
  convertMetersPerSectoMilesPerHour,
} from "../../../utilities/Util";

const ForecastItem = ({
  date,
  temp,
  tempMin,
  tempMax,
  humidity,
  feel,
  wind,
  description,
  icon,
}) => {
  let today = getDay(new Date());
  let tomorrow = getDay(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
  let dayOfWeek = getDay(date);

  return (
    <AccordionItem bgColor="rgba(0,0,0,.1)">
      <h2>
        <AccordionButton fontWeight="bold">
          {icon && getIcon(icon)}
          <Flex flex="1" flexDirection="column" textAlign="left" ml="5px">
            <Box>
              {(dayOfWeek === today && "Today") ||
                (dayOfWeek === tomorrow && "Tomorrow") ||
                dayOfWeek}
            </Box>
            <Box color="gray.400">{description}</Box>
          </Flex>
          <Box>{convertKelvinToFahrenheit(temp) + " °F"}</Box>
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} bgColor="rgba(0,0,0,.15)">
        <Flex flexDirection="row" fontWeight="semibold">
          <Flex flex="1" flexDirection="column">
            <Box>{"Low: " + convertKelvinToFahrenheit(tempMin) + " °F"}</Box>
            <Box>{"High: " + convertKelvinToFahrenheit(tempMax) + " °F"}</Box>
            <Box>
              {"Feels like: " + convertKelvinToFahrenheit(feel) + " °F"}
            </Box>
          </Flex>
          <Flex flex="1" flexDirection="column" textAlign="right">
            <Box>
              {"Wind speed: " +
                convertMetersPerSectoMilesPerHour(wind.speed) +
                " mph"}
            </Box>
            <Box>{"Humidity: " + humidity + " %"}</Box>
          </Flex>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default ForecastItem;
