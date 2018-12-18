import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCSMJ_ZW6OOT1Fe81oPMqN_xw3FcnCYYtA",
  authDomain: "we-manager.firebaseapp.com",
  databaseURL: "https://we-manager.firebaseio.com",
  projectId: "we-manager",
  storageBucket: "we-manager.appspot.com",
  messagingSenderId: "851309517547"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
