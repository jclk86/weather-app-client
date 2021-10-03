import SearchForm from "./SearchForm/SearchForm";
import { Box } from "@chakra-ui/react";

const SearchPage = () => {
  // Container
  return (
    <Box maxWidth="900px" m="0 auto">
      <SearchForm />
    </Box>
  );
};

export default SearchPage;
