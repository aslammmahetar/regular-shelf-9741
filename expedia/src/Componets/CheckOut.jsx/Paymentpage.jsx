import {
  Box,
  Card,
  Input,
  FormControl,
  FormLabel,
  Text,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Button,
  Image,
} from "@chakra-ui/react";
import Navbar from "../NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function PaymentPage() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const toast = useToast();

  const fetchById = async () => {
    try {
      let req = await axios.get(
        `https://642913ceebb1476fcc42b19c.mockapi.io/hotels/${id}`
      );
      setData(req.data);
      console.log(req.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchById();
  }, []);

  const showToast = () => {
    toast({
      title: "Booking Completed",
      description: "We've booked hotel your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate("/");
  };
  return (
    <Box bgColor={"whitesmoke"}>
      <Navbar />
      <Card
        // border={"solid black"}
        m={"auto"}
        display={"flex"}
        flexDirection={"row"}
        mt={"10"}
        w={"70%"}
        justifyContent={"space-between"}
        // h={"100px"}
        p={3}
      >
        <Card w={"68%"} p={"3"}>
          <Heading mb={"2"} as="h4" size="md">
            Who is checkin ?
          </Heading>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input w={"55%"} type="text" placeholder="Enter your First Name" />
            <FormControl>
              <FormLabel>Surname</FormLabel>
              <Input w={"55%"} type="text" placeholder="Enter Your Last Name" />
            </FormControl>
            <FormControl>
              <FormLabel>Mobile Phone Number</FormLabel>
              <Input
                type="number"
                w={"55%"}
                placeholder="Enter your mobile number"
              />
            </FormControl>
          </FormControl>
        </Card>
        <Card
          w={"30%"}
          // border={"1px solid red"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={data?.image} opacity={"0.8"} />
          <Text as={"b"} textAlign={"center"}>
            {data?.name}
          </Text>
          <Text>
            1 Room: Deluxe Double Room with Garden View Room - Complimentary two
            way Airport transfer
          </Text>
        </Card>
      </Card>
      <Card
        // border={"solid black"}
        m={"auto"}
        display={"flex"}
        flexDir={"row"}
        w={"70%"}
        justifyContent={"space-between"}
        // h={"100px"}
        p={3}
      >
        <Box w={"70%"}>
          <Box>
            <Heading as="h4" size="md">
              Payment Method
            </Heading>
          </Box>
          <Box mt={"15px"}>
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab>Debit/Credit Card</Tab>
                <Tab>Net Banking</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <FormControl>
                    <FormLabel>Name On Card</FormLabel>
                    <Input type="text" />
                    <FormControl>
                      <FormLabel>Debit/Credit Card Number</FormLabel>
                      <Input w={"55%"} type="text" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Expiry date</FormLabel>
                      <Input type="number" w={"20%"} placeholder="Month" />
                      <Input type="number" w={"20%"} placeholder="Year" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Security code</FormLabel>
                      <Input type="number" w={"20%"} placeholder="CVV" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Pan</FormLabel>
                      <Input type="number" w={"50%"} placeholder="Pan Number" />
                    </FormControl>
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
              <Box textAlign={"center"} mt={"5"}>
                <Button colorScheme="yellow" onClick={showToast}>
                  Complete Booking{" "}
                </Button>
              </Box>
            </Tabs>
          </Box>
        </Box>
        <Box p={"2"} w={"30%"}>
          <Heading mb={2} as="h4" size="md">
            Price Details
          </Heading>
          <hr />
          <Box mt={"14px"}>
            <Text>Taxes and services fees </Text>
            <Text textAlign={"right"}>₹899.69</Text>
          </Box>
          <hr />
          <Box display={"flex"} justifyContent={"space-between"} mt={"5"}>
            <Text as={"b"} fontSize={"2xl"}>
              Total
            </Text>
            <Text as={"b"} fontSize={"2xl"}>
              ₹{data?.price}
            </Text>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
export default PaymentPage;
