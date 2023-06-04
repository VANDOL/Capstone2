import React from "react";
import Navigation from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Login from "./components/Login";
//import { auth } from "./firebase";

import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

function App() {
  console.log(auth);
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
