import Navbar from "./NavBar";
import Body from "./Body";
import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <Box bgColor={"whiteAlpha.100"}>
      <Navbar />
      <Body />
    </Box>
  );
}

export default Home;
