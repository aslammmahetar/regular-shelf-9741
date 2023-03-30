import Navbar from "./NavBar";
import Body from "./Body";
import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import axios from "axios";

function Home() {
  return (
    <Box bgColor={"whiteAlpha.100"}>
      <Navbar />
      <Body />
      <Footer />
    </Box>
  );
}

export default Home;
