import { useParams } from "react-router-dom";
// import { FireBaseContext } from "../Context/HotelsContext";
// import { useContext, useEffect } from "react";
import Navbar from "../NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import HotelImages from "./HDImage";

import Footer from "../Footer";
import Facilites from "./HotelFacilities";
import AdCard2 from "../Body/AdCard";
function HotelDetails() {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log(id);

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

  return (
    <>
      <Navbar />
      <HotelImages data={data} />
      <Facilites data={data} />
      <AdCard2 />
      <Footer />
    </>
  );
}
export default HotelDetails;
