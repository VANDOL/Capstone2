import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDO7h9trUmWjT5-yZ6phkKBXWy7LHldgJs",
  authDomain: "test-7cf9e.firebaseapp.com",
  databaseURL: "https://test-7cf9e-default-rtdb.firebaseio.com",
  projectId: "test-7cf9e",
  storageBucket: "test-7cf9e.appspot.com",
  messagingSenderId: "427668302554",
  appId: "1:427668302554:web:6044ce31ddcea12226d3e3",
  measurementId: "G-K29BP5YM2T",
};

const db = initializeApp(firebaseConfig);
const firestore = getFirestore(db);
const auth = getAuth(db);

export default db;
