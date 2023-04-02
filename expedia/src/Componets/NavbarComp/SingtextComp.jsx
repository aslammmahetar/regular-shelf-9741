import {
  Menu,
  MenuButton,
  MenuList,
  Image,
  Text,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AuthConetext } from "../Context/AuthContext";
import FalseAuth from "./falseAuth";
import TrueAuth from "./TrueAuth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Firebase/FireBase";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function SignInText() {
  const AuthCon = useContext(AuthConetext);
  const { setisAuth } = AuthCon;
  // console.log(AuthCon);

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const toast = useToast();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Hello", user);
        setUser(user);
        setisAuth(true);
      } else {
        setUser(null);
        setisAuth(false);
        // console.log("you are logged out");
      }
    });
  }, []);

  const handleLogOut = () => {
    signOut(auth);
    setisAuth(false);
    navigate("/");
    toast({
      title: "Logout Successfully",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Menu>
      <MenuButton>
        <Text cursor={"pointer"} fontSize={"sm"}>
          Sign In
        </Text>
      </MenuButton>
      <MenuList w={"370px"} color={"gray"}>
        {user === null ? (
          <FalseAuth />
        ) : (
          <TrueAuth
            name={user.displayName}
            mail={user.email}
            img={user.photoURL}
          />
        )}
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

export default SignInText;
