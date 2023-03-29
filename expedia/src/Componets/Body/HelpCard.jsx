import {
  Box,
  Flex,
  Heading,
  Grid,
  GridItem,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FiPenTool } from "react-icons/fi";

const HelpCardsData = [
  {
    help: "Change or cancel trip",
    text: "Make Updates to your itinerary or cancel a booking",
    icon: FiPenTool,
  },
  {
    help: "Change or cancel trip",
    text: "Make Updates to your itinerary or cancel a booking",
    icon: FiPenTool,
  },
  {
    help: "Change or cancel trip",
    text: "Make Updates to your itinerary or cancel a booking",
    icon: FiPenTool,
  },
];

function HelpCards() {
  return (
    <Box mt={"45px"}>
      <Heading>Here to help keep you on the move</Heading>
      <Flex justifyContent={"space-around"} mt={"20px"}>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {HelpCardsData.map((el) => {
            return (
              <>
                <GridItem
                  w="100%"
                  boxShadow="2xl"
                  //   borderStyle={""}
                  border={"1px dotted"}
                  p={3}
                  borderRadius="15px"
                  cursor={"pointer"}
                >
                  <Box display={"flex"} justifyContent="space-between">
                    <Heading as={"h4"} size="md" display="flex">
                      {el.help}
                    </Heading>
                    <Icon as={el.icon} mt="10px" mr={"5px"}></Icon>
                  </Box>
                  <Text fontSize={"sm"}>{el.text}</Text>
                </GridItem>
              </>
            );
          })}
        </Grid>
      </Flex>
    </Box>
  );
}

export default HelpCards;
