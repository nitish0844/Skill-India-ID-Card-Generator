import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDXNPH7F6FiynevKMd6Hwj5Um-DEB2Y3g",
  authDomain: "idcardgenerator-83d6b.firebaseapp.com",
  projectId: "idcardgenerator-83d6b",
  storageBucket: "idcardgenerator-83d6b.appspot.com",
  messagingSenderId: "1008892537878",
  appId: "1:1008892537878:web:47fbddc57622f183f31937",
};

const app = initializeApp(firebaseConfig);

export const Storage_Bucket = getStorage(app);
export const db = getFirestore(app);

export const auth = getAuth(app);
