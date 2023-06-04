import React, { Component } from "react";
import "./Nav.css";

const NavBar = () => {
  return (
    <nav class="main_nav">
      <div class="conts">
        <ul class="navba">
          <li class="item">
            <a class="link" href="../product">
              <h4>경매내역</h4>
            </a>
          </li>
          <li class="item">
            <a class="link" href="../product">
              <h4> 문의내역</h4>
            </a>
          </li>
          <li class="item ">
            <a class="link " href="../product">
              <h4>회원관리</h4>
            </a>
          </li>
          <li class="logout ">
            <a class="link" href="/login">
              <h4> 로그아웃</h4>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
