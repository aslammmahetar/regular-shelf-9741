import { Box, Image } from "@chakra-ui/react";
import img from "../NavbarComp/images/20230328_153347.jpg";
import { ArrowBackIcon } from "@chakra-ui/icons";

function LoginNav() {
  return (
    <Box
      fontFamily={"sans-serif"}
      w={"100%"}
      //   borderBottom={"solid 1px black"}
      mt="0"
      boxShadow={"md"}
      display="flex"
    >
      <Box w={"150px"}>
        <ArrowBackIcon fontSize={"2xl"} />
      </Box>
      <Box>
        <Image src={img} w="100px" textAlign={"center"}></Image>
      </Box>
    </Box>
  );
}

export default LoginNav;
