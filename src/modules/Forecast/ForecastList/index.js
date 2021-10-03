import React from "react";
import { Accordion, Flex, Box, Heading } from "@chakra-ui/react";
import ForecastItem from "./ForecastItem";
import { extractFiveDays } from "../../../utilities/Util";

const ForecastList = ({ weatherData }) => {
  const { uv_index, data } = weatherData.forecasts;

  let fiveDayForecast = extractFiveDays(data);

  return (
    <Accordion allowMultiple mt={{ base: "50px", md: "70px" }}>
      <Heading textAlign="center" color="blue">
        Five-Day Forecast
      </Heading>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="80px"
        flexDirection="column"
      >
        <Box fontWeight="bold" fontSize="20px">
          {"Today's UV Index:"}
        </Box>
        <Box fontWeight="semibold" fontSize="18px">
          {uv_index}
        </Box>
      </Flex>
      {fiveDayForecast.map(
        ({
          date,
          main: { temp, temp_min, temp_max, humidity, feel, wind },
          description,
          icon,
        }) => (
          <ForecastItem
            date={date}
            temp={temp}
            tempMin={temp_min}
            tempMax={temp_max}
            humidity={humidity}
            feel={feel}
            key={date}
            wind={wind}
            description={description}
            icon={icon}
          />
        )
      )}
    </Accordion>
  );
};

export default ForecastList;
