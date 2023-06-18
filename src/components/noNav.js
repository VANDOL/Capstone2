import React from "react";
import "./Nav.css";

const noNavBar = () => {
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
            <a class="link" href="./mun">
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
              <a class="link" href="/login">
                <h4> 로그인</h4>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default noNavBar;
