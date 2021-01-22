import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCnKaO-2mDkA8C8vxdhGvW4BEhK12n9Lsg",
  authDomain: "basededatosp-12595.firebaseapp.com",
  databaseURL: "https://basededatosp-12595-default-rtdb.firebaseio.com",
  projectId: "basededatosp-12595",
  storageBucket: "basededatosp-12595.appspot.com",
  messagingSenderId: "496978153309",
  appId: "1:496978153309:web:644d70f3119071b8e6e2b4",
  measurementId: "G-RN159RXQ0R"
  };

const fire= firebase.initializeApp(firebaseConfig);

export const db = fire.firestore();
export default fire;