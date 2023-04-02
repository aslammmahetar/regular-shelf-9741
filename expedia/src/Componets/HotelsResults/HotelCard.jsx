import {
  Card,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function HotdataCard({ data }) {
  return (
    <Link key={data.id} to={`${data.id}`}>
      <Card
        display={"flex"}
        borderRadius={"13px"}
        flexDirection={""}
        m={"auto"}
        mt={"10px"}
        //   border={"solid black"}
        w={"95%"}
      >
        <Image
          w={"35%"}
          borderTopLeftRadius={"10px"}
          borderBottomLeftRadius={"10px"}
          src={data.image}
        ></Image>
        <Flex
          // border={"red 1px solid"}
          w={"100%"}
          flexDirection={"column"}
          p={"3"}
        >
          <Stack>
            <Heading as={"h3"} size={"md"}>
              {data.name}
            </Heading>
            <Text>{data.location}</Text>
          </Stack>
          <Spacer></Spacer>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignSdataf={"end"}
            //   border={"1px"}
            w={"100%"}
          >
            <Box
              mt={"6"}
              display={"flex"}
              flexDir={"column"}
              // alignItems={"flex-end"}
              // border={"1px"}
            >
              <Text mt={1}>Fully refundable</Text>
              <Text>Fully refundable</Text>

              <Text>Rating : {data.rating} / 10 Amazing </Text>
            </Box>
            <Stack
              display={"flex"}
              alignItems={"flex-end"}
              //   border={"1px"}
            >
              <Text as="s">₹7,499</Text>
              <Heading as={"h3"} size={"lg"}>
                Price : {data.price}
              </Heading>
              <Text>included Taxes & Fees</Text>
            </Stack>
          </Box>
        </Flex>
      </Card>
    </Link>
  );
}

export default HotdataCard;
