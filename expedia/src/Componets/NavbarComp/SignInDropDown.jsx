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
import { useContext, useEffect, useState } from "react";
import { AuthConetext } from "../Context/AuthContext";
import FalseAuth from "./falseAuth";
import TrueAuth from "./TrueAuth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Firebase/FireBase";

function SignInDropDown() {
  const AuthCon = useContext(AuthConetext);
  const { setisAuth } = AuthCon;
  // console.log(AuthCon);

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Hello", user);
        setUser(user);
        setisAuth(true);
      } else {
        setUser(null);
        setisAuth(false);
        console.log("you are logged out");
      }
    });
  }, []);

  const handleLogOut = () => {
    signOut(auth);
    setisAuth(false);
  };

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
        {user === null ? <FalseAuth /> : <TrueAuth mail={user.email} />}
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
          {user === null ? null : (
            <MenuItem fontSize={"lg"} onClick={handleLogOut}>
              Sign out
            </MenuItem>
          )}
        </MenuList>
      </MenuList>
    </Menu>
  );
}

export default SignInDropDown;
