import {
  Menu,
  MenuButton,
  MenuList,
  Box,
  Image,
  Text,
  Button,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

function SignInText() {
  return (
    <Menu>
      <MenuButton>
        <Text cursor={"pointer"} fontSize={"sm"}>
          Sign In
        </Text>
      </MenuButton>
      <MenuList w={"370px"} color={"gray"}>
        <Box justifyContent={"center"} p="7">
          <Image
            src="https://a.travel-assets.com/pricing-claim/sparkle_white.svg"
            m={"auto"}
            mb="3"
          />
          <Text fontStyle={"oblique"} size="lg" color={"black"}>
            Save an average of 15% <br /> on thousands of hotels when you're
            signed in
          </Text>
          <Button colorScheme="messenger" w={"100%"} mt="3">
            Sign In
          </Button>
          <Box
            display={"flex"}
            justifyContent={"center"}
            mt="3"
            color="#343B53"
          >
            <Button variant={"ghost"} fontSize={"lg"} cursor="pointer">
              Create a free account
            </Button>
          </Box>
        </Box>
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
        </MenuList>
      </MenuList>
    </Menu>
  );
}

export default SignInText;
