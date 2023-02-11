import {initializeApp} from "firebase/app";

import { getAuth,createUserWithEmailAndPassword,
          signInWithEmailAndPassword,
          signInWithGoogle,
          signInWithFacebook,
         signInWithTwitter, 
         createUserWithEmailAndPassword} from "firebase/auth";

import {getStorage} from "firebase/storage"
import {initializeFirestore} from "firebase/firestore";

const firebaseConfig ={
    //myConfigKey
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage= getStorage(app);
export const dataBase= initializeFirestore(app);

export function signIn(email,password)
{
    return signInWithEmailAndPassword,signInWithGoogle (auth,email,password);
}

export function signUp (email,password)
{
    return createUserWithEmailAndPassword (auth,email,password);
}
