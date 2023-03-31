import { Routes, Route } from "react-router-dom";
import Home from "../Componets/Home";
import HotelsPage from "../Componets/HotelsResults/Hotelspage";
import Login from "../Componets/Handleuser/Login";
import CreatNewAccount from "../Componets/Handleuser/CNA";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/hotels" element={<HotelsPage />}></Route>
      <Route path="/signin" element={<Login />}></Route>
      <Route path="/createaccount" element={<CreatNewAccount />}></Route>
    </Routes>
  );
}

export default AllRoutes;
