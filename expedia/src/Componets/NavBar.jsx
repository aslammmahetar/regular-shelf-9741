import {
  Box,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  HStack,
  Spacer,
  Icon,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, BellIcon } from "@chakra-ui/icons";
import img from "../images/20230328_153347.jpg";
import flight from "../images/flight_takeoff_FILL0_wght400_GRAD0_opsz48.png";
import Building from "../images/apartment_FILL0_wght400_GRAD0_opsz48.png";
import Car from "../images/directions_car_FILL0_wght400_GRAD0_opsz48.png";
import packege from "../images/package_FILL0_wght400_GRAD0_opsz48.png";
import ticket from "../images/local_activity_FILL0_wght400_GRAD0_opsz48.png";
import { BsFillDashSquareFill } from "react-icons/bs";
import { HiUser, HiSupport } from "react-icons/hi";
function Navbar() {
  return (
    <Box
      fontFamily={"sans-serif"}
      w={"100%"}
      pl={{ base: "5", sm: "5", md: "5", lg: "40" }}
      pr={{ base: "5", sm: "5", md: "5", lg: "40" }}
      //   borderBottom={"solid 1px black"}
      mt="0"
      boxShadow={"md"}
    >
      <Box
        border={"solid black"}
        display="flex"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex alignItems={"center"}>
          <Image src={img} w="150px" mt={"0"}></Image>
          <Menu isLazy>
            <MenuButton
              as={Button}
              background="none"
              ml={"6"}
              rightIcon={<ChevronDownIcon />}
            >
              More travel
            </MenuButton>
            <MenuList color={"#7D7C84"} w={"300px"}>
              <MenuItem fontSize={"lg"}>
                <Image pl={"2"} pr="2" src={Building} w="10" /> Stays
              </MenuItem>
              <MenuItem fontSize={"lg"}>
                <Image color={"7D7C84"} pl={"2"} pr="2" src={flight} w="10" />{" "}
                Flights
              </MenuItem>
              <MenuItem fontSize={"lg"}>
                <Image pl={"2"} pr="2" src={Car} w="10" /> Cars
              </MenuItem>
              <MenuItem fontSize={"lg"}>
                <Image pl={"2"} pr="2" src={packege} w="10" /> Packeges
              </MenuItem>
              <MenuItem fontSize={"lg"}>
                <Image pl={"2"} pr="2" src={ticket} w="10" /> Holidays
                activities
              </MenuItem>
              <MenuItem fontSize={"lg"} pl="6">
                Deals
              </MenuItem>
              <MenuItem fontSize={"lg"} pl="6">
                Groups & meetings
              </MenuItem>
              <MenuItem fontSize={"lg"} pl="6">
                Mobile
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Box border={"solid black"}>
          <Flex display={{ base: "none" }}>
            <Box>English</Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
export default Navbar;
