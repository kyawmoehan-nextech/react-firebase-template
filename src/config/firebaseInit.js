import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

// Initialize Firebase
export const firebaseInit = firebase.initializeApp(firebaseConfig);

// Initialize Firestore
export const db = firebase.firestore();

// Initialize storage
const storage = firebase.storage();
export const storageRef = storage.ref();
