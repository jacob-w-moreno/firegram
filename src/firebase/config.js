import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2LbQSP8oF5QaibFPBWtpIDjZh8W9ICI0",
  authDomain: "firegram-53615.firebaseapp.com",
  projectId: "firegram-53615",
  storageBucket: "firegram-53615.appspot.com",
  messagingSenderId: "553023231073",
  appId: "1:553023231073:web:b689b664515d5bdfe10620"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };