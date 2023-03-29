import { Flex, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BellIcon } from "@chakra-ui/icons";
import { BiSupport } from "react-icons/bi";
import SignInDropDown from "./SignInDropDown";
import SignInText from "./SingtextComp";

function RightNav() {
  return (
    <Box fontSize={"2xl"} color={"#343B53"}>
      <Flex
        w="350px"
        fontSize={"3xl"}
        justifyContent={"space-evenly"}
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
        alignItems="center"
      >
        <Text cursor={"pointer"} fontSize={"sm"}>
          Language
        </Text>
        <Text fontSize={"sm"} cursor={"pointer"}>
          Support
        </Text>
        <Text cursor={"pointer"} fontSize={"sm"}>
          Trips
        </Text>
        <BellIcon />
        <SignInText />
      </Flex>

      <Flex
        w={"200px"}
        justifyContent={"space-evenly"}
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
      >
        <Link to={"/"}>
          <BiSupport cursor="pointer" />
        </Link>
        <BellIcon cursor="pointer" />
        <SignInDropDown />
      </Flex>
    </Box>
  );
}

export default RightNav;
