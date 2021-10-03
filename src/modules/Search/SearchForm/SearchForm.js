import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Button,
  InputRightElement,
  InputGroup,
  Heading,
} from "@chakra-ui/react";
import { onGetForecasts } from "../../../redux/actions/Forecast";
import { useDispatch } from "react-redux";
import { checkIfNums } from "../../../utilities/Util";

const SearchForm = () => {
  const [zipCodeValue, setZipCodeValue] = useState("");
  const [redirect, setRedirect] = useState(false);
  const handleChange = (event) => setZipCodeValue(event.target.value);
  const dispatch = useDispatch();

  // disables submit if input is invalid
  const isInvalid = zipCodeValue.length !== 5 || !checkIfNums(zipCodeValue);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(onGetForecasts(zipCodeValue));

    setZipCodeValue("");

    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/five-day-forecast" />;
  }

  return (
    <Flex
      maxWidth="450px"
      justifyContent="center"
      m="250px auto"
      p="20px"
      bgColor="rgba(0,0,0,.1)"
      borderRadius="10px"
    >
      <form onSubmit={handleSubmit}>
        <Heading
          textAlign="center"
          fontFamily="Helvetica"
          fontSize={{ base: "24px", md: "30px" }}
        >
          Find your local weather forecast
        </Heading>
        <FormControl id="zipcode-search" isRequired>
          <FormLabel>Zip Code</FormLabel>
          <InputGroup size="md">
            <Input
              bgColor="pink.100"
              placeholder="ex: 10013"
              size="md"
              value={zipCodeValue}
              onChange={handleChange}
              errorBorderColor="red"
            />{" "}
            <InputRightElement width="5 rem">
              <Button
                type="submit"
                isDisabled={isInvalid}
                colorScheme="pink"
                variant="solid"
              >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText>Type in 5-digit, US-based zip code.</FormHelperText>
        </FormControl>
      </form>
    </Flex>
  );
};

export default SearchForm;
