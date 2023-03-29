import { Box, Text } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

function Explore() {
  return (
    <Box
      border={"1px solid"}
      mt="45px"
      p={"15px"}
      pl="40px"
      pr={"40px"}
      borderRadius="xl"
      background={"#343B53"}
      display="flex"
    >
      <Box display="flex" alignItems={"center"}>
        <WarningTwoIcon w={"30px"} h="30px" color={"white"} />
      </Box>
      <Text color={"white"} pl="5" fontSize={"sm"}>
        Explore more in 2023. Soon you’ll be able to sign in and book with one
        account across Expedia, Hotels.com, and Vrbo. <br /> Learn more
      </Text>
    </Box>
  );
}

export default Explore;
