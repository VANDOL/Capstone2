import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import db from "../firebase";
import {
  collection,
  query,
  where,
  getFirestore,
  getDocs,
} from "firebase/firestore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      window.alert("로그인 오류", "아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    const auth = getAuth(db);

    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        const firestore = getFirestore(db);
        const listRef = collection(firestore, "Users");
        const q = query(listRef, where("adminvalue", "==", 0));
        const data = await getDocs(q);
        const newData = data.docs.map((doc) => ({ ...doc.data() }));

        /* console.log(newData[0].email); */
        if (newData[0].email === email) {
          navigate("/main");
        } else {
          window.alert("로그인 오류", "해당 권한이 없습니다.");
        }
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
      <button class="w-50 btn btn-lg btn-primary" onClick={handleLogin}>
        Sign in
      </button>
      <p class="mt-2 mb-1 text-muted">&copy; 정규형</p>
    </div>
  );
}

export default Login;
