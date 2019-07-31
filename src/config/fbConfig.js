import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyDuHLYI8NN_MZ_M4a-_DnJElHOCz5zJQM4",
  authDomain: "shopping-cart-cca15.firebaseapp.com",
  databaseURL: "https://shopping-cart-cca15.firebaseio.com",
  projectId: "shopping-cart-cca15",
  storageBucket: "",
  messagingSenderId: "295943579775",
  appId: "1:295943579775:web:d5b23f4826120634"
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
