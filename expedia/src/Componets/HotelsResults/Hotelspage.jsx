import {
  Box,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Flex,
  Select,
  ModalCloseButton,
} from "@chakra-ui/react";

import { GrSort } from "react-icons/gr";
import Navbar from "../NavBar";
import SignInSug from "./SignInSug";
import React from "react";
import LeftbBox from "./LeftBox";
import RightBox from "./RightBox";
import { useDisclosure } from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import { FireBaseContext } from "../Context/HotelsContext";

function HotelsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const [loading, setLoading] = useState(false);

  const useFireBase = useContext(FireBaseContext);
  const [hotle, setHotel] = useState([]);
  const { getList } = useFireBase;
  useEffect(() => {
    setLoading(true);
    getList().then((docs) => {
      console.log(docs.docs[0].data());
      setHotel(docs.docs);
      setLoading(false);
    });
  }, []);

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
                <GrSort />
                Sort & Filter
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
                <ModalHeader>Sort & filter</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <LeftbBox />
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Select w={"40%"} placeholder="Woohoo! A new icon" />
          </Box>
          <Box display={"flex"}>
            <Box
              w={"20%"}
              mt={"15px"}
              pl="6px"
              display={{ base: "none", sm: "none", md: "none", lg: "block" }}
            >
              <LeftbBox />
            </Box>
            <Box w={"100%"}>
              {loading ? (
                <Heading>Loading...</Heading>
              ) : (
                <RightBox hotel={hotle} />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default HotelsPage;
