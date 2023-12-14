import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

};

const db = initializeApp(firebaseConfig);
const firestore = getFirestore(db);
const auth = getAuth(db);

export default db;
