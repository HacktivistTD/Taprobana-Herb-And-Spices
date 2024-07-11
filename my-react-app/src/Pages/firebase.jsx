// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Your Firebase project configuration object
  apiKey: "AIzaSyBYPhDUvt40bHLblqocjUBAgSjeWxBZuNI",
  authDomain: "taprobana-taxi.firebaseapp.com",
  projectId: "taprobana-taxi",
  storageBucket: "taprobana-taxi.appspot.com",
  messagingSenderId: "426817909748",
  appId: "1:426817909748:web:287da41bf614e1b5dfbfa1",
  measurementId: "G-FPY4Z2H1GW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
