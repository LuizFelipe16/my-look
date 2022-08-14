import { initializeApp } from "firebase/app";

// ENV
const firebaseConfig = {
  apiKey: "AIzaSyDilMaC_FjuQZOBp2S_u6o7500QTeLy7A0",
  authDomain: "mylook-7a7ec.firebaseapp.com",
  projectId: "mylook-7a7ec",
  storageBucket: "mylook-7a7ec.appspot.com",
  messagingSenderId: "73945019810",
  appId: "1:73945019810:web:07f477e53ade641d316efb"
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
