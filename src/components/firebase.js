import firebase from 'firebase/App';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACyhGATtsY1wATXACLKaIn_sc--_l8-50",
  authDomain: "productos-ed7ea.firebaseapp.com",
  projectId: "productos-ed7ea",
  storageBucket: "productos-ed7ea.appspot.com",
  messagingSenderId: "789394833059",
  appId: "1:789394833059:web:0cd9e41ab3319dc8bd4916",
  measurementId: "G-79XRSRWXME"
};

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)