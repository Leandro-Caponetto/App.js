
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDuPdZlOb8NMSU2ILBycU_u-7x1MNx103I",
  authDomain: "carrito-app-f462b.firebaseapp.com",
  projectId: "carrito-app-f462b",
  storageBucket: "carrito-app-f462b.appspot.com",
  messagingSenderId: "819838584842",
  appId: "1:819838584842:web:03ccf6ef27e029ea8ab7f3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
