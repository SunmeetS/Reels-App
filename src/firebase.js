import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// renu.kaber@gmail.com

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAMiM9m99fWMGOVOE5e4fRc0C8yib7oqSY",
  authDomain: "fir-app-a92d0.firebaseapp.com",
  projectId: "fir-app-a92d0",
  storageBucket: "fir-app-a92d0.appspot.com",
  messagingSenderId: "222858821870",
  appId: "1:222858821870:web:c82ba213e68a4c3e63f3ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const db = getFirestore(app);    
export const storage = getStorage(app);

    