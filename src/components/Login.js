import React from "react";
import "./Login.css";

function Login() {
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
          />
          <label for="floatingInput">ID</label>
        </div>

        <div class="form-floating pb-2">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">PW</label>
        </div>
        <div class="checkbox mb-2">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="w-50 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p class="mt-2 mb-1 text-muted">&copy; 정규형</p>
      </form>
    </div>
  );
}

export default Login;
