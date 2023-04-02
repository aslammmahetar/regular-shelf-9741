import {
  Stack,
  Box,
  Heading,
  Image,
  Divider,
  Text,
  Button,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { auth } from "../../Firebase/FireBase";
import img from "./img/download1.jpg";
import { EmailIcon, ViewIcon } from "@chakra-ui/icons";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthConetext } from "../Context/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const googleProvider = new GoogleAuthProvider();

function LoginBox() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const loginAuth = useContext(AuthConetext);
  const { loginUser, setisAuth } = loginAuth;
  console.log(loginAuth);

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const signUpUser = async () => {
    try {
      let req = await loginUser(email, password);
      setisAuth(true);
      navigate("/");
      alert("login succesful");
      console.log(req);
    } catch (error) {
      console.log(error);
      alert("wrong credential");
    }
  };
  const toast = useToast();

  const SigninWthGoogle = () => {
    signInWithPopup(auth, googleProvider);
    setTimeout(() => {
      navigate("/");
      toast({
        title: "Login Successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }, 9000);
  };

  return (
    <>
      <Box p={4} w={"460px"} boxShadow="md" m={"auto"} mt="30px">
        <Stack spacing={"26px"}>
          <Heading>Sign In</Heading>
          <Divider></Divider>
          <Text mt={"5"}>
            Save an average of 15% on thousands of hotels as a member—it’s
            always free.
          </Text>
          <Button colorScheme={"blue"} w="100%" p={6} onClick={SigninWthGoogle}>
            <Image src={img} borderRadius="5px" mr={"1"} w="30px"></Image>
            Sign in with google
          </Button>
          <Text textAlign={"center"}>Or</Text>
          <InputGroup>
            <InputLeftElement
              mt={3}
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
            <Input
              type="emial"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              pt={7}
              pb="7"
              isRequired
            />
          </InputGroup>
          <InputGroup size="md">
            <Input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              p={7}
              isRequired
            />
            <InputRightElement width="4.5rem">
              <ViewIcon mt={5} h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </ViewIcon>
            </InputRightElement>
          </InputGroup>
          <Box>
            <Text>
              By signing in, I agree to the Expedia Terms and Conditions,
              Privacy Statement and Expedia Rewards Terms and Conditions.
            </Text>
          </Box>
          <Button
            w={"100%"}
            colorScheme="blue"
            isDisabled={email === "" && password === ""}
            onClick={signUpUser}
          >
            Sign In
          </Button>
          <Stack textAlign={"center"} direction="column">
            <Text>Forgot password?</Text>
            <Text>
              Don't have an account?{" "}
              <Link to={"/createaccount"}> Create one </Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default LoginBox;
