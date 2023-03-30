import { Box, Flex, Heading, List, ListItem, Stack } from "@chakra-ui/react";
import CSS from "../Componets/Body/QuoteCard.module.css";

function Footer() {
  return (
    <Flex
      className={CSS.bg3}
      fontSize={"sm"}
      w={{ base: "95%", sm: "95%", md: "95%", lg: "80%" }}
      m="auto"
      justifyContent={"space-around"}
      mt="45px"
    >
      <Box>
        <Heading as={"h6"} size="sm">
          Companny
        </Heading>
        <br />
        <List>
          <Stack>
            <ListItem>About Us</ListItem>
            <ListItem>Jobs</ListItem>
            <ListItem>List your property</ListItem>
            <ListItem>Partnerships</ListItem>
          </Stack>
        </List>
      </Box>
      <Box>
        <Heading as={"h6"} size="sm">
          Explore
        </Heading>
        <br />
        <List>
          <Stack>
            <ListItem>India travel guide</ListItem>
            <ListItem>Hotels in Inida</ListItem>
            <ListItem>Holiday rental in India</ListItem>
            <ListItem>Holidays packages in India</ListItem>
            <ListItem>Domestic flights</ListItem>
            <ListItem>Car hire in India</ListItem>
            <ListItem>All accomodation types</ListItem>
            <ListItem>Travel Blog</ListItem>
          </Stack>
        </List>
      </Box>
      <Box>
        <Heading as={"h6"} size="sm">
          Policies
        </Heading>
        <br />
        <List>
          <Stack>
            <ListItem>Privacy Statement</ListItem>
            <ListItem>Terms of use</ListItem>
            <ListItem>Vrbo terms and condition</ListItem>
          </Stack>
        </List>
      </Box>
      <Box>
        <Heading as={"h6"} size="sm">
          Help
        </Heading>
        <br />
        <List>
          <Stack>
            <ListItem>Support</ListItem>
            <ListItem>Change or Cancel your booking</ListItem>
            <ListItem>List your property</ListItem>
            <ListItem>Refund process and airlines credit</ListItem>
            <ListItem>International travel documents</ListItem>
          </Stack>
        </List>
      </Box>
    </Flex>
  );
}
export default Footer;
