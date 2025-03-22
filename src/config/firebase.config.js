import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPluoBkfMm-Gyan1qj1n3BBe_kGkE-S_8",
  authDomain: "samsoor-portfolio.firebaseapp.com",
  projectId: "samsoor-portfolio",
  storageBucket: "samsoor-portfolio.firebasestorage.app",
  messagingSenderId: "210142910447",
  appId: "1:210142910447:web:8f73939139d7404d37881a",
  measurementId: "G-TH30DSQZK1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
