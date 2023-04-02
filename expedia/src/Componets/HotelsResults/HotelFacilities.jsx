import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  ListItem,
  UnorderedList,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Facilites({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <Box
      w={"75%"}
      borderRadius={"2xl"}
      boxShadow={"md"}
      m={"auto"}
      p={2}
      gap={"3"}
    >
      <Stack>
        <Heading mb={"2"} as={"h4"} size={"lg"}>
          {data?.name}
        </Heading>
        <Text as={"b"}>Rating</Text>
        <Heading as={"h6"} size={"md"}>
          {data?.rating} / 10 Good
        </Heading>
      </Stack>
      <Box mt={"5"}>
        <Heading as={"h6"} size={"md"}>
          Poplular ameniies
        </Heading>
        <Box
          display={"flex"}
          // border={"solid black"}
          w={"45%"}
          justifyContent={"space-between"}
          pt={"1"}
        >
          <Stack>
            <Text as={"b"} fontSize={"20px"}>
              Pool {data?.facilites?.pool ? "✔️" : "❌"}
            </Text>
            <Text as={"b"} fontSize={"20px"}>
              Parking {data?.facilites?.parking ? "✔️" : "❌"}
            </Text>
            <Text as={"b"} fontSize={"20px"}>
              Gym {data?.facilites?.parking ? "✔️" : "❌"}
            </Text>
          </Stack>
          <Stack>
            <Text as={"b"} fontSize={"20px"}>
              Free-Wifi {data?.facilites?.spa ? "✔️" : "❌"}
            </Text>
            <Text as={"b"} fontSize={"20px"}>
              Spa {data?.facilites?.spa ? "✔️" : "❌"}
            </Text>
            <Text as={"b"} fontSize={"20px"}>
              Gym {data?.facilites?.gym ? "✔️" : "❌"}
            </Text>
          </Stack>
        </Box>
      </Box>
      <Box mt={"25px"} display={"flex"} justifyContent={"center"} pb={"3"}>
        <Button onClick={handleClick} w={"sm"} colorScheme="blue">
          Reserve Room
        </Button>
        <Drawer onClose={onClose} isOpen={isOpen} size={"sm"}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Payment Option</DrawerHeader>
            <DrawerBody>
              <Text as={"b"}>Pay Now</Text>
              <UnorderedList>
                <ListItem>
                  We will process your payment in your local currency
                </ListItem>
                <ListItem>You can use a valid Sanvel coupon</ListItem>
                <ListItem>
                  Please note that Sanvel will not issue a tax invoice. You will
                  receive a commercial receipt for the purpose of the
                  transaction
                </ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
              <Stack>
                <Text as={"b"} textAlign={"right"} pr={3} fontSize={"2xl"}>
                  ₹{data?.price}
                </Text>
                <Text textAlign={"right"} pr={3}>
                  Including tax & Fees
                </Text>
                <Button mb={"8"} mt={"5"} colorScheme="blue">
                  Pay Now
                </Button>
              </Stack>
              <br />
              <Box mt={5}>
                <Text as={"b"}>Pay At Property</Text>
                <UnorderedList>
                  <ListItem>
                    Pay the property directly in their local currency
                  </ListItem>
                  <ListItem>You will not be charged until your stay</ListItem>
                  <ListItem>
                    Please note that Expedia will not issue a tax invoice. You
                    will receive a commercial receipt for the purpose of the
                    transaction. Upon request, a tax invoice would be issued by
                    the property
                  </ListItem>
                  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </UnorderedList>
                <Stack>
                  <Text as={"b"} textAlign={"right"} pr={3} fontSize={"2xl"}>
                    ₹{data?.price}
                  </Text>
                  <Text textAlign={"right"} pr={3}>
                    Including tax & Fees
                  </Text>
                  <Link to={`/payment/${data?.id}`}>
                    <Button w={"100%"} mb={"8"} mt={"5"} colorScheme="blue">
                      Pay At Property
                    </Button>
                  </Link>
                </Stack>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
}
export default Facilites;
