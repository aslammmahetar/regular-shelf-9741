import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAOmX7IfvsbzTc0U2xXnZAOnMPce6wwRQs",
    authDomain: "sanvel-ff19c.firebaseapp.com",
    projectId: "sanvel-ff19c",
    storageBucket: "sanvel-ff19c.appspot.com",
    messagingSenderId: "340232512188",
    appId: "1:340232512188:web:7e09c6b20c30bda8afa6b9",
    databaseURL: "https://sanvel-ff19c-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const database = getDatabase(app)
