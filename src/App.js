import React from "react";
import Navigation from "./components/Nav";
import Products from "./page/Products";
import { Route, Routes } from "react-router-dom";
import Main from "./page/MainBanner";

function App() {
  return (
    <div>
      <Navigation />
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
