
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';
import {GoogleAuthProvider,signInWithPopup,getAuth,createUserWithEmailAndPassword}from'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaYXU8jOn4E_VS3G0KGCiITCuSBxBRfJk",
    authDomain: "ecommerce-f5e5f.firebaseapp.com",
    projectId: "ecommerce-f5e5f",
    storageBucket: "ecommerce-f5e5f.appspot.com",
    messagingSenderId: "645009235619",
    appId: "1:645009235619:web:1e729a8f632ca434b42916"
  };

export const createUserProfileDocument=async (userAuth,additionalData) => {
    if (!userAuth) return;
    const userRef=doc(firestore,'user',userAuth.uid);
    console.log(userRef);
    const snapShot=await getDoc(userRef)
    console.log(snapShot.exists());
    
    if(!snapShot.exists()){
        const {displayName,email}=userAuth
        const createdAt=new Date()
        
        try{
           await setDoc(userRef,{
                displayName,
                email,
                createdAt,
                ...additionalData
            
            })
        }catch(err){
            console.log('some error in created :')

        }
    }
    return snapShot
  
    
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authCreateUserWithEmailAndPassword=async(email,password) =>{

    const data =await createUserWithEmailAndPassword(auth, email, password)

    return data.user
}

export const auth = getAuth();
export const firestore =getFirestore(app);;

const provider=new GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>signInWithPopup(auth,provider)

