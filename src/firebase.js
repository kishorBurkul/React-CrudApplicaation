import  firebase from 'firebase/app';
import "firebase/database";
import { initializeApp } from 'firebase/app';

 const firebaseConfig = {
    apiKey: "AIzaSyALL1N6ZrVH2ielq17EjIzsz40jRAShnzI",
    authDomain: "react-contact-b7023.firebaseapp.com",
    databaseURL: "https://react-contact-b7023-default-rtdb.firebaseio.com",
    projectId: "react-contact-b7023",
    storageBucket: "react-contact-b7023.appspot.com",
    messagingSenderId: "183097812829",
    appId: "1:183097812829:web:44129f8706b22d72f36ab4"
  };
  
  const fireDb = firebase.initializeApp(firebaseConfig);
//   const app = initializeApp(firebaseConfig);
export default fireDb.database().ref();