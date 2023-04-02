import {
  Stack,
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  Text,
  ModalFooter,
  Divider,
  Checkbox,
  RadioGroup,
  Radio,
  Grid,
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";

function LeftbBox({ getDocsbyQuery, search, handleSearch }) {
  console.log(search, handleSearch);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [chaked, setChecked] = useState(false);
  const [location, setLocation] = useState("");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Box>
      <Stack>
        <Text as={"b"} fontSize="lg">
          Search by Property name
        </Text>
        <Button
          onClick={onOpen}
          border="1px"
          p={1}
          display="flex"
          justifyContent={"start"}
        >
          <SearchIcon ml={2} mr={2.5} />
          e.g. Marriot
        </Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Search by property name</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <Input
                  ref={initialRef}
                  value={search}
                  onChange={handleSearch}
                  placeholder="e.g. Marriot"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={getDocsbyQuery}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Divider />
      </Stack>
      <hr style={{ width: "20%" }} />
      Box
      <Heading as="h3" size={"md"} mb="10px" textAlign="left" mt={"4"}>
        Filter by
      </Heading>
      <Flex direction={"column"}>
        <Text as={"b"}>Popular Filter</Text>
        <Stack spacing={2} mt="2px" direction="column" pl={"5"}>
          <Checkbox colorScheme="blue" value={"pool"}>
            Pool
          </Checkbox>
          <Checkbox colorScheme="blue" value={"parking"}>
            Parking
          </Checkbox>
          <Checkbox colorScheme="blue" value={"spa"}>
            Spa
          </Checkbox>
          <Checkbox
            colorScheme="blue"
            isChecked={chaked}
            onChange={(e) => setChecked(e.target.checked)}
            value={"free-wifi"}
          >
            Free-Wifi
          </Checkbox>
          <Checkbox colorScheme="blue" value={"a/c"}>
            A/c
          </Checkbox>
          <Checkbox colorScheme="blue" value={"gym"}>
            Gym
          </Checkbox>
        </Stack>
      </Flex>
      <Box mt={"12px"}>
        <Text as={"b"}>Property Class</Text>

        <Grid
          pl={5}
          gridTemplateColumns="repeat(2, 1fr)"
          gap={1}
          // gridTemplateRows="repeat(2, 1fr)"
          // display={"flex"}
        >
          <Button
            border={"1px solid"}
            w="50px"
            textAlign={"center"}
            borderRadius="5px"
          >
            1 ⭐
          </Button>

          <Button
            border={"1px solid"}
            w="50px"
            textAlign={"center"}
            borderRadius="5px"
          >
            2 ⭐
          </Button>
          <Button
            border={"1px solid"}
            w="50px"
            textAlign={"center"}
            borderRadius="5px"
          >
            3 ⭐
          </Button>
          <Button
            border={"1px solid"}
            w="50px"
            textAlign={"center"}
            borderRadius="5px"
          >
            4 ⭐
          </Button>
          <Button
            border={"1px solid"}
            w="50px"
            textAlign={"center"}
            borderRadius="5px"
          >
            5 ⭐
          </Button>
          <Button
            border={"1px solid"}
            w="50px"
            textAlign={"center"}
            borderRadius="5px"
          >
            6 ⭐
          </Button>
        </Grid>
      </Box>
      <Box mt={"12px"}>
        <Text as={"b"}>Area</Text>
        <RadioGroup>
          <RadioGroup
            value={location}
            onChange={(e) => console.log(e.target.value)}
          >
            <Stack pl={3} direction="column">
              <Radio value="vastapur">Vastapur</Radio>
              <Radio value="thaltej">Thaltej</Radio>
              <Radio value="ahmedabad">Ahmedabad</Radio>
            </Stack>
          </RadioGroup>
        </RadioGroup>
      </Box>
    </Box>
  );
}

export default LeftbBox;
