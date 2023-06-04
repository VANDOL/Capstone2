import React from "react";
import Navigation from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Login from "./components/Login";
import { auth } from "./firebase";

function App() {
  console.log(auth);
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
