// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig2 = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,

}
// NEXT_PUBLIC_FIREBASE_API_KEY = AIzaSyDLO1SpyHgSlFVgASfeSivkR0_LMi_pwE0
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = cse470 - f7ddf.firebaseapp.com
// NEXT_PUBLIC_FIREBASE_PROJECT_ID = ccse470 - f7ddf
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = cse470 - f7ddf.appspot.com
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = 1093399606317
// NEXT_PUBLIC_FIREBASE_APP_ID = 1: 1093399606317: web: d0858679e283b3795d74a4
// NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = G - F91332VJM1


const firebaseConfig = {

  apiKey: "AIzaSyAyka1l_uySKA2vMaADshMFPbM0rM4edYY",

  authDomain: "cse470-6fd25.firebaseapp.com",

  projectId: "cse470-6fd25",

  storageBucket: "cse470-6fd25.appspot.com",

  messagingSenderId: "638756388365",

  appId: "1:638756388365:web:ebea075969c185f86c9f44",

  measurementId: "G-3WW53ZQRZ0"

};

// Initialize Firebase
let firebase_app = initializeApp(firebaseConfig);

export default firebase_app;