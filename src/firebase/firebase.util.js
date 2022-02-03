
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import {GoogleAuthProvider,signInWithPopup,getAuth}from'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaYXU8jOn4E_VS3G0KGCiITCuSBxBRfJk",
    authDomain: "ecommerce-f5e5f.firebaseapp.com",
    projectId: "ecommerce-f5e5f",
    storageBucket: "ecommerce-f5e5f.appspot.com",
    messagingSenderId: "645009235619",
    appId: "1:645009235619:web:1e729a8f632ca434b42916"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


const provider=new GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>signInWithPopup(auth,provider)

