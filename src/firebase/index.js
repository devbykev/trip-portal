import { initializeApp } from "firebase/app";
import { getAuth }  from "firebase/auth";
import { getFunctions, httpsCallable } from 'firebase/functions'


const firebaseConfig = {
    // Replace with Firebase config object
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Ref to Firebase services
const auth = getAuth(app);
const functions = getFunctions();

//Ref to cloud functions
const readRadarTrips = httpsCallable(functions, 'readRadarTrips');

export { auth, readRadarTrips }