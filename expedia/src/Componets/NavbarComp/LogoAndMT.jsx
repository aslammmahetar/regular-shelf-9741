import {
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import img from "./images/20230328_153347.jpg";
import Building from "../NavbarComp/images/apartment_FILL0_wght400_GRAD0_opsz48.png";
import flight from "../NavbarComp/images/flight_takeoff_FILL0_wght400_GRAD0_opsz48.png";
import Car from "./images/directions_car_FILL0_wght400_GRAD0_opsz48.png";
import packege from "./images/package_FILL0_wght400_GRAD0_opsz48.png";
import ticket from "./images/local_activity_FILL0_wght400_GRAD0_opsz48.png";

function LogoAndMt() {
  return (
    <Flex color={"#343B53"} alignItems={"center"}>
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
        <MenuList w={"300px"} color={"gray"}>
          <MenuItem fontSize={"lg"}>
            <Image pl={"2"} pr="2" src={Building} w="10" /> Stays
          </MenuItem>
          <MenuItem fontSize={"lg"}>
            <Image color={"7D7C84"} pl={"2"} pr="2" src={flight} w="10" />
            Flights
          </MenuItem>
          <MenuItem fontSize={"lg"}>
            <Image pl={"2"} pr="2" w="10" src={Car} /> Cars
          </MenuItem>
          <MenuItem fontSize={"lg"}>
            <Image pl={"2"} pr="2" w="10" src={packege} /> Packeges
          </MenuItem>
          <MenuItem fontSize={"lg"}>
            <Image pl={"2"} pr="2" w="10" src={ticket} /> Holidays activities
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
  );
}

export default LogoAndMt;
