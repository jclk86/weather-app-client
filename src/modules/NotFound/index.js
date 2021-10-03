import { Flex, Button, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const NotFound = (props) => {
  const history = useHistory();

  return (
    <Flex
      justifyContent="center"
      mt={{ base: "300px", md: "400px" }}
      flexDirection="column"
    >
      <Heading textAlign="center">
        {props.error ? "No such zip code exists. Try again." : "Page Not Found"}
      </Heading>
      <Button
        onClick={() => history.push("/search")}
        width="250px"
        m="10px auto"
      >
        Return
      </Button>
    </Flex>
  );
};

export default NotFound;
