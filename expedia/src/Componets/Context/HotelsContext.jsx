import { createContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { app } from "../../Firebase/FireBase";

const firebaseConfig = {
  apiKey: "AIzaSyAOmX7IfvsbzTc0U2xXnZAOnMPce6wwRQs",
  authDomain: "sanvel-ff19c.firebaseapp.com",
  projectId: "sanvel-ff19c",
  storageBucket: "sanvel-ff19c.appspot.com",
  messagingSenderId: "340232512188",
  appId: "1:340232512188:web:7e09c6b20c30bda8afa6b9",
  databaseURL: "https://sanvel-ff19c-default-rtdb.firebaseio.com/",
};
// export const useFirebase = useContext(FirebaseProvider);

const firebase = initializeApp(firebaseConfig);
export const FireBaseContext = createContext(null);

const fireStore = getFirestore(app);

const getList = () => {
  return getDocs(collection(fireStore, "hotels"));
};

const getHotelById = async (id) => {
  let docRef = doc(fireStore, "hotels", id);
  let result = await getDoc(docRef);
  return result;
};

export const FirebaseProvider = ({ children }) => {
  return (
    <FireBaseContext.Provider value={{ getList, getHotelById }}>
      {children}
    </FireBaseContext.Provider>
  );
};
