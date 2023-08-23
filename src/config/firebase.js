import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAPPEJ4nDJI71gIe0YdFyxFvEcpVWabtew",
  authDomain: "fir-project-8b34c.firebaseapp.com",
  projectId: "fir-project-8b34c",
  storageBucket: "fir-project-8b34c.appspot.com",
  messagingSenderId: "542484831178",
  appId: "1:542484831178:web:d7fb89a020ee2119fb8d33",
  measurementId: "G-0F3N84TBJB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
