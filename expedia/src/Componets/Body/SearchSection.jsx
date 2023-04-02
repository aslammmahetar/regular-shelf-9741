import {
  Flex,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Heading,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Card,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function SearchSeaction() {
  return (
    <Card
      variant="outline"
      boxShadow={"xl"}
      m="auto"
      mt={"45px"}
      borderRadius="1px"
    >
      <Tabs>
        <Flex justifyContent={"center"}>
          <TabList>
            <Tab>Stays</Tab>
            <Tab>Flights</Tab>
            <Tab>Cars</Tab>
            <Tab>Packeges</Tab>
            <Tab>Things to do</Tab>
          </TabList>
        </Flex>
        <hr style={{ width: "90%", margin: "auto" }} />
        <TabPanels>
          <TabPanel>
            <Flex
              direction={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
                "2xl": "row",
              }}
              pl="10"
              pr={"10"}
              //   justifyContent="center"
              justifyContent="space-around"
              //   alignItems={"center"}
            >
              <Box flexDirection={"column"} alignItems={"center"}>
                <Heading
                  display="flex"
                  justifyContent={"left"}
                  as={"h4"}
                  size="md"
                  mb={"2"}
                  pl="2"
                >
                  Enter Location
                </Heading>
                <Input
                  border={"solid 1px black"}
                  placeholder="📍 Going To?"
                  p={6}
                  w={{ base: "100%", sm: "100%", md: "100%", lg: "400px" }}
                />
              </Box>
              <Flex
                mt={{ base: "4", sm: "4", md: "4", lg: "0" }}
                direction={{ base: "column", sm: "column", md: "row" }}
                justifyContent={"space-between"}
              >
                <Box>
                  <Text>Check In</Text>
                  <Input
                    border={"solid 1px black"}
                    mt="2"
                    p={6}
                    w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                    // w={"300px"}
                  />
                </Box>
                <Box>
                  <Text>Check Out</Text>
                  <Input
                    border={"solid 1px black"}
                    p={6}
                    w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                    mt="2"
                    ml={{ base: "0", sm: "0", md: "0", lg: "2" }}
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                  />
                </Box>
              </Flex>
              <Box
                display="flex"
                alignItems={"center"}
                mt={{ base: "4", sm: "4", md: "4", lg: "6" }}
              >
                <Popover>
                  <PopoverTrigger>
                    <Button
                      w={"100%"}
                      p={6}
                      border={"solid 1px black"}
                      color="blackAlpha"
                    >
                      Travellers
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Traveller</PopoverHeader>
                    <PopoverBody>
                      <Heading as={"h5"} size="sm">
                        Room 1
                      </Heading>
                      <Flex
                        direction={"row"}
                        justifyContent="space-between"
                        alignItems={"center"}
                      >
                        <Text>Adults</Text>
                        <Box display={"flex"} alignItems="center">
                          <Button>+</Button>
                          <Text>1</Text>
                          <Button>-</Button>
                        </Box>
                      </Flex>

                      <Flex
                        mt={3}
                        direction={"row"}
                        justifyContent="space-between"
                        alignItems={"center"}
                      >
                        <Text>Children</Text>
                        <Box display={"flex"} alignItems="center">
                          <Button>+</Button>
                          <Text>1</Text>
                          <Button>-</Button>
                        </Box>
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>
            </Flex>
            <Box display={"flex"} justifyContent="center" mt="5">
              <Link to={"/hotels"}>
                <Button
                  colorScheme={"blue"}
                  p={{ base: 6, sm: 6, md: 6, lg: 6 }}
                  pl={{ base: 6, sm: 6, md: 6, lg: 14 }}
                  pr={{ base: 6, sm: 6, md: 6, lg: 14 }}
                >
                  Search
                </Button>
              </Link>
            </Box>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
}
export default SearchSeaction;
