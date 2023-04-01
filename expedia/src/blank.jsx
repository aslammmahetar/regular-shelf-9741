import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { FireBaseContext } from "./Componets/Context/HotelsContext";
function Blanck() {
  const useFireBase = useContext(FireBaseContext);
  const [hotle, setHotel] = useState([]);
  const { getList } = useFireBase;
  useEffect(() => {
    getList().then((docs) => setHotel(docs.docs));
  }, []);

  return (
    <Box>
      {hotle.map((el) => {
        return <li>{el.data().name} </li>;
      })}
    </Box>
  );
}
export default Blanck;
