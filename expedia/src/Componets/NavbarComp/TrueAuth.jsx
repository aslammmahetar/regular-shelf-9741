import { Flex, Box, Text, Image } from "@chakra-ui/react";

function TrueAuth({ name, mail, img }) {
  return (
    <Flex p={7} color={"#141D38"} justifyContent={"space-between"}>
      <Box>
        <Text as={"b"} fontSize={"2xl"}>
          Hello {name}
        </Text>
        <Text opacity={"0.5"} fontSize={"md"}>
          {mail}
        </Text>
      </Box>
      <Box>
        <Image w={"70px"} borderRadius={"50%"} src={img}></Image>
      </Box>
    </Flex>
  );
}
export default TrueAuth;
