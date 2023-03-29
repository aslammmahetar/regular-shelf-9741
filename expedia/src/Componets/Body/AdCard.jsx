import { Box, Image, Text, Heading, Button, Card } from "@chakra-ui/react";

function AdCard2() {
  return (
    <Box mt="45px" display={"flex"} borderRadius="12px" borderWidth={"1px"}>
      <Image
        src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg"
        borderRadius="11px"
        w={{ base: "234px", sm: "234px", md: "234px", lg: "400px" }}
      ></Image>
      <Box w="85" m={"auto"} p="12px">
        <Heading as={"h1"}>Go further with the SenVel app</Heading>
        <Text lineHeight={"6"} mt="5px">
          Save even more - get up to 20% on select hotels and earn double the
          points when you book on the app. Our app deals help you to save on
          trips so you can travel more and manage it all on the go.
        </Text>
        <Button
          colorScheme={"blue"}
          display={{ base: "block", sm: "block", md: "block", lg: "none" }}
          mt="15px"
        >
          Switch to the app
        </Button>
        <Text
          mt={"45px"}
          as={"b"}
          fontSize="2xl"
          display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
        >
          Scan the QR code with your device camera and download our app
        </Text>
      </Box>
      <Box display={"flex"} alignItems="center">
        <Image
          src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/BEX-HP-CONTROL-27.png"
          display={{ base: "none", sm: "none", md: "none", lg: "block" }}
          w="154px"
          h={"154px"}
          mr="180px"
        ></Image>
      </Box>
    </Box>
  );
}
export default AdCard2;
