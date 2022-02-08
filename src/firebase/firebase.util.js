import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:`${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId:`${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
};

//create user database in firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(firestore, "user", userAuth.uid);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("some error in created :",err);
    }
  }
  return snapShot;
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebase sign up using username and password
export const authCreateUserWithEmailAndPassword = async (email, password) => {
  const data = await createUserWithEmailAndPassword(auth, email, password);

  return data.user;
};

//sign in user
export const signInUser=async(email,password)=>{
    const userVerify=await signInWithEmailAndPassword(auth,email, password)
    return userVerify
}

export const auth = getAuth(app);
export const firestore = getFirestore(app);

//set up google auth provider in pop-up
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
