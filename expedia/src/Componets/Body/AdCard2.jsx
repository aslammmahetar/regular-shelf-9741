import SunVeiw from "./BodyImages/4K-PC-Wallpapers-PixelsTalk_Net.jpg";
import { Button, Box, Heading, Text } from "@chakra-ui/react";
import CSS from "./QuoteCard.module.css";
import { color } from "framer-motion";

function QuoteCard2() {
  return (
    <div
      className={CSS.bg2}
      style={{
        color: "white",
        borderRadius: "12px",
        marginTop: "45px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "start",
      }}
    >
      <Box
        w={"80%"}
        display="flex"
        flexDirection={"column"}
        alignItems="start"
        pb={"6"}
      >
        <Heading pl={"33px"} as={"h1"} size="lg">
          Plan ahead and save
        </Heading>
        <Text pl={"33px"}>
          Book 60 days in advanced for 20% off select stays.
        </Text>
      </Box>
    </div>
  );
}

export default QuoteCard2;
