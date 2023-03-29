import { Box } from "@chakra-ui/react";
import LogoAndMt from "./NavbarComp/LogoAndMT";
import RightNav from "./NavbarComp/RightNav";

function Navbar() {
  return (
    <Box
      fontFamily={"sans-serif"}
      w={"100%"}
      pl={{ base: "1", sm: "1", md: "1", lg: "40" }}
      pr={{ base: "1", sm: "1", md: "1", lg: "40" }}
      //   borderBottom={"solid 1px black"}
      mt="0"
      boxShadow={"md"}
    >
      <Box
        display="flex"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <LogoAndMt />
        <RightNav />
      </Box>
    </Box>
  );
}
export default Navbar;
