import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      window.alert("로그인 오류", "아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    const auth = getAuth();
    const firestore = getFirestore();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/main");
      })
      .catch((error) => {
        window.alert(
          "로그인 오류",
          "아이디 또는 비밀번호가 일치하지 않습니다."
        );
      });
  };

  return (
    <div className="text-center m-auto my-auto form-signin">
      <h1 class="h3 mb-3 fw-normal">로그인</h1>

      <div class="form-floating pb-1">
        <input
          type="email"
          class="form-control"
          value={email}
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="floatingInput">ID</label>
      </div>

      <div class="form-floating pb-2">
        <input
          type="password"
          class="form-control"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label for="floatingPassword">PW</label>
      </div>
      <div class="checkbox mb-2">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="w-50 btn btn-lg btn-primary" onClick={handleLogin}>
        Sign in
      </button>
      <p class="mt-2 mb-1 text-muted">&copy; 정규형</p>
    </div>
  );
}

export default Login;
