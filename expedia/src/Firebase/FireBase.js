import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCsVfHFTbTtGVstBU_K_6vSjd_m69CaxNA",
    authDomain: "expedia-83a97.firebaseapp.com",
    projectId: "expedia-83a97",
    storageBucket: "expedia-83a97.appspot.com",
    messagingSenderId: "500950925529",
    appId: "1:500950925529:web:a89909692d7f97e5ba7ec8",
    databaseURL: "https://expedia-83a97-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig)