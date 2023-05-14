import React from "react";
import Navigation from "./components/Nav";
import Products from "./page/Products";
import { Route, Routes } from "react-router-dom";
import Main from "./page/MainBanner";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
