import { getDatabase, ref, set } from 'firebase/database'
import { app } from './Firebase/FireBase';
import './App.css';
// import 
import AllRoutes from './Routes/AllRoutes'
import Data from './db.json'

const db = getDatabase(app)
console.log(db)

function App() {

  const putData = () => {
    set(ref(db),)
  }

  return <div>
    <AllRoutes />
  </div>
}

export default App;
