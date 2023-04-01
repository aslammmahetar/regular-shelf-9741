import './App.css';
import AllRoutes from './Routes/AllRoutes'
import { getFirestore, collection, addDoc, doc, getDoc, query, where, getDocs } from 'firebase/firestore'
import { app } from './Firebase/FireBase';
import { getStorage, } from 'firebase/storage'

const firebaseGetStorage = getStorage(app)

const firestore = getFirestore(app)
console.log(firestore)

function App() {

  const writeData = async () => {
    const result = await addDoc(collection(firestore, "city"), {
      name: "Dhasa",
      pincode: "123456",
      lat: 123,
      longL: 123
    })
    console.log(result)
  }
  const getDocument = async () => {
    const ref = doc(firestore, "city", "Lj1cdxAvtVCeWOHKwRC3")
    const snap = await getDoc(ref)
    console.log(snap.data())
  }

  const getDocsbyQuery = async () => {
    const collctionref = collection(firestore, "hotels")
    const q = query(collctionref, where("location", "==", "Prahalad Nagar"))
    const snap = await getDocs(q)
    snap.forEach((data) => console.log(data.data()))
  }

  const listHotels = () => {
    return getDocs(collection(firestore, "hotel"))
  }

  return <div>
    <AllRoutes />
  </div>
}

export default App;
