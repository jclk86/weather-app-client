import SearchForm from "./SearchForm/SearchForm";
import { Box } from "@chakra-ui/react";

const SearchPage = () => {
  // Container
  return (
    <Box maxWidth="900px" m="0 auto" border="1px solid red">
      <SearchForm />
    </Box>
  );
};

export default SearchPage;
