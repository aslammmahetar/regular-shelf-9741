import { Heading, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { FireBaseContext } from "../Context/HotelsContext";
import { useContext, useEffect } from "react";
import Navbar from "../NavBar";
function HotelDetails() {
  const { id } = useParams();
  console.log(id);
  const { getHotelById } = useContext(FireBaseContext);

  useEffect(() => {
    getHotelById(id).then((value) => console.log(value.data()));
  }, []);

  return (
    <>
      <Navbar />
      <Box w={"70%"} border={"1px"} h={"100px"}></Box>
    </>
  );
}
export default HotelDetails;
