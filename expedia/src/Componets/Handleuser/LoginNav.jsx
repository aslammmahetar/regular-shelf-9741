import { Image, Box } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import img from "./img/20230330_235043.png";
import { Link } from "react-router-dom";

function LoginNav() {
  return (
    <Box display={"flex"} mt="0" boxShadow={"md"} w="100%" p={1}>
      <Box ml={"2"} display={"flex"} alignItems="center">
        <Link to={"/"}>
          <ArrowBackIcon fontSize="2xl" />
        </Link>
      </Box>
      <Box w={"140px"} m="auto">
        <Image src={img}></Image>
      </Box>
    </Box>
  );
}
export default LoginNav;
