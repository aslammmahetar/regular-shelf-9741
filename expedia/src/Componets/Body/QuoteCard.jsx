import SunVeiw from "./BodyImages/4K-PC-Wallpapers-PixelsTalk_Net.jpg";
import { Button, Box, Heading, Text } from "@chakra-ui/react";
import CSS from "./QuoteCard.module.css";
import { color } from "framer-motion";

function QuoteCard() {
  return (
    <div
      className={CSS.bg}
      style={{
        color: "white",
        borderRadius: "12px",
        marginTop: "45px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
      }}
    >
      <Box w={"80%"} display="flex" flexDirection={"column"} alignItems="start">
        <Heading pl={"33px"} as={"h1"} size="xl">
          Save instantly with SenVel Rewards
        </Heading>
        <Text pl={"33px"}>
          You can enjoy access to perks like Member Prices, saving an average of
          15% on thousands of hotels. Terms may apply.
        </Text>
        <Button colorScheme={"blue"} ml={"33px"} mt="12px">
          See All Member Price
        </Button>
      </Box>
    </div>
  );
}

export default QuoteCard;
