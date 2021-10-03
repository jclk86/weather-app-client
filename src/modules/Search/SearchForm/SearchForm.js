import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Button,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { onGetForecasts } from "../../../redux/actions/Forecast";
import { useDispatch } from "react-redux";

const SearchForm = () => {
  const [zipCodeValue, setZipCodeValue] = useState("");
  const [redirect, setRedirect] = useState(false);
  const handleChange = (event) => setZipCodeValue(event.target.value);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(onGetForecasts(zipCodeValue));

    setZipCodeValue("");

    setRedirect(true);
  };

  // function validateZipeCode(value) {
  //   let error;
  //   if (!value) {
  //     error = "Zip code is required";
  //   } else if (value.length !== 5) {
  //     error = "US zip codes are 5 digits long 😱";
  //   }
  //   return error;
  // }
  if (redirect) {
    return <Redirect to="/five-day-forecast" />;
  }

  return (
    <Flex
      maxWidth="450px"
      border="1px solid black"
      justifyContent="center"
      m="250px auto"
      p="20px"
    >
      <form onSubmit={handleSubmit}>
        <FormControl id="zipcode-search">
          <FormLabel>Zip Code</FormLabel>
          <InputGroup size="md">
            <Input
              variant="outline"
              placeholder="ex: 10013"
              size="md"
              value={zipCodeValue}
              onChange={handleChange}
            />{" "}
            <InputRightElement width="5 rem">
              <Button type="submit">Search</Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText>Type in US-based zip code.</FormHelperText>
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
      </form>
    </Flex>
  );
};

export default SearchForm;
