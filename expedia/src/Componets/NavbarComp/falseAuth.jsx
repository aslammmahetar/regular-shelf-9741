import { Box, Image, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function FalseAuth() {
  return (
    <Box justifyContent={"center"} p="7">
      <Image
        src="https://a.travel-assets.com/pricing-claim/sparkle_white.svg"
        m={"auto"}
        mb="3"
      />
      <Text fontStyle={"oblique"} size="lg" color={"black"}>
        Save an average of 15% <br /> on thousands of hotels when you're signed
        in
      </Text>
      <Link to={"signin"}>
        <Button colorScheme="messenger" w={"100%"} mt="3">
          Sign In
        </Button>
      </Link>
      <Box display={"flex"} justifyContent={"center"} mt="3" color="#343B53">
        <Button variant={"ghost"} fontSize={"lg"} cursor="pointer">
          <Link to="createaccount">Create a free account</Link>
        </Button>{" "}
      </Box>
    </Box>
  );
}
export default FalseAuth;
