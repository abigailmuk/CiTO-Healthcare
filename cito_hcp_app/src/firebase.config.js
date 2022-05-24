import { initializeApp } from "firebase/app";


import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAKV-0hLag_J_JlX2ccKvrLwF6eff3CTOw",
  authDomain: "cito-hcp.firebaseapp.com",
  projectId: "cito-hcp",
  storageBucket: "cito-hcp.appspot.com",
  messagingSenderId: "44256641991",
  appId: "1:44256641991:web:58005dd5e1b1dcd2b4cfe2",
  measurementId: "G-JMHY3EJT3R"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }