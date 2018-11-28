import firebase from "firebase";
import config from "./config";

firebase.initializeApp(config);

const Firebase = firebase.database();

export default Firebase;
