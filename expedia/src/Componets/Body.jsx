import SearchSeaction from "./Body/SearchSection";
import Explore from "./Body/Explore2023";
import { Box } from "@chakra-ui/react";
import QuoteCard from "./Body/QuoteCard";
import AdCard from "./Body/AdCard";
import HelpCards from "./Body/HelpCard";
import QuoteCard2 from "./Body/AdCard2";
import FooterQuote from "./Body/Quote";

function Body() {
  return (
    <Box w={{ base: "95%", sm: "95%", md: "95%", lg: "80%" }} m="auto">
      <SearchSeaction />
      <Explore />
      <QuoteCard />
      <AdCard />
      <HelpCards />
      <QuoteCard2 />
      <FooterQuote />
    </Box>
  );
}

export default Body;
