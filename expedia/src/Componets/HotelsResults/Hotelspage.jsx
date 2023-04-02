import {
  Box,
  Heading,
  Spinner,
  Button,
  Flex,
  Stack,
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
  Select,
} from "@chakra-ui/react";

import { GrSort } from "react-icons/gr";
import { Search2Icon, SearchIcon } from "@chakra-ui/icons";

import Navbar from "../NavBar";
import SignInSug from "./SignInSug";
import React from "react";
// import LeftbBox from "./LeftBox";
import RightBox from "./RightBox";
import { useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer";
import AdCard2 from "../Body/AdCard";

function HotelsPage() {
  const [chaked, setChecked] = useState(false);
  const [location, setLocation] = useState("");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sortSatus, setSortStatus] = useState(true);

  const [hotle, setHotel] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      let req = await axios.get(
        `https://642913ceebb1476fcc42b19c.mockapi.io/hotels`
      );
      if (sortSatus) {
        setHotel(req.data);
      }
      setLoading(false);
      // console.log(req.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  const asc = async () => {
    const asc = hotle.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
    });
    let data = asc;
    // setSortStatus(false);
    setHotel(data);
    console.log(data);
  };

  const desc = async () => {
    const desce = hotle.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
    });
    let data = desce;
    setSortStatus(false);
    setHotel(data);
    console.log(data);
  };

  const handleSort = (e) => {
    if (e.target.value === "desc") {
      desc();
    }
    if (e.target.value === "asc") {
      asc();
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleHotelSearch = () => {
    let filtered = hotle.filter((el) =>
      el.name.toLowerCase().includes(search.toLowerCase())
    );
    setHotel(filtered);
  };

  const btnRef = React.useRef(null);

  return (
    <Box bgColor={"whitesmoke"}>
      <Navbar />
      <Box
        w={{ base: "95%", sm: "95%", md: "95%", lg: "70%" }}
        m="auto"
        mt={"30px"}
        // border={"1px"}
      >
        <Heading as="h3" size={"md"} textAlign="center">
          Search Results for "Ahmedabad"
        </Heading>
        <SignInSug />
        <Box>
          <Box
            w={"80%"}
            m={"auto"}
            display="flex"
            justifyContent={"space-evenly"}
            alignItems="center"
            mt={"30px"}
          >
            <Button
              w="40%"
              ref={btnRef}
              onClick={onOpen}
              colorScheme={"blue"}
              variant={"outline"}
              display={{ base: "block", sm: "block", md: "block", lg: "none" }}
              // border="1px"
            >
              <Flex justifyContent={"center"} alignItems={"center"}>
                <Search2Icon />
                Search by property name
              </Flex>
            </Button>

            <Modal
              onClose={onClose}
              finalFocusRef={btnRef}
              isOpen={isOpen}
              scrollBehavior={scrollBehavior}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Search by Propertay name</ModalHeader>
                <ModalCloseButton />
                <ModalBody>{/* <LeftbBox /> */}</ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Select w={"40%"} placeholder="Asc / Desc" onChange={handleSort}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </Select>
          </Box>
          <Box display={"flex"}>
            <Box
              w={"20%"}
              mt={"15px"}
              pl="6px"
              display={{ base: "none", sm: "none", md: "none", lg: "block" }}
            >
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
                        <Button
                          onClick={handleHotelSearch}
                          colorScheme="blue"
                          mr={3}
                        >
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
                <Heading
                  as="h3"
                  size={"md"}
                  mb="10px"
                  textAlign="left"
                  mt={"4"}
                >
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
            </Box>
            <Box w={"100%"}>
              {loading ? (
                <Box
                  mt={"25px"}
                  mb={"25px"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                </Box>
              ) : (
                <RightBox hotel={hotle} />
              )}
            </Box>
          </Box>
        </Box>
        <AdCard2 />
        <Footer />
      </Box>
    </Box>
  );
}
export default HotelsPage;

// const getDocsbyQuery = async () => {
//   const collctionref = collection(firestore, "hotels");
//   const q = query(collctionref, where("location", "==", search));
//   const snap = await getDocs(q);
//   console.log(q);
//   snap.forEach((data) => console.log(data.data()));
// };

// const firestore = getFirestore(app);
// console.log(firestore);

// useEffect(() => {
//   setLoading(true);
//   getList().then((docs) => {
//     console.log(docs.docs[0].data());
//   });
// }, []);
// import { FireBaseContext } from "../Context/HotelsContext";

// const useFireBase = useContext(FireBaseContext);
// const { getList } = useFireBase;
// import { app } from "../../Firebase/FireBase";
// import {
//   collection,
//   query,
//   getDocs,
//   getFirestore,
//   where,
// } from "firebase/firestore";
