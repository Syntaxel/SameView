import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
  
const firebaseConfig = {
  apiKey: "AIzaSyAhDkXE_qNh6FMuNZVvsxCtSNNEPKnnXzM",
  authDomain: "sameview-1c962.firebaseapp.com",
  projectId: "sameview-1c962",
  storageBucket: "sameview-1c962.appspot.com",
  messagingSenderId: "425102850310",
  appId: "1:425102850310:web:4662c32788ea53234fc687",
  measurementId: "G-961GMW5KXH"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth ,db };