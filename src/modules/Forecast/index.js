import React from "react";
import { useSelector } from "react-redux";
import ForecastList from "./ForecastList";
import { Box, Spinner } from "@chakra-ui/react";

const Forecast = () => {
  const { forecasts, loading } = useSelector((state) => ({
    forecasts: state.forecast,
    loading: state.loading,
  }));

  // Container
  return (
    <Box maxWidth="900px" m="0 auto">
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <ForecastList weatherData={forecasts} />
      )}
    </Box>
  );
};

export default Forecast;
