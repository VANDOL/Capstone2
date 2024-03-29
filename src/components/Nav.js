import React from "react";
import { signOut, getAuth } from "firebase/auth";
import "./Nav.css";
import db from "../firebase";

const NavBar = () => {
  const auth = getAuth(db);
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <nav class="main_nav">
      <div class="conts">
        <ul class="navba">
          <li class="item">
            <a class="link" href="./list">
              <h4>경매진행내역</h4>
            </a>
          </li>
          <li class="item">
            <a class="link" href="./end_list">
              <h4> 경매완료내역</h4>
            </a>
          </li>
          <li class="item">
            <a class="link" href="./mun">
              <h4> 문의내역</h4>
            </a>
          </li>
          <li class="item ">
            <a class="link " href="./user">
              <h4>회원관리</h4>
            </a>
          </li>
          <li class="logout ">
            <div>
              <a class="link" href="/" onClick={logout}>
                <h4> 로그아웃</h4>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
