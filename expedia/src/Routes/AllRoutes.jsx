import { Routes, Route } from "react-router-dom";
import Home from "../Componets/Home";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default AllRoutes;
