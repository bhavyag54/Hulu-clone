import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCRw1nB6_6rln_hxt21oQ3bKjb30n6OkEI",
    authDomain: "hulu-2-clone.firebaseapp.com",
    projectId: "hulu-2-clone",
    storageBucket: "hulu-2-clone.appspot.com",
    messagingSenderId: "865377581692",
    appId: "1:865377581692:web:c54ae303200ef5063ba7f9",
    measurementId: "G-2LQ2G59GNL"
  };


if(!firebase.apps.length) { 
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();


export {firestore};