import { AuthConetext } from "../Componets/Context/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  let auth = useContext(AuthConetext);
  console.log(auth);
  useEffect(() => {
    if (!auth.authstatus) {
      return navigate("/signin");
    }
  });
  return children;
}

export default PrivateRoute;
