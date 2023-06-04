import React, { useState, useEffect } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import firebase from "firebase/compat/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPwd, setInputPwd] = useState("");
  const auth = getAuth();
  const history = useHistory();

  const loginBtn = async () => {
    await signInWithEmailAndPassword(auth, inputId, inputPwd)
      .then((userCredential) => {
        console.log(userCredential);
        console.log("로그인이 완료되었습니다.");
        history.push("/main");
      })
      .catch((err) => {
        let errCode = err.code;
        let errMsg = err.message;
        console.log(errCode);
        console.log(errMsg);
      });
  };

  return (
    <div className="text-center m-auto my-auto form-signin">
      <form>
        <h1 class="h3 mb-3 fw-normal">로그인</h1>

        <div class="form-floating pb-1">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setInputId(e.target.value)}
          />
          <label for="floatingInput">ID</label>
        </div>

        <div class="form-floating pb-2">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setInputPwd(e.target.value)}
          />
          <label for="floatingPassword">PW</label>
        </div>
        <div class="checkbox mb-2">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          class="w-50 btn btn-lg btn-primary"
          onClick={loginBtn}
          type="submit"
        >
          Sign in
        </button>
        <p class="mt-2 mb-1 text-muted">&copy; 정규형</p>
      </form>
    </div>
  );
}

export default Login;
