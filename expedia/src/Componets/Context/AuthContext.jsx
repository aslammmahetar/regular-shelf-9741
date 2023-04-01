import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { set, ref } from "firebase/database";
import { database } from "../../Firebase/FireBase";
import { auth } from "../../Firebase/FireBase";
export const AuthConetext = createContext();

export function AuthConetextProvider({ children }) {
  const [authstatus, setisAuth] = useState(false);

  const createNewAccount = (auth, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const putData = (key, data) => {
    return set(ref(database, key), data);
  };

  const loginUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthConetext.Provider
      value={{ createNewAccount, loginUser, putData, authstatus, setisAuth }}
    >
      {children}
    </AuthConetext.Provider>
  );
}
