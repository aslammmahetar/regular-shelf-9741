import { Routes, Route } from "react-router-dom";
import LoginOrSignIn from "../Componets/Handleuser/LoginAndSignIn";
import Home from "../Componets/Home";
import HotelsPage from "../Componets/HotelsResults/Hotelspage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/hotels" element={<HotelsPage />}></Route>
      <Route path="/login&creatAccount" element={<LoginOrSignIn />}></Route>
    </Routes>
  );
}

export default AllRoutes;
