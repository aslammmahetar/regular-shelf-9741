import {
  Menu,
  MenuButton,
  MenuList,
  Image,
  Text,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { HiUserCircle } from "react-icons/hi";
import { useContext } from "react";
import { AuthConetext } from "../Context/AuthContext";
import FalseAuth from "./falseAuth";
import TrueAuth from "./TrueAuth";

function SignInDropDown() {
  const AuthCon = useContext(AuthConetext);
  const { authstatus } = AuthCon;
  console.log(AuthCon);

  return (
    <Menu>
      <MenuButton
        display={{ base: "none", sm: "none", md: "none", lg: "block" }}
      >
        <Text cursor={"pointer"} fontSize={"sm"}>
          Sign In
        </Text>
      </MenuButton>
      <MenuButton
        display={{ base: "block", sm: "block", md: "block", lg: "none" }}
      >
        <HiUserCircle cursor="pointer" />
      </MenuButton>
      <MenuList w={"370px"} color={"gray"}>
        {authstatus ? <TrueAuth /> : <FalseAuth />}
        <MenuDivider />
        <MenuList border="none">
          <MenuItem fontSize={"lg"}>List of favorites</MenuItem>
          <MenuItem fontSize={"lg"}>Expedia Rewards</MenuItem>
          <MenuDivider />
          <MenuItem fontSize={"lg"}>Customer Support</MenuItem>
          <MenuItem fontSize={"lg"}>Feedback</MenuItem>
          <MenuItem fontSize={"lg"}>
            English ⁌ INR ₹ ⁌
            <Image
              ml={1}
              src="https://a.travel-assets.com/egds/marks/flags/in.svg"
              w={"7"}
            />
          </MenuItem>
          <MenuDivider />
          {authstatus ? <MenuItem fontSize={"lg"}>Sign out</MenuItem> : null}
        </MenuList>
      </MenuList>
    </Menu>
  );
}

export default SignInDropDown;
