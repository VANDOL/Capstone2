import React, { useState, useEffect } from "react";
import NoNav from "./components/noNav";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import White from "./components/white";
import Login from "./components/Login";
import List_table from "./components/list_table";
import Qna_table from "./components/qna_table";
import User_table from "./components/user_table";
import End_table from "./components/list_end";

import "firebase/auth";
import { getAuth } from "firebase/auth";
import db from "./firebase";

const auth = getAuth(db);

const App = () => {
  const [isLoggedIn, setisLogged] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setisLogged(true);
      } else {
        setisLogged(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log(isLoggedIn);

  return (
    <div>
      {isLoggedIn === null ? <White /> : isLoggedIn ? <Nav /> : <NoNav />}
      <main>
        <Routes>
          <Route path="/" element={<White />} />
          {isLoggedIn ? <Route path="/main" element={<White />} /> : <Route />}
          {isLoggedIn ? (
            <Route path="/user" element={<User_table />} />
          ) : (
            <Route />
          )}
          {isLoggedIn ? (
            <Route path="/end_list" element={<End_table />} />
          ) : (
            <Route />
          )}
          {isLoggedIn ? (
            <Route path="/mun" element={<Qna_table />} />
          ) : (
            <Route />
          )}

          {isLoggedIn ? (
            <Route path="/list" element={<List_table />} />
          ) : (
            <Route />
          )}
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
