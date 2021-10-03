import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ForecastList from "./ForecastList";
import { Flex, Box, Spinner, Button } from "@chakra-ui/react";
import NotFound from "../NotFound";

const Forecast = () => {
  const history = useHistory();
  const { forecasts, loading, error } = useSelector((state) => ({
    forecasts: state.forecast,
    loading: state.loading,
    error: state.common.error,
  }));

  if (error !== "" || error) {
    return <NotFound error={error} />;
  }

  // Container
  return (
    <Box maxWidth="900px" m="0 auto">
      <Flex
        justifyContent="end"
        pt={{ base: "50px", md: "100px" }}
        pr={{ base: "10px", lg: "0px" }}
      >
        <Button bgColor="pink.100" onClick={() => history.push("/search")}>
          Return
        </Button>
      </Flex>
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
