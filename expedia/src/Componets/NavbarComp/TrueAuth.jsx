import { Flex, Box, Text } from "@chakra-ui/react";

function TrueAuth() {
  return (
    <Flex
      p={7}
      color={"#141D38"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Box>
        <Text as={"b"} fontSize={"2xl"}>
          Hello Nawab
        </Text>
        <Text opacity={"0.5"} fontSize={"md"}>
          nawabpvt@gmial.com
        </Text>
      </Box>
    </Flex>
  );
}
export default TrueAuth;
