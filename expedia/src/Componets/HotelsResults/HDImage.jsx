import { Box, Image } from "@chakra-ui/react";

function HotelImages({ data }) {
  return (
    <Box
      w={"75%"}
      // border={"1px"}
      borderRadius={"2xl"}
      boxShadow={"md"}
      display={"flex"}
      m={"auto"}
      mt={"45px"}
      p={2}
      gap={"3"}
      // justifyContent={"center"}
    >
      <Box
        w={"45%"}
        m={"auto"}
        // border={"solid black"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image w={"70%"} src={data?.images?.img4}></Image>
        <Image mt={"2"} w={"70%"} src={data?.images?.img2}></Image>
      </Box>
      <Box
        w={"45%"}
        m={"auto"}
        // border={"solid black"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image w={"70%"} src={data?.images?.img1}></Image>
        <Image w={"70%"} mt={"2"} src={data?.images?.img3}></Image>
      </Box>
    </Box>
  );
}
export default HotelImages;
