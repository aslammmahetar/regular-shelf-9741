import { Spacer, Box, Card, Flex, Image, Text, Button } from "@chakra-ui/react";

function SignInSug() {
  return (
    <Card mt={"25px"} bgColor="#141D38" p="4" border="1px">
      <Flex justifyContent="space-around" alignItems={"center"}>
        <Image
          src="https://a.travel-assets.com/pricing-claim/sparkle_white.svg"
          w={"11%"}
        />

        <Flex
          w={"70%"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          pl="2"
          //   border="solid 1px red"
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        >
          <Text
            as={"b"}
            color="white"
            fontSize={{ base: "sm", sm: "sm", md: "lg", lg: "lg" }}
          >
            Save an average of 15% on thousands of hotels when you're signed in
          </Text>
          {/* <Spacer /> */}
          <Button alignSelf={"start"} mt="1.5" colorScheme={"blue"}>
            Sign In
          </Button>
        </Flex>
        <Image
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
          src="https://a.travel-assets.com/pricing-claim/sparkle_white.svg"
          w={"11%"}
        />
      </Flex>
    </Card>
  );
}
export default SignInSug;
