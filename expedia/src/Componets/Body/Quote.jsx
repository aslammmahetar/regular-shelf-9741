import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function FooterQuote() {
  return (
    <Box mt={50} display="flex" flexDirection="column">
      <Text as="em" textAlign={"center"}>
        Explore a world of travel with SanVel
      </Text>

      <Text as={"u"} color="blue" textAlign={"center"} mt="-0.5">
        Discover new places and experiences
      </Text>
    </Box>
  );
}
export default FooterQuote;
