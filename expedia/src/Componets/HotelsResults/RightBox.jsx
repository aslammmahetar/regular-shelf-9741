import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import HotelCard from "./HotelCard";

function RightBox({ hotel }) {
  console.log(hotel);
  const param = useParams();
  console.log(param);

  return (
    <Box mt={"25px"}>
      {hotel.map((el) => {
        return <HotelCard key={el.id} data={el} />;
      })}
    </Box>
  );
}
export default RightBox;
