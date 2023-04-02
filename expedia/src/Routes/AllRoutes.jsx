import { Routes, Route } from "react-router-dom";
import Home from "../Componets/Home";
import HotelsPage from "../Componets/HotelsResults/Hotelspage";
import Login from "../Componets/Handleuser/Login";
import CreatNewAccount from "../Componets/Handleuser/CNA";
import Blanck from "../blank";
import HotelDetails from "../Componets/HotelsResults/HotelDetails";
import PrivateRoute from "./ProivateRoute";
import PaymentPage from "../Componets/CheckOut.jsx/Paymentpage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/hotels" element={<HotelsPage />}></Route>
      <Route path="/signin" element={<Login />}></Route>
      <Route path="/createaccount" element={<CreatNewAccount />}></Route>
      <Route
        path="hotels/:id"
        element={
          <PrivateRoute>
            <HotelDetails />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/payment/:id" element={<PaymentPage />}></Route>
    </Routes>
  );
}

export default AllRoutes;
