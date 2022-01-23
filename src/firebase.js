// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEFAK733DWFlA1dNwRnKa_UBOA19Uovqc",
  authDomain: "netflix-clone-58408.firebaseapp.com",
  projectId: "netflix-clone-58408",
  storageBucket: "netflix-clone-58408.appspot.com",
  messagingSenderId: "16512178118",
  appId: "1:16512178118:web:02add126d5d249610544c7",
  measurementId: "G-8XS65LNJXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);