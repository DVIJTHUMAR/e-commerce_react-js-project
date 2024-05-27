// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGPJ1DJckPoN0-LecvL6U0YSonWH6NUHs",
  authDomain: "moxfodadmin.firebaseapp.com",
  projectId: "moxfodadmin",
  storageBucket: "moxfodadmin.appspot.com",
  messagingSenderId: "337841941059",
  appId: "1:337841941059:web:b77d754e45b8325da7c2f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics  = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();