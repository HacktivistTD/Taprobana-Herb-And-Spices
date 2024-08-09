// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBC4PZYhNP9rWxLXK0rCqdhCcEM8qaG3TE",
  authDomain: "herb-and-spices-886a3.firebaseapp.com",
  projectId: "herb-and-spices-886a3",
  storageBucket: "herb-and-spices-886a3.appspot.com",
  messagingSenderId: "575800587705",
  appId: "1:575800587705:web:0256d18f1871422e2f3268"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
